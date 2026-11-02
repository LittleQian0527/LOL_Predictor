<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import FilterArea from './board/FilterArea.vue'
import MatchList from './board/MatchList.vue'
import VersusBoard from './board/VersusBoard.vue'
import TeamCompareBoard from './board/TeamCompareBoard.vue'
import CoachCompareBoard from './board/CoachCompareBoard.vue'

// ================= 🆕 引入多赛事数据源 =================
// 季后赛数据
import { playersDb as playoffsPlayersDb } from './data/s16_playoffs/playersDb'
import { teamsDb as playoffsTeamsDb } from './data/s16_playoffs/teamsDb'

// 世界赛数据
import { playersDb as worldsPlayersDb } from './data/s16_worlds/playersDb'
import { teamsDb as worldsTeamsDb } from './data/s16_worlds/teamsDb'

// 🆕 教练数据（全局共用，不随赛事改变）
import { coachesDb } from './data/coachesDb'

// 🆕 建立数据源映射表
const dataSources = {
  s16_playoffs: {
    label: '2026 季后赛',
    teams: playoffsTeamsDb,
    players: playoffsPlayersDb,
  },
  s16_worlds: {
    label: '2026 世界赛瑞士轮',
    teams: worldsTeamsDb,
    players: worldsPlayersDb,
  }
}

// ================= 状态管理 =================
const currentView = ref('match') // 'match' | 'compare' | 'coach'
const currentFilters = ref({})
const selectedMatch = ref(null) // 战队弹窗状态
const showBgOnly = ref(false)

// 🆕 当前选中的赛事类型
const selectedCompetition = ref('s16_playoffs')
// 🆕 动态获取当前数据源
const currentData = computed(() => dataSources[selectedCompetition.value])

// 🆕 快捷键逻辑（B键隐藏UI，Esc退出）
const handleKeydown = (e) => {
  if (e.key.toLowerCase() === 'b') {
    showBgOnly.value = true
  } else if (e.key === 'Escape') {
    showBgOnly.value = false
  }
}

// ==========================================
// 下拉框与联动逻辑
// ==========================================

// 1. 战队选择
const teamAId = ref('')
const teamBId = ref('')
const teamList = computed(() => Object.values(currentData.value.teams))
const selectedTeamA = computed(() => currentData.value.teams[teamAId.value] || null)
const selectedTeamB = computed(() => currentData.value.teams[teamBId.value] || null)

// 2. 选手选择
const roleList = [
  { value: 'top', label: '上单' },
  { value: 'jug', label: '打野' },
  { value: 'mid', label: '中单' },
  { value: 'adc', label: '射手' },
  { value: 'sup', label: '辅助' },
]
const selectedRole = ref('top')
const playerAId = ref('')
const playerBId = ref('')
const confirmedPlayerAId = ref('')
const confirmedPlayerBId = ref('')

const filteredPlayers = computed(() => {
  return Object.values(currentData.value.players).filter(p => p.role === selectedRole.value)
})

// 当位置改变时，仅重置下拉框的选中项
watch(selectedRole, () => {
  const list = filteredPlayers.value
  playerAId.value = list.length > 0 ? list[0].id : ''
  playerBId.value = list.length > 1 ? list[1].id : playerAId.value
}, { immediate: true })

// 画板实际使用的数据
const playerA = computed(() => currentData.value.players[confirmedPlayerAId.value] || {})
const playerB = computed(() => currentData.value.players[confirmedPlayerBId.value] || {})

// 3. 教练选择 (全局共用)
const coachAId = ref('')
const coachBId = ref('')
const confirmedCoachAId = ref('')
const confirmedCoachBId = ref('')

const groupedCoaches = computed(() => {
  const groups = {}
  Object.values(coachesDb).forEach(coach => {
    const team = coach.team || '未知'
    if (!groups[team]) groups[team] = []
    groups[team].push(coach)
  })
  return groups
})

const allCoaches = Object.values(coachesDb || {})
coachAId.value = allCoaches.length > 0 ? allCoaches[0].id : ''
coachBId.value = allCoaches.length > 1 ? allCoaches[1].id : coachAId.value

const coachA = computed(() => coachesDb[confirmedCoachAId.value] || {})
const coachB = computed(() => coachesDb[confirmedCoachBId.value] || {})

// 🆕 当赛事类型切换时，清空所有选择，防止数据串台报错
watch(selectedCompetition, () => {
  teamAId.value = ''
  teamBId.value = ''
  playerAId.value = ''
  playerBId.value = ''
  confirmedPlayerAId.value = ''
  confirmedPlayerBId.value = ''
  selectedMatch.value = null
})

