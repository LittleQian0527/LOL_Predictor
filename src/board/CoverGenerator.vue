<script setup>
import { computed } from 'vue'

const props = defineProps({
  teamA: { type: Object, required: true },
  teamB: { type: Object, required: true },
  ratio: { type: String, default: '16:9' },
})

const ratioClass = computed(() => {
  if (props.ratio === '4:3') return 'ratio-4-3'
  if (props.ratio === '3:4') return 'ratio-3-4'
  return 'ratio-16-9'
})
</script>

<template>
  <div class="cover-board" :class="ratioClass">
    <!-- 网格背景 -->
    <div class="grid-bg"></div>

    <div class="cover-header">
      <span>LOL PREDICTOR</span>
      <span>DATA VISUALIZATION</span>
    </div>

    <div class="cover-main">
      <div class="team-wrap left">
        <img v-if="teamA.logo" :src="teamA.logo" class="team-logo" />
        <h2 class="team-name">{{ teamA.name }}</h2>
      </div>
      
      <div class="center-wrap">
        <!-- 纯黑底上保留一个极简的暗纹 VS 即可，不放字了 -->
        <div class="bg-vs">VS</div>
      </div>

      <div class="team-wrap right">
        <img v-if="teamB.logo" :src="teamB.logo" class="team-logo" />
        <h2 class="team-name">{{ teamB.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 基础画板：纯黑底 */
.cover-board {
  position: relative;
  background: #050505; /* 🆕 改成了纯正的深黑底 */
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
}

/* 比例计算 */
.ratio-16-9 { width: 90vw; height: calc(90vw * 9 / 16); max-height: 95vh; max-width: calc(95vh * 16 / 9); }
.ratio-4-3 { width: 90vw; height: calc(90vw * 3 / 4); max-height: 95vh; max-width: calc(95vh * 4 / 3); }
.ratio-3-4 { width: 90vw; height: calc(90vw * 4 / 3); max-height: 95vh; max-width: calc(95vh * 3 / 4); }

/* 网格背景 */
.grid-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px; z-index: 0;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
}

/* 头部 */
.cover-header {
  position: absolute; top: 5%; width: 100%;
  display: flex; justify-content: space-between; padding: 0 5%;
  font-size: 1rem; color: rgba(255,255,255,0.2); font-weight: 800; letter-spacing: 0.3em; z-index: 2;
}

/* 基础主体排版 */
.cover-main { flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 0 6%; z-index: 1; position: relative; }
.team-wrap { display: flex; flex-direction: column; align-items: center; width: 22%; z-index: 2; }
.team-logo { width: 100%; max-height: 250px; object-fit: contain; filter: drop-shadow(0 0 30px rgba(255,255,255,0.1)); margin-bottom: 20px; }
.team-name { font-size: 3.5rem; font-weight: 900; margin: 0; letter-spacing: 0.1em; font-style: italic; }
.left .team-name { color: #ff5567; text-shadow: 0 0 25px rgba(255, 85, 103, 0.6); }
.right .team-name { color: #8fa9ce; text-shadow: 0 0 25px rgba(143, 169, 206, 0.6); }

/* 中间极简 VS 暗纹 */
.center-wrap { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; min-width: 0; padding: 0 20px; }
.bg-vs { position: absolute; font-size: 18rem; font-weight: 900; font-style: italic; color: rgba(255, 255, 255, 0.05); z-index: -1; pointer-events: none; user-select: none; transform: scaleY(1.2); letter-spacing: -0.05em; }

/* 3:4 竖屏排版 */
.ratio-3-4 .cover-main { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto 1fr; padding: 15% 5% 5%; align-items: start; }
.ratio-3-4 .team-wrap.left { grid-column: 1; grid-row: 1; width: 100%; }
.ratio-3-4 .team-wrap.right { grid-column: 2; grid-row: 1; width: 100%; }
.ratio-3-4 .team-logo { max-height: 150px; margin-bottom: 10px; }
.ratio-3-4 .team-name { font-size: 2.5rem; }
.ratio-3-4 .center-wrap { grid-column: 1 / span 2; grid-row: 2; width: 100%; padding: 0; margin-top: 50px; }
.ratio-3-4 .bg-vs { font-size: 14rem; top: 40%; left: 50%; transform: translate(-50%, -50%) skewX(-8deg); position: absolute; }
</style>