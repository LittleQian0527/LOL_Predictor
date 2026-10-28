<script setup>
import { computed, ref, onMounted } from 'vue'
// 🆕 1. 引入指标字典（请确保 teamsDb.js 里已经导出 teamStatDefs）
import { teamsDb, teamStatDefs } from '../data/teamsDb' 

// 1. 接收数据
const props = defineProps({
  match: { type: Object, required: true },
  isFullscreen: { type: Boolean, default: false }
})

// 2. 声明事件
const emit = defineEmits(['openFullscreen'])

// 3. 控制进度条动画
const animateBars = ref(false)
onMounted(() => {
  setTimeout(() => {
    animateBars.value = true
  }, 50)
})

// 4. 匹配战队数据
const teamStats = computed(() => {
  const idA = props.match.teamA.id?.toLowerCase() || props.match.teamA.name.toLowerCase()
  const idB = props.match.teamB.id?.toLowerCase() || props.match.teamB.name.toLowerCase()

  const dataA = teamsDb[idA] || { stats: {}, logo: '', scale: 1 }
  const dataB = teamsDb[idB] || { stats: {}, logo: '', scale: 1 }

  return {
    teamA: { name: props.match.teamA.name, logo: dataA.logo, scale: dataA.scale, ...dataA.stats },
    teamB: { name: props.match.teamB.name, logo: dataB.logo, scale: dataB.scale, ...dataB.stats }
  }
})

// ================= 🆕 核心数据处理逻辑 =================

// 🆕 提取纯数值（兼容百分比、负数、时间格式）
const parseValue = (val) => {
  if (!val) return 0
  // 处理时间格式 (如 29:39 转为分钟数)
  if (typeof val === 'string' && val.includes(':')) {
    const [m, s] = val.split(':')
    return parseInt(m) + parseInt(s) / 60
  }
  // 处理普通数字或百分比
  return Math.abs(parseFloat(String(val).replace('%', ''))) || 0
}

// 🆕 计算进度条宽度（用绝对值比较，保证负数经济差也能正确显示长度）
const getWidth = (valA, valB) => {
  const numA = parseValue(valA)
  const numB = parseValue(valB)

  if (numA === 0 && numB === 0) return { left: 50, right: 50 }
  
  const total = numA + numB
  return {
    left: (numA / total) * 100,
    right: (numB / total) * 100
  }
}

// 🆕 统一格式化显示内容（处理 gd15 正数加号、时间等）
const formatValue = (val, key) => {
  if (key === 'gd15' && Number(val) > 0) return `+${val}`
  return val || '-'
}
</script>