// ==========================================
// 点击“生成对比”按钮的分发逻辑
// ==========================================
function handleGenerate() {
  if (currentView.value === 'match') {
    if (!selectedTeamA.value || !selectedTeamB.value) return
    selectedMatch.value = {
      teamA: selectedTeamA.value,
      teamB: selectedTeamB.value,
      score: '',
      status: ''
    }
  } else if (currentView.value === 'compare') {
    if (!playerAId.value || !playerBId.value) return
    confirmedPlayerAId.value = playerAId.value
    confirmedPlayerBId.value = playerBId.value
  } else if (currentView.value === 'coach') {
    if (!coachAId.value || !coachBId.value) return
    confirmedCoachAId.value = coachAId.value
    confirmedCoachBId.value = coachBId.value
  }
}

// ==========================================
// 生命周期与全屏解析逻辑
// ==========================================
const isFullscreenMode = ref(false)
const fullscreenMatch = ref(null)
const fullscreenPlayerA = ref(null)
const fullscreenPlayerB = ref(null)
const fullscreenCoachA = ref(null)
const fullscreenCoachB = ref(null)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  
  const params = new URLSearchParams(window.location.search)
  const mode = params.get('mode')
  // 🆕 获取 URL 中的赛事类型，默认季后赛
  const comp = params.get('comp') || 's16_playoffs'
  const sourceData = dataSources[comp]
  
  if (mode === 'compare') {
    isFullscreenMode.value = true
    fullscreenMatch.value = {
      teamA: { name: params.get('teamA'), id: params.get('teamAId') },
      teamB: { name: params.get('teamB'), id: params.get('teamBId') },
      score: params.get('score'),
      status: params.get('status')
    }
  }
  
  if (mode === 'player') {
    isFullscreenMode.value = true
    // 🆕 从对应赛事的数据源中取选手
    fullscreenPlayerA.value = sourceData.players[params.get('playerA')]
    fullscreenPlayerB.value = sourceData.players[params.get('playerB')]
  }

  if (mode === 'coach') {
    isFullscreenMode.value = true
    // 教练全局共用
    fullscreenCoachA.value = coachesDb[params.get('coachA')]
    fullscreenCoachB.value = coachesDb[params.get('coachB')]
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

function handleSearch(filters) { currentFilters.value = filters }
function handleSelectMatch(match) { selectedMatch.value = match }
function closeModal() { selectedMatch.value = null }

// ================= 全屏跳转逻辑 =================
// 🆕 所有跳转都要带上 comp 参数
function handleOpenFullscreen(match) {
  const query = new URLSearchParams({
    mode: 'compare',
    comp: selectedCompetition.value,
    teamA: match.teamA.name, teamB: match.teamB.name,
    score: match.score || '', status: match.status || '',
    teamAId: match.teamA.id || '', teamBId: match.teamB.id || ''
  }).toString()
  window.open('/?' + query, '_blank') 
}

function handlePlayerFullscreen() {
  if (!playerA.value.id || !playerB.value.id) return
  const query = new URLSearchParams({
    mode: 'player',
    comp: selectedCompetition.value,
    playerA: playerA.value.id, playerB: playerB.value.id
  }).toString()
  window.open('/?' + query, '_blank')
}

function handleCoachFullscreen() {
  if (!coachA.value.id || !coachB.value.id) return
  const query = new URLSearchParams({
    mode: 'coach',
    comp: selectedCompetition.value,
    coachA: coachA.value.id, coachB: coachB.value.id
  }).toString()
  window.open('/?' + query, '_blank')
}
</script>

<template>
  <div v-if="isFullscreenMode" class="fullscreen-wrapper">
    <TeamCompareBoard v-if="fullscreenMatch" :match="fullscreenMatch" :is-fullscreen="true" />
    <VersusBoard v-if="fullscreenPlayerA && fullscreenPlayerB" :player-a="fullscreenPlayerA" :player-b="fullscreenPlayerB" :is-fullscreen="true" />
    <CoachCompareBoard v-if="fullscreenCoachA && fullscreenCoachB" :coach-a="fullscreenCoachA" :coach-b="fullscreenCoachB" :is-fullscreen="true" />
  </div>

  <div v-else class="app-container">
    <div class="bg-overlay"></div>
    
    <div class="app-workspace" v-show="!showBgOnly">
      
      <header class="app-nav">
        <div class="nav-brand">LOL <span>PREDICTOR</span></div>
        
        <!-- 智能数据选择器 -->
        <div class="smart-selectors">
          <!-- 🆕 赛事类型下拉框 -->
          <select v-model="selectedCompetition" class="custom-select small-select" style="width: 150px; border-color: #e23a4e;">
            <option v-for="(source, key) in dataSources" :key="key" :value="key">
              {{ source.label }}
            </option>
          </select>

          <!-- 赛事查询页 -->
          <template v-if="currentView === 'match'">
            <select v-model="teamAId" class="custom-select small-select">
              <option value="" disabled>选择战队 A</option>
              <option v-for="t in teamList" :key="t.id" :value="t.id">{{ t.name }}</option>
            </select>
            <span class="vs-mini">VS</span>
            <select v-model="teamBId" class="custom-select small-select">
              <option value="" disabled>选择战队 B</option>
              <option v-for="t in teamList" :key="t.id" :value="t.id">{{ t.name }}</option>
            </select>
            <button class="quick-btn" @click="handleGenerate">生成对比</button>
          </template>

          <!-- 选手对比页 -->
          <template v-else-if="currentView === 'compare'">
            <select v-model="selectedRole" class="custom-select small-select" style="width: 100px;">
              <option v-for="r in roleList" :key="r.value" :value="r.value">{{ r.label }}</option>
            </select>
            <select v-model="playerAId" class="custom-select small-select">
              <option value="" disabled>选手 A</option>
              <option v-for="p in filteredPlayers" :key="p.id" :value="p.id">{{ p.name }}</option>
            </select>
            <span class="vs-mini">VS</span>
            <select v-model="playerBId" class="custom-select small-select">
              <option value="" disabled>选手 B</option>
              <option v-for="p in filteredPlayers" :key="p.id" :value="p.id">{{ p.name }}</option>
            </select>
            <button class="quick-btn" @click="handleGenerate">生成对比</button>
          </template>

          <!-- 教练对比页 -->
          <template v-else-if="currentView === 'coach'">
            <select v-model="coachAId" class="custom-select small-select">
              <option value="" disabled>教练 A</option>
              <optgroup v-for="(coaches, teamName) in groupedCoaches" :key="teamName" :label="teamName">
                <option v-for="c in coaches" :key="c.id" :value="c.id">{{ c.name }}</option>
              </optgroup>
            </select>
            <span class="vs-mini">VS</span>
            <select v-model="coachBId" class="custom-select small-select">
              <option value="" disabled>教练 B</option>
              <optgroup v-for="(coaches, teamName) in groupedCoaches" :key="teamName" :label="teamName">
                <option v-for="c in coaches" :key="c.id" :value="c.id">{{ c.name }}</option>
              </optgroup>
            </select>
            <button class="quick-btn" @click="handleGenerate">生成对比</button>
          </template>
        </div>

        <!-- 导航栏 -->
        <div class="nav-menu">
          <button class="nav-btn" :class="{ 'is-active': currentView === 'match' }" @click="currentView = 'match'">赛事查询</button>
          <button class="nav-btn" :class="{ 'is-active': currentView === 'compare' }" @click="currentView = 'compare'">选手对比</button>
          <button class="nav-btn" :class="{ 'is-active': currentView === 'coach' }" @click="currentView = 'coach'">教练对比</button>
        </div>
      </header>

      <!-- 赛事查询视图 -->
      <div v-if="currentView === 'match'" class="app-view">
        <FilterArea @search="handleSearch" />
        <MatchList :filters="currentFilters" @selectMatch="handleSelectMatch" />
      </div>

      <!-- 选手对比视图 -->
      <div v-if="currentView === 'compare'" class="app-view is-center">
        <div class="compare-wrapper">
          <VersusBoard 
            v-if="confirmedPlayerAId && confirmedPlayerBId"
            :player-a="playerA" 
            :player-b="playerB" 
            @openFullscreen="handlePlayerFullscreen"
          />
          <div v-else class="empty-tip">
            请选择选手并点击“生成对比”
          </div>
        </div>
      </div>

      <!-- 教练对比视图 -->
      <div v-if="currentView === 'coach'" class="app-view is-center">
        <div class="compare-wrapper">
          <CoachCompareBoard 
            v-if="confirmedCoachAId && confirmedCoachBId"
            :coach-a="coachA" 
            :coach-b="coachB" 
            @openFullscreen="handleCoachFullscreen"
          />
          <div v-else class="empty-tip">
            请选择教练并点击“生成对比”
          </div>
        </div>
      </div>
    </div>

    <!-- 战队对比弹窗 -->
    <transition name="modal-fade">
      <div v-if="selectedMatch" class="modal-wrapper" @click.self="closeModal">
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-content">
          <TeamCompareBoard 
            :match="selectedMatch" 
            @openFullscreen="handleOpenFullscreen" 
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
/* 你的样式完全不用动，直接复制你刚才发的那一大段 <style> 即可 */
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; height: 100vh; width: 100vw; overflow: hidden; }
body { font-family: 'Sora', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif; color: #e9ecf1; background-color: #040405; }

.app-container {
  position: relative; height: 100vh; width: 100vw;
  display: flex; justify-content: center; align-items: center; padding: 20px;
  background-image: url('/images/indexBG/worlds-2026.jpg'); 
  background-size: cover; background-position: center; background-attachment: fixed; background-repeat: no-repeat;
  overflow: hidden; 
}

.bg-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(4, 4, 5, 0.65) 0%, rgba(4, 4, 5, 0.9) 100%); z-index: 1; }

