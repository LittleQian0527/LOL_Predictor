<script setup>
import { computed, ref, onMounted } from 'vue'
import { teamsDb } from '../data/teamsDb'

// 1. 接收数据
const props = defineProps({
  match: { type: Object, required: true },
  isFullscreen: { type: Boolean, default: false }
})

// 2. 声明事件
const emit = defineEmits(['openFullscreen'])

// 🆕 3. 重新加上控制进度条动画的变量（千万别删这个！）
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

// 🆕 更新进度条计算逻辑（兼容负数经济差）
const getWidth = (valA, valB) => {
  // 提取纯数字（去除 % 号）
  let numA = parseFloat(String(valA).replace('%', '')) || 0
  let numB = parseFloat(String(valB).replace('%', '')) || 0
  
  // 核心：使用绝对值来比较长度。比如 +1500 和 -500，视觉上左边应该比右边长
  let absA = Math.abs(numA)
  let absB = Math.abs(numB)

  if (absA === 0 && absB === 0) return { left: 50, right: 50 }
  
  const total = absA + absB
  return {
    left: (absA / total) * 100,
    right: (absB / total) * 100
  }
}

const statList = [
  { key: 'winRate', label: '胜率' },
  { key: 'fbRate', label: '一血率' },
  { key: 'kpm', label: '场均击杀' },
  { key: 'deaths', label: '场均死亡' },
  { key: 'gd15', label: '15m经济差' },
  { key: 'dragonRate', label: '小龙控制率' },
]
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

    <header class="team-header">
      <div class="team team--left">
        <div class="logo-wrapper">
          <img v-if="teamStats.teamA.logo" :src="teamStats.teamA.logo" :alt="teamStats.teamA.name" class="team-logo-img" :style="{ transform: `scale(${teamStats.teamA.scale})` }" />
        </div>
        <h2 v-if="!teamStats.teamA.logo">{{ teamStats.teamA.name }}</h2>
        <div class="team-sub-name" v-if="teamStats.teamA.logo">{{ teamStats.teamA.name }}</div>
      </div>

      <div class="score-center">
        <!-- 如果有状态，才显示 -->
        <div v-if="match.status" class="match-status">{{ match.status }}</div>
        <!-- 如果有比分，才显示 -->
        <div v-if="match.score" class="score-num">{{ match.score }}</div>
        
        <!-- 🆕 VS 标识：如果没有比分，就放大并去掉边距 -->
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

    <section class="stats">
      <!-- 🆕 加上 :style 动态延迟 -->
      <div 
        v-for="(s, index) in statList" 
        :key="s.key" 
        class="stat"
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <div class="stat__side stat__side--left">
          <!-- 左侧数值 -->
        <span class="stat__value" :style="s.key === 'gd15' && teamStats.teamA[s.key] > 0 ? { color: '#00ff88' } : {}">
        {{ s.key === 'gd15' && teamStats.teamA[s.key] > 0 ? '+' : '' }}{{ teamStats.teamA[s.key] }}
        </span>
          <div class="stat__track">
            <!-- 进度条宽度绑定 -->
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
          <span class="stat__value" :style="s.key === 'gd15' && teamStats.teamB[s.key] > 0 ? { color: '#00ff88' } : {}">
            {{ s.key === 'gd15' && teamStats.teamB[s.key] > 0 ? '+' : '' }}{{ teamStats.teamB[s.key] }}
            </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= 默认（弹窗）大小 ================= */
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

/* ================= 🆕 全屏新网页专属：彻底放大！ ================= */
.board.board--fullscreen {
  max-width: 1600px; /* 允许撑得更宽 */
  width: 95vw;       /* 占满屏幕 95% */
  min-height: 90vh;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
}

/* 全屏时，放大所有元素 */
.board--fullscreen .logo-wrapper {
  width: 200px;
  height: 200px;
}
.board--fullscreen .score-num {
  font-size: 80px; /* 比分放大到 80px */
}
.board--fullscreen .team-sub-name {
  font-size: 26px;
}
.board--fullscreen .match-status {
  font-size: 16px;
  padding: 6px 20px;
}
.board--fullscreen .stat {
  padding: 24px 0; /* 拉开行距 */
}
.board--fullscreen .stat__track {
  height: 18px; /* 进度条加粗 */
}
.board--fullscreen .stat__value {
  font-size: 28px; /* 数值放大 */
  width: 80px;
}
.board--fullscreen .stat__label {
  font-size: 20px; /* 标签放大 */
}

/* ================= 公共组件样式 ================= */
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
/* 🆕 快速对比时的超大 VS */
.score-vs.is-large {
  font-size: 64px; /* 放大到 64px */
  font-weight: 800;
  color: #e9ecf1;  /* 亮色 */
  letter-spacing: 0.05em;
  margin-top: 0;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.2); /* 加点发光 */
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