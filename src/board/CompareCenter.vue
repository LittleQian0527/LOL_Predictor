<script setup>
import { ref, computed, watch } from 'vue'
import { playersDb } from '../data/playersDb'
import { coachesDb } from '../data/coachesDb'
import { teamsDb } from '../data/teamsDb'

// 引入三个画板组件
import TeamCompareBoard from './TeamCompareBoard.vue'
import VersusBoard from './VersusBoard.vue'
import CoachCompareBoard from './CoachCompareBoard.vue'

// ================= 1. 战队对比逻辑 =================
const teamAId = ref('')
const teamBId = ref('')
const teamList = computed(() => Object.values(teamsDb))
const selectedTeamA = computed(() => teamsDb[teamAId.value])
const selectedTeamB = computed(() => teamsDb[teamBId.value])

// ================= 2. 选手对比逻辑 =================
const roleList = [
  { value: 'top', label: '上单 (TOP)' },
  { value: 'jug', label: '打野 (JUG)' },
  { value: 'mid', label: '中单 (MID)' },
  { value: 'adc', label: '射手 (ADC)' },
  { value: 'sup', label: '辅助 (SUP)' },
]
const selectedRole = ref('top') // 默认选中上单
const playerAId = ref('')
const playerBId = ref('')

// 监听位置变化，如果位置变了，清空已选的选手，防止跨位置对比
watch(selectedRole, () => {
  playerAId.value = ''
  playerBId.value = ''
})

// 根据选择的位置，动态过滤出对应的选手
const filteredPlayers = computed(() => {
  return Object.values(playersDb).filter(p => p.role === selectedRole.value)
})
const selectedPlayerA = computed(() => playersDb[playerAId.value])
const selectedPlayerB = computed(() => playersDb[playerBId.value])

// ================= 3. 教练对比逻辑 =================
const coachAId = ref('')
const coachBId = ref('')
// 核心：把教练按照战队分组，用于 <optgroup> 树状展示
const groupedCoaches = computed(() => {
  const groups = {}
  Object.values(coachesDb).forEach(coach => {
    if (!groups[coach.team]) groups[coach.team] = []
    groups[coach.team].push(coach)
  })
  return groups
})
const selectedCoachA = computed(() => coachesDb[coachAId.value])
const selectedCoachB = computed(() => coachesDb[coachBId.value])
</script>

<template>
  <div class="compare-layout">
    
    <!-- ================= 1. 战队对比 ================= -->
    <div class="compare-section">
      <h3>战队对比</h3>
      <div class="selectors-row">
        <select v-model="teamAId" class="custom-select">
          <option value="" disabled>请选择战队 A</option>
          <option v-for="t in teamList" :key="t.id" :value="t.id">{{ t.name }}</option>
        </select>
        <span class="vs">VS</span>
        <select v-model="teamBId" class="custom-select">
          <option value="" disabled>请选择战队 B</option>
          <option v-for="t in teamList" :key="t.id" :value="t.id">{{ t.name }}</option>
        </select>
      </div>
      <!-- 选齐后出画板 -->
      <div class="board-container" v-if="selectedTeamA && selectedTeamB">
        <!-- 注意：这里传的 match 对象为了兼容你的画板组件，给个空比分 -->
        <TeamCompareBoard :match="{ teamA: selectedTeamA, teamB: selectedTeamB, score: '' }" />
      </div>
    </div>

    <!-- ================= 2. 选手对比 ================= -->
    <div class="compare-section">
      <h3>选手对比</h3>
      <div class="selectors-row">
        <!-- 第一个下拉：选位置 -->
        <select v-model="selectedRole" class="custom-select">
          <option v-for="r in roleList" :key="r.value" :value="r.value">{{ r.label }}</option>
        </select>

        <!-- 第二、三个下拉：根据位置联动 -->
        <select v-model="playerAId" class="custom-select">
          <option value="" disabled>请选择选手 A</option>
          <option v-for="p in filteredPlayers" :key="p.id" :value="p.id">{{ p.name }} ({{ p.team }})</option>
        </select>
        <span class="vs">VS</span>
        <select v-model="playerBId" class="custom-select">
          <option value="" disabled>请选择选手 B</option>
          <option v-for="p in filteredPlayers" :key="p.id" :value="p.id">{{ p.name }} ({{ p.team }})</option>
        </select>
      </div>
      <div class="board-container" v-if="selectedPlayerA && selectedPlayerB">
        <VersusBoard :playerA="selectedPlayerA" :playerB="selectedPlayerB" />
      </div>
    </div>

    <!-- ================= 3. 教练对比 ================= -->
    <div class="compare-section">
      <h3>教练对比</h3>
      <div class="selectors-row">
        <!-- 教练下拉框：使用 optgroup 实现树状分组 -->
        <select v-model="coachAId" class="custom-select">
          <option value="" disabled>请选择教练 A</option>
          <optgroup v-for="(coaches, teamName) in groupedCoaches" :key="teamName" :label="teamName">
            <option v-for="c in coaches" :key="c.id" :value="c.id">{{ c.name }}</option>
          </optgroup>
        </select>
        <span class="vs">VS</span>
        <select v-model="coachBId" class="custom-select">
          <option value="" disabled>请选择教练 B</option>
          <optgroup v-for="(coaches, teamName) in groupedCoaches" :key="teamName" :label="teamName">
            <option v-for="c in coaches" :key="c.id" :value="c.id">{{ c.name }}</option>
          </optgroup>
        </select>
      </div>
      <div class="board-container" v-if="selectedCoachA && selectedCoachB">
        <CoachCompareBoard :coachA="selectedCoachA" :coachB="selectedCoachB" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.compare-layout {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto; /* 允许滚动 */
}

.compare-section h3 {
  font-size: 18px;
  color: #e9ecf1;
  margin-bottom: 20px;
  border-left: 4px solid #e23a4e;
  padding-left: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.selectors-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.vs {
  font-size: 24px;
  font-weight: 900;
  color: #e23a4e;
  font-style: italic;
}

/* ================= 核心：美化原生下拉框 ================= */
.custom-select {
  width: 240px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  color: #e9ecf1;
  background-color: #121319;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  
  /* 🆕 强制原生的下拉选项列表使用暗黑模式 */
  color-scheme: dark; 
}

.custom-select:hover, .custom-select:focus {
  border-color: #e23a4e;
  box-shadow: 0 0 15px rgba(226, 58, 78, 0.2);
}

/* 下拉选项组（战队名标题）的样式 */
.custom-select optgroup {
  background-color: #090a0d;
  color: #8a93a6;
  font-weight: 800;
  font-size: 12px;
}

/* 具体的下拉选项样式 */
.custom-select option {
  background-color: #121319;
  color: #e9ecf1;
  font-size: 14px;
  padding: 8px;
}

.board-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>