<script setup>
import FullscreenBackBtn from './FullscreenBackBtn.vue'

const props = defineProps({
  coachA: { type: Object, required: true },
  coachB: { type: Object, required: true },
  isFullscreen: { type: Boolean, default: false }
})

const emit = defineEmits(['openFullscreen'])
</script>

<template>
  <div class="board" :class="{ 'board--fullscreen': isFullscreen }">
    
    <!-- 顶部信息栏 -->
    <div class="board__top">
      <span>COACH COMPARISON</span>
      <button v-if="!isFullscreen" class="action-btn" @click="emit('openFullscreen')">
        新页面全屏
      </button>
      <FullscreenBackBtn v-else />
    </div>

    <!-- ================= 教练头部信息区 ================= -->
    <header class="coach-header">
      <!-- 左侧教练 -->
      <div class="coach-side coach--left">
        <div class="coach-avatar">
          <img v-if="coachA.avatar" :src="coachA.avatar" :style="{ transform: `scale(${coachA.scale || 1})` }" />
          <span v-else>{{ coachA.name.charAt(0) }}</span>
        </div>
        <h2 class="coach-name">{{ coachA.name }}</h2>
        <!-- 曾执教战队标签 -->
        <div class="coach-tags">
          <span class="tag" v-for="team in coachA.careerTeams" :key="team">{{ team }}</span>
        </div>
      </div>

      <!-- 🆕 中间 VS (替换为全站通用样式) -->
      <div class="vs universal-vs">VS</div>

      <!-- 右侧教练 -->
      <div class="coach-side coach--right">
        <div class="coach-avatar">
          <img v-if="coachB.avatar" :src="coachB.avatar" :style="{ transform: `scale(${coachB.scale || 1})` }" />
          <span v-else>{{ coachB.name.charAt(0) }}</span>
        </div>
        <h2 class="coach-name">{{ coachB.name }}</h2>
        <!-- 曾执教战队标签 -->
        <div class="coach-tags">
          <span class="tag" v-for="team in coachB.careerTeams" :key="team">{{ team }}</span>
        </div>
      </div>
    </header>

    <!-- ================= 核心数据对比区 ================= -->
    <section class="coach-stats">
      
      <!-- 冠军荣誉对轰区 -->
      <div class="trophy-section">
        <!-- 左侧奖杯列表 -->
        <div class="trophy-side trophy--left">
          <div class="trophy-title">主要冠军荣誉</div>
          <div class="trophy-list">
            <div class="trophy-item" v-for="t in coachA.trophies" :key="t">
              <span>{{ t }}</span> <span class="trophy-icon">🏆</span>
            </div>
          </div>
        </div>

        <!-- 中间的垂直分割线 -->
        <div class="trophy-divider"></div>

        <!-- 右侧奖杯列表 -->
        <div class="trophy-side trophy--right">
          <div class="trophy-title">主要冠军荣誉</div>
          <div class="trophy-list">
            <div class="trophy-item" v-for="t in coachB.trophies" :key="t">
              <span class="trophy-icon">🏆</span> <span>{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- S赛成绩展示区 -->
      <div class="s-worlds-section">
        <!-- 左侧 S 赛履历 -->
        <div class="s-worlds-side s-worlds--left">
          <div class="s-title">进入S赛: {{ coachA.worldsCount }}次 ({{ coachA.worldsRole }})</div>
          <div class="s-list">
            <div class="s-item" v-for="item in coachA.worldsHistory" :key="item.year">
              <span class="s-year">{{ item.year }}:</span>
              <span class="s-result">{{ item.result }}</span>
            </div>
          </div>
        </div>

        <!-- 右侧 S 赛履历 -->
        <div class="s-worlds-side s-worlds--right">
          <div class="s-title">进入S赛: {{ coachB.worldsCount }}次 ({{ coachB.worldsRole }})</div>
          <div class="s-list">
            <div class="s-item" v-for="item in coachB.worldsHistory" :key="item.year">
              <span class="s-year">{{ item.year }}:</span>
              <span class="s-result">{{ item.result }}</span>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- 底部数据源说明 -->
    <div class="board-footer">
      数据来源：Liquipedia / 官方赛事数据
    </div>
  </div>
</template>

<style scoped>
/* ================= 基础画板 ================= */
.board {
  width: 100%; max-width: 900px;
  padding: 20px 44px 24px; border-radius: 22px;
  color: #e9ecf1; background: linear-gradient(180deg, #121319 0%, #090a0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 50px 100px -30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.4s ease;
}

/* ================= 🆕 全屏模式：撑爆屏幕的排版 ================= */
.board.board--fullscreen {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 0;
  border: none;
  padding: 6vh 8vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.board--fullscreen .board__top {
  font-size: 14px;
  margin-bottom: 0;
}

/* 教练头部：占据 35% 高度 */
.board--fullscreen .coach-header {
  flex: 3.5;
  align-items: center;
  margin-bottom: 0;
  grid-template-columns: 1fr 200px 1fr;
}

.board--fullscreen .coach-avatar {
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
}
.board--fullscreen .coach-name { font-size: 42px; }
.board--fullscreen .tag { font-size: 16px; padding: 4px 16px; }

/* 全屏时去掉局部 VS 颜色，激活全局渐变 */
.board--fullscreen .vs {
  font-size: 110px;
  margin-top: 0;
  color: transparent !important; 
  text-shadow: none !important; 
  transform: none !important; 
}

/* 数据区：占据 65% 高度，均匀铺开 */
.board--fullscreen .coach-stats {
  flex: 6.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 20px;
}

/* 全屏下放大模块 */
.board--fullscreen .trophy-section {
  padding: 30px;
  gap: 40px;
}
.board--fullscreen .trophy-title { font-size: 18px; }
/* 🆕 全屏下的荣誉列表，间距加大 */
.board--fullscreen .trophy-list {
  gap: 12px 40px; /* 行距和列距都拉宽 */
}
.board--fullscreen .trophy-item { font-size: 22px; margin-bottom: 12px; }
.board--fullscreen .trophy-icon { font-size: 24px; }

.board--fullscreen .s-worlds-section {
  gap: 40px;
}
.board--fullscreen .s-worlds-side {
  padding: 30px;
}
.board--fullscreen .s-title { font-size: 20px; margin-bottom: 20px; }
.board--fullscreen .s-item { font-size: 22px; margin-bottom: 12px; }

.board--fullscreen .board-footer { font-size: 14px; margin-top: 10px; }
/* ================= 全屏样式结束 ================= */


/* ================= 顶部 ================= */
.board__top {
  display: flex; justify-content: space-between; align-items: center;
  padding-bottom: 16px; margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 10px; font-weight: 600; letter-spacing: 0.26em; color: #61697a;
}
.action-btn {
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e9ecf1; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 12px;
  transition: all 0.2s;
}
.action-btn:hover { background: #e23a4e; border-color: #e23a4e; color: #fff; }

/* ================= 教练头部 (普通模式) ================= */
.coach-header {
  display: grid; grid-template-columns: 1fr 150px 1fr; align-items: start; margin-bottom: 30px;
}
.coach-side { display: flex; flex-direction: column; align-items: center; }
.coach-avatar {
  width: 120px; height: 120px; border-radius: 50%; background: #1c1e27;
  margin-bottom: 16px; overflow: hidden; border: 2px solid rgba(255, 255, 255, 0.1);
  display: grid; place-items: center;
}
.coach-avatar img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  object-position: center top; 
}
.coach-avatar span { font-size: 40px; font-weight: 800; color: #61697a; }

.coach--left .coach-avatar { border-color: rgba(226, 58, 78, 0.5); box-shadow: 0 0 20px rgba(226, 58, 78, 0.2); }
.coach--right .coach-avatar { border-color: rgba(122, 149, 187, 0.5); box-shadow: 0 0 20px rgba(122, 149, 187, 0.2); }

.coach-name { margin: 0; font-size: 32px; font-weight: 800; }
.coach--left .coach-name { color: #ff5567; }
.coach--right .coach-name { color: #8fa9ce; }

.coach-tags { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 10px; max-width: 250px; }
.tag {
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2px 10px; border-radius: 4px; font-size: 12px; font-weight: 700; color: #c9d0dc;
}

/* 普通模式 VS */
.vs {
  display: inline-block; font-size: 56px; font-weight: 900; line-height: 1;
  transform: skewX(-15deg); justify-self: center; text-align: center;
  color: #e23a4e; text-shadow: 0 0 15px rgba(226, 58, 78, 0.8), 0 0 30px rgba(122, 149, 187, 0.5);
  padding: 10px 0; margin-top: 30px;
}

/* ================= 核心数据区 ================= */
.coach-stats { display: flex; flex-direction: column; gap: 16px; }

/* 荣誉区 */
.trophy-section {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px;
  background: rgba(255, 255, 255, 0.02); border-radius: 12px; padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.trophy-side { display: flex; flex-direction: column; gap: 8px; }
.trophy--left { align-items: flex-end; }
.trophy--right { align-items: flex-start; }

.trophy-title { font-size: 13px; font-weight: 700; color: #8a93a6; margin-bottom: 4px; letter-spacing: 0.1em; }

.trophy-list { 
  display: grid; 
  grid-template-rows: repeat(3, auto); /* 🆕 强制最多3行 */
  grid-auto-flow: column;              /* 🆕 超过3行自动换列 */
  gap: 8px 24px;                       /* 🆕 行间距 8px，列间距 24px */
}
.trophy--left .trophy-list { align-items: flex-end; }
.trophy--right .trophy-list { align-items: flex-start; }

.trophy-item { 
  font-size: 15px; 
  font-weight: 700; 
  color: #e9ecf1; 
  display: flex; 
  align-items: center; 
  gap: 6px; 
  white-space: nowrap; /* 🆕 防止长文字折行破坏网格 */
}
.trophy--left .trophy-item { flex-direction: row; }
.trophy--right .trophy-item { flex-direction: row; }

.trophy-icon { font-size: 16px; filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)); }

.trophy-divider { width: 1px; background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.1), transparent); }

/* S赛成绩区 */
.s-worlds-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 4px; }
.s-worlds-side { background: rgba(0, 0, 0, 0.2); border-radius: 12px; padding: 16px; border: 1px dashed rgba(255, 255, 255, 0.1); }
.s-worlds--left { text-align: right; border-color: rgba(226, 58, 78, 0.3); }
.s-worlds--right { text-align: left; border-color: rgba(122, 149, 187, 0.3); }

.s-title { font-size: 14px; font-weight: 800; margin-bottom: 12px; }
.s-worlds--left .s-title { color: #ff5567; }
.s-worlds--right .s-title { color: #8fa9ce; }

.s-list { display: flex; flex-direction: column; gap: 8px; }
.s-worlds--left .s-list { align-items: flex-end; }
.s-worlds--right .s-list { align-items: flex-start; }

.s-item { display: flex; gap: 8px; font-size: 15px; font-weight: 700; }
.s-worlds--left .s-item { flex-direction: row; } 
.s-worlds--right .s-item { flex-direction: row; }

.s-year { color: #6e7688; }
.s-result { color: #e9ecf1; }

/* 底部 */
.board-footer { margin-top: 24px; text-align: right; font-size: 11px; color: #4b5363; font-weight: 600; }
</style>