.app-workspace {
  position: relative; z-index: 2; 
  width: 90vw; height: 90vh; max-width: 1800px; max-height: 1000px;
  display: flex; flex-direction: column;
  background: rgba(18, 19, 25, 0.75); backdrop-filter: blur(12px); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px; overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}

.app-nav {
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
  padding: 0 40px; height: 64px; flex-shrink: 0;
  background: rgba(10, 11, 14, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.nav-brand { font-size: 18px; font-weight: 800; color: #f3f5f9; letter-spacing: 0.1em; justify-self: start; }
.nav-brand span { color: #b31b2c; }
.nav-menu { display: flex; gap: 10px; height: 100%; justify-self: end; }
.nav-btn {
  background: none; border: none; border-bottom: 2px solid transparent;
  color: #6e7688; font-family: inherit; font-size: 14px; font-weight: 600;
  padding: 0 24px; cursor: pointer; height: 100%; transition: all 0.2s;
}
.nav-btn:hover { color: #e9ecf1; }
.nav-btn.is-active { color: #e23a4e; border-bottom-color: #e23a4e; }

.smart-selectors { display: flex; align-items: center; gap: 8px; justify-self: center; }

.custom-select {
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff; border-radius: 6px; font-family: inherit; font-size: 13px; font-weight: 600; 
  outline: none; cursor: pointer; transition: all 0.2s; color-scheme: dark; 
}
.custom-select:focus, .custom-select:hover {
  border-color: #b31b2c; background: rgba(179, 27, 44, 0.1); box-shadow: 0 0 10px rgba(179, 27, 44, 0.3);
}
.small-select { padding: 6px 10px; width: 110px; text-align: center; }
.small-select optgroup { background-color: #090a0d; color: #8a93a6; font-weight: 800; font-size: 11px; }
.small-select option { background-color: #121319; color: #e9ecf1; font-size: 13px; padding: 8px; }

.vs-mini { font-size: 14px; font-weight: 900; color: #e23a4e; font-style: italic; margin: 0 4px; }

.quick-btn {
  background: #b31b2c; border: none; color: #fff; padding: 6px 16px;
  border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 700; transition: all 0.2s;
  margin-left: 8px;
}
.quick-btn:hover { background: #e23a4e; box-shadow: 0 0 15px rgba(226, 58, 78, 0.5); }

.empty-tip {
  color: #4b5363; font-size: 16px; font-weight: 600; padding: 60px 0;
  letter-spacing: 0.1em; animation: fadeIn 0.4s ease;
}

.app-view { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.app-view.is-center { align-items: center; justify-content: center; overflow-y: auto; padding: 40px; }
.compare-wrapper { width: 100%; display: flex; justify-content: center; align-items: center; min-height: 400px; }

.modal-wrapper {
  position: fixed; inset: 0; z-index: 999; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px);
  display: flex; justify-content: center; align-items: center; padding: 40px;
}
.modal-content { position: relative; max-width: 1200px; display: flex; justify-content: center; }
.modal-close {
  position: absolute; top: 30px; right: 40px; background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 28px; width: 48px; height: 48px;
  border-radius: 50%; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;
}
.modal-close:hover { background: #b31b2c; border-color: #b31b2c; transform: scale(1.1); }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

.fullscreen-wrapper {
  width: 100vw; height: 100vh; background: #040405; 
  display: flex; justify-content: center; align-items: center; overflow: hidden; padding: 0; 
}

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: transparent; border-radius: 3px; transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.is-scrolling::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.25); }
.is-scrolling::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
html, body { scrollbar-gutter: stable; }

.bg-tip {
  position: fixed; bottom: 30px; right: 30px; background: rgba(0,0,0,0.6);
  color: #fff; padding: 10px 20px; border-radius: 8px; font-size: 14px; z-index: 9999;
  pointer-events: none; backdrop-filter: blur(4px);
}

.universal-vs {
  font-size: 56px; font-weight: 900; font-style: normal; letter-spacing: 0.02em; line-height: 1;
  background: linear-gradient(180deg, #ffffff 0%, #b0b8c8 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.8)); text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>