<template>
  <div class="board" :class="{ 'board--fullscreen': isFullscreen }">
    
    <div class="board__top">
      <span>TEAM COMPARISON</span>
      <button v-if="!isFullscreen" class="action-btn" @click="emit('openFullscreen', match)" data-html2canvas-ignore="true">
        全屏显示
      </button>
      <span v-else></span>
    </div>

    <!-- 战队头部 -->
    <header class="team-header">
      <div class="team team--left">
        <div class="logo-wrapper">
          <img v-if="teamStats.teamA.logo" :src="teamStats.teamA.logo" :alt="teamStats.teamA.name" class="team-logo-img" :style="{ transform: `scale(${teamStats.teamA.scale})` }" />
        </div>
        <h2 v-if="!teamStats.teamA.logo">{{ teamStats.teamA.name }}</h2>
        <div class="team-sub-name" v-if="teamStats.teamA.logo">{{ teamStats.teamA.name }}</div>
      </div>

      <div class="score-center">
        <div v-if="match.status" class="match-status">{{ match.status }}</div>
        <div v-if="match.score" class="score-num">{{ match.score }}</div>
        
        <div 
          class="score-vs" 
          :class="{ 'is-large': !match.score }"
        >
          VS
        </div>
      </div>

      <div class="team team--right">
        <div class="logo-wrapper">
          <img v-if="teamStats.teamB.logo" :src="teamStats.teamB.logo" :alt="teamStats.teamB.name" class="team-logo-img" :style="{ transform: `scale(${teamStats.teamB.scale})` }" />
        </div>
        <h2 v-if="!teamStats.teamB.logo">{{ teamStats.teamB.name }}</h2>
        <div class="team-sub-name" v-if="teamStats.teamB.logo">{{ teamStats.teamB.name }}</div>
      </div>
    </header>

    <!-- 🆕 数据对比区（完全由 teamStatDefs 驱动） -->
    <section class="stats">
      <div 
        v-for="(s, index) in teamStatDefs" 
        :key="s.key" 
        class="stat"
      >
        <div class="stat__side stat__side--left">
          <!-- 左侧数值 -->
          <span class="stat__value" :style="s.key === 'gd15' && teamStats.teamA[s.key] > 0 ? { color: '#00ff88' } : {}">
            {{ formatValue(teamStats.teamA[s.key], s.key) }}
          </span>
          <div class="stat__track">
            <!-- 左侧进度条 -->
            <div 
              class="stat__bar stat__bar--left" 
              :style="{ 
                width: (animateBars ? getWidth(teamStats.teamA[s.key], teamStats.teamB[s.key]).left : 0) + '%',
                transitionDelay: `${index * 0.15}s` 
              }"
            ></div>
          </div>
        </div>

        <!-- 指标名 -->
        <span class="stat__label">{{ s.label }}</span>

        <div class="stat__side stat__side--right">
          <div class="stat__track">
            <!-- 右侧进度条 -->
            <div 
              class="stat__bar stat__bar--right" 
              :style="{ 
                width: (animateBars ? getWidth(teamStats.teamA[s.key], teamStats.teamB[s.key]).right : 0) + '%',
                transitionDelay: `${index * 0.15}s` 
              }"
            ></div>
          </div>
          <!-- 右侧数值 -->
          <span class="stat__value" :style="s.key === 'gd15' && teamStats.teamB[s.key] > 0 ? { color: '#00ff88' } : {}">
            {{ formatValue(teamStats.teamB[s.key], s.key) }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 你的样式全部原封不动保留，非常完美 */
.board {
  width: 100%;
  max-width: 850px;
  padding: 30px 44px 38px;
  border-radius: 22px;
  color: #e9ecf1;
  background: linear-gradient(180deg, #121319 0%, #090a0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 50px 100px -30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.4s ease;
}

/* ================= 🆕 全屏新网页专属：适度放大，保持呼吸感 ================= */
.board.board--fullscreen {
  /* 🆕 填满父容器（也就是刚好占屏幕 90vw * 90vh），不再写死 px 和 max-width */
  width: 100%;
  height: 100%;
  max-width: none;
  min-height: auto;
  
  padding: 40px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 22px;
}
/* 放大所有元素时的微调 */
.board--fullscreen .logo-wrapper {
  width: 160px; /* 从 200px 降到 160px */
  height: 160px;
}
.board--fullscreen .score-num {
  font-size: 72px; /* 从 80px 降到 72px */
}
.board--fullscreen .team-sub-name {
  font-size: 24px;
}
.board--fullscreen .match-status {
  font-size: 14px;
  padding: 6px 16px;
}

/* 数据行调整 */
.board--fullscreen .stat {
  /* 🆕 核心修改：中间列从 120px 加宽到 180px，给文字留出空间 */
  grid-template-columns: 1fr 180px 1fr; 
  padding: 18px 0; /* 行距稍微缩小一点点，从 24px 降到 18px */
}

.board--fullscreen .stat__track {
  height: 14px; /* 从 18px 降到 14px */
}

.board--fullscreen .stat__value {
  font-size: 22px; /* 🆕 从 28px 降到 22px */
  width: 80px; /* 保持宽度，足够放下 "33:12" 这种时间 */
  /* 如果是左侧数据，可以加一点右边距让它别贴太紧 */
}

.board--fullscreen .stat__label {
  font-size: 16px; /* 🆕 从 20px 降到 16px */
  white-space: nowrap; /* 强制不换行 */
}

.board__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.26em;
  color: #61697a;
}

.action-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e9ecf1;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s;
}
.action-btn:hover { background: #e23a4e; border-color: #e23a4e; color: #fff; }

.team-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: 30px;
}
.team { text-align: center; display: flex; flex-direction: column; align-items: center; }

.logo-wrapper {
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.team-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.15));
}

.team h2 { margin: 0; font-size: 38px; font-weight: 800; }
.team--left h2 { color: #ff5567; }
.team--right h2 { color: #8fa9ce; }

.team-sub-name { font-size: 18px; font-weight: 800; letter-spacing: 0.1em; margin-top: 4px; }
.team--left .team-sub-name { color: #ff5567; }
.team--right .team-sub-name { color: #8fa9ce; }

.score-center { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 40px; }
.match-status {
  font-size: 12px; font-weight: 700; color: #e23a4e; letter-spacing: 0.1em; margin-bottom: 12px;
  background: rgba(226, 58, 78, 0.1); padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(226, 58, 78, 0.3);
}
.score-num { font-size: 54px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; line-height: 1; text-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
.score-vs { font-size: 13px; font-weight: 800; color: #4b5363; letter-spacing: 0.2em; margin-top: 8px; }

.score-vs.is-large {
  font-size: 64px;
  font-weight: 800;
  color: #e9ecf1;
  letter-spacing: 0.05em;
  margin-top: 0;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  line-height: 1;
}

.stats { display: flex; flex-direction: column; margin-top: 20px; }
.stat { display: grid; grid-template-columns: 1fr 120px 1fr; align-items: center; padding: 14px 0; }
.stat__side { display: flex; align-items: center; gap: 14px; }
.stat__side--left { justify-content: flex-end; }
.stat__side--right { justify-content: flex-start; }

.stat__value { width: 50px; font-size: 18px; font-weight: 700; }
.stat__side--left .stat__value { text-align: right; color: #ff5567; }
.stat__side--right .stat__value { text-align: left; color: #8fa9ce; }

.stat__track { flex: 1; height: 10px; background: rgba(255, 255, 255, 0.06); border-radius: 99px; overflow: hidden; display: flex; }
.stat__side--left .stat__track { justify-content: flex-end; }

.stat__bar { height: 100%; border-radius: 99px; transition: width 1.8s cubic-bezier(0.22, 1, 0.36, 1); }
.stat__bar--left { background: linear-gradient(90deg, #8e1523, #e23a4e); }
.stat__bar--right { background: linear-gradient(90deg, #7a95bb, #3e5069); }

.stat__label { text-align: center; font-size: 13px; font-weight: 600; color: #737c8e; }
</style>