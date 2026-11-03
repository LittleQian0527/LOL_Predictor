<script setup>
import { ref, computed, onMounted } from 'vue'
import FullscreenBackBtn from './FullscreenBackBtn.vue'
import { statDefsByRole } from '../data/statConfig'
import StatList from './StatList.vue'

const props = defineProps({
  playerA: { type: Object, required: true },
  playerB: { type: Object, required: true },
  isFullscreen: { type: Boolean, default: false }
})

const emit = defineEmits(['openFullscreen'])

const animateBars = ref(false)
onMounted(() => {
  setTimeout(() => { animateBars.value = true }, 50)
})

const activeChampionView = ref(null)

function toggleChampionView(playerStr) {
  activeChampionView.value = activeChampionView.value === playerStr ? null : playerStr
}

const currentStatDefs = computed(() => {
  const role = props.playerA.role || 'top'
  return statDefsByRole[role] || statDefsByRole['top']
})
</script>

<template>
  <div class="board" :class="{ 'board--fullscreen': isFullscreen, 'is-pool-mode': activeChampionView }">
    <div class="board__top">
      <span>PLAYER COMPARISON</span>
      <button v-if="!isFullscreen" class="action-btn" @click="emit('openFullscreen')">
        新页面全屏
      </button>
      <FullscreenBackBtn v-else />
    </div>

    <!-- 常规对比头部 -->
    <header class="versus" v-show="!activeChampionView">
      <div class="player player--left">
        <div class="player__avatar">
          <img v-if="playerA.avatar" :src="playerA.avatar" :style="{ transform: `scale(${playerA.scale || 1})` }" />
          <span v-else class="player__initial">{{ playerA.name.charAt(0) }}</span>
        </div>
        <h2 class="player__name">{{ playerA.name }}</h2>
        <p class="player__meta">
          <span class="player__team">{{ playerA.team }}</span>
          <span class="player__dot"></span>
          <span>出场 {{ playerA.games }}</span>
        </p>
        <div class="player__champs">
          <div v-for="c in playerA.champions.slice(0, 3)" :key="c.name" class="champ">
            <img v-if="c.icon" :src="c.icon" />
            <span v-else>{{ c.name.charAt(0) }}</span>
          </div>
        </div>
        <div class="champs-trigger" @click="toggleChampionView('A')">查看常用英雄</div>
      </div>

      <div class="vs universal-vs">VS</div>

      <div class="player player--right">
        <div class="player__avatar">
          <img v-if="playerB.avatar" :src="playerB.avatar" :style="{ transform: `scale(${playerB.scale || 1})` }" />
          <span v-else class="player__initial">{{ playerB.name.charAt(0) }}</span>
        </div>
        <h2 class="player__name">{{ playerB.name }}</h2>
        <p class="player__meta">
          <span class="player__team">{{ playerB.team }}</span>
          <span class="player__dot"></span>
          <span>出场 {{ playerB.games }}</span>
        </p>
        <div class="player__champs">
          <div v-for="c in playerB.champions.slice(0, 3)" :key="c.name" class="champ">
            <img v-if="c.icon" :src="c.icon" />
            <span v-else>{{ c.name.charAt(0) }}</span>
          </div>
        </div>
        <div class="champs-trigger" @click="toggleChampionView('B')">查看常用英雄</div>
      </div>
    </header>

    <!-- 视图切换 -->
    <transition name="fade" mode="out-in">

      <!-- 英雄池视图 -->
      <section v-if="activeChampionView" class="champion-pool-view" :key="activeChampionView">
        <div class="pool-header">
          <div class="pool-center">
            <div class="pool-avatar-wrap">
              <img v-if="(activeChampionView === 'A' ? playerA : playerB).avatar"
                :src="(activeChampionView === 'A' ? playerA : playerB).avatar" />
            </div>
            <h3 class="pool-title">{{ (activeChampionView === 'A' ? playerA : playerB).name }} 英雄数据一览</h3>
          </div>
          <div class="back-btn-zone">
            <button class="back-btn" @click="activeChampionView = null">← 返回数据对比</button>
          </div>
        </div>

        <div class="pool-grid-wrapper">
          <div class="pool-grid">
            <div class="pool-card" v-for="c in (activeChampionView === 'A' ? playerA.champions : playerB.champions)"
              :key="c.name">
              <img v-if="c.icon" :src="c.icon" class="row-icon" />
              <div v-else class="row-icon placeholder">{{ c.name.charAt(0) }}</div>

              <div class="card-content">
                <span class="row-name">{{ c.name }}</span>
                <span class="row-games">{{ c.games || 0 }}场</span>

                <div class="wr-bar-wrap">
                  <div class="wr-bar-bg">
                    <div class="wr-bar-fill" :class="c.winRate >= 50 ? 'is-green' : 'is-red'"
                      :style="{ width: `${c.winRate || 0}%` }"></div>
                  </div>
                </div>
                <span class="wr-text">{{ c.winRate || 0 }}%</span>

                <span class="row-kda" v-if="!isFullscreen">KDA {{ c.kda || '-' }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

            <!-- 🆕 常规数据对比：改用类名 -->
      <div v-else key="stats" class="stats-wrapper">
        <StatList :defs="currentStatDefs" :dataA="playerA.stats" :dataB="playerB.stats" :animateBars="animateBars" />
      </div>

    </transition>
  </div>
</template>

<style scoped>
.board {
  width: 100%;
  max-width: 850px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 20px 44px 24px;
  border-radius: 22px;
  color: #e9ecf1;
  background: linear-gradient(180deg, #121319 0%, #090a0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 50px 100px -30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.4s ease;
  overflow: hidden;
}

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

.board--fullscreen .versus {
  flex: 4;
  align-items: center;
  margin-bottom: 0;
  grid-template-columns: 1fr 200px 1fr;
}

.board--fullscreen .player__avatar {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

.board--fullscreen .player__initial {
  font-size: 60px;
}

.board--fullscreen .player__name {
  font-size: 42px;
}

.board--fullscreen .player__meta {
  font-size: 16px;
  margin-top: 10px;
}

.board--fullscreen .player__champs {
  margin-top: 24px;
  gap: 12px;
}

.board--fullscreen .champ {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  font-size: 20px;
}

.board--fullscreen .champs-trigger {
  font-size: 16px;
  margin-top: 24px;
  padding: 8px 20px;
}

/* 🆕 全屏下，包裹层接管 flex: 6，撑满剩余空间 */
.board--fullscreen .stats-wrapper {
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  margin-top: 20px;
}

/* 🆕 让 StatList 内部的 stats 占满整个包裹层 */
.board--fullscreen :deep(.stats) { 
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly; 
  width: 100%;
  min-height: auto; /* 取消组件里默认的 380px 限制 */
}
.board--fullscreen :deep(.stat) { grid-template-columns: 1fr 200px 1fr; padding: 0; }
.board--fullscreen :deep(.stat__value) { font-size: 32px; width: 100px; }
.board--fullscreen :deep(.stat__label) { font-size: 20px; font-weight: 700; letter-spacing: 0.1em; }
.board--fullscreen :deep(.stat__track) { height: 16px; }

/* 英雄池全屏样式 */
.board--fullscreen .champion-pool-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.board--fullscreen .pool-avatar-wrap {
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
}

.board--fullscreen .pool-title {
  font-size: 28px;
}

.board--fullscreen .pool-grid-wrapper {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.board--fullscreen .pool-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  margin: 0;
}

.board--fullscreen .pool-card {
  padding: 24px 32px;
  gap: 20px;
  border-radius: 16px;
}

.board--fullscreen .row-icon {
  width: 56px;
  height: 56px;
}

.board--fullscreen .card-content {
  grid-template-columns: 80px 1fr 60px;
  column-gap: 20px;
  row-gap: 8px;
}

.board--fullscreen .row-name {
  font-size: 20px;
}

.board--fullscreen .row-games {
  font-size: 14px;
}

.board--fullscreen .wr-bar-bg {
  height: 10px;
}

.board--fullscreen .wr-text {
  font-size: 16px;
}

/* 普通模式基础样式 */
.board__top {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
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
}

.action-btn:hover {
  background: #e23a4e;
}

.versus {
  display: grid;
  grid-template-columns: 1fr 150px 1fr;
  align-items: start;
  margin-bottom: 20px;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.player__avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, #1c1e27, #0d0e12);
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 12px;
  overflow: hidden;
}

.player__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player__initial {
  font-size: 36px;
  font-weight: 800;
}

.player--left .player__initial {
  color: rgba(226, 58, 78, 0.4);
}

.player--right .player__initial {
  color: rgba(122, 149, 187, 0.4);
}

.player__name {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: #f3f5f9;
}

.player__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 0;
  font-size: 12px;
  color: #6e7688;
}

.player__team {
  color: #c9d0dc;
  font-weight: 700;
}

.player__dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #4b5363;
}

.player__champs {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.champ {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: #22242d;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.champ img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.player--left .champ {
  color: #b05561;
}

.player--right .champ {
  color: #7b8ca6;
}

.vs {
  display: inline-block;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  transform: skewX(-15deg);
  justify-self: center;
  text-align: center;
  color: #e23a4e;
  text-shadow: 0 0 15px rgba(226, 58, 78, 0.8), 0 0 30px rgba(122, 149, 187, 0.5);
  padding: 10px 0;
  margin-top: 40px;
}

.board--fullscreen .vs {
  font-size: 110px;
  margin-top: 0;
  color: transparent !important;
  text-shadow: none !important;
  transform: none !important;
}

.champs-trigger {
  margin-top: 16px;
  font-size: 13px;
  font-weight: 700;
  color: #8a93a6;
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
}

.champs-trigger:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* 英雄池普通模式 */
.champion-pool-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.pool-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
}

.pool-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pool-avatar-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #b31b2c;
  box-shadow: 0 0 20px rgba(179, 27, 44, 0.4);
  margin-bottom: 12px;
}

.pool-avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pool-title {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: #f3f5f9;
}

.back-btn-zone {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
}

.back-btn {
  background: rgba(226, 58, 78, 0.1);
  border: 1px solid rgba(226, 58, 78, 0.3);
  color: #ff5567;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.back-btn-zone:hover .back-btn {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-5px);
}

.back-btn:hover {
  background: #e23a4e;
  color: #fff;
  box-shadow: 0 0 15px rgba(226, 58, 78, 0.6);
}

.pool-grid-wrapper {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding-right: 8px;
}

.pool-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
}

.pool-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.2s;
  min-width: 0;
  overflow: hidden;
}

.pool-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
}

.row-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.row-icon.placeholder {
  background: #22242d;
  display: grid;
  place-items: center;
  font-size: 14px;
}

.card-content {
  flex: 1;
  display: grid;
  grid-template-columns: 48px 1fr 42px auto;
  grid-template-rows: auto auto;
  align-items: center;
  column-gap: 12px;
  row-gap: 4px;
  min-width: 0;
}

.row-name {
  grid-column: 1;
  grid-row: 1;
  font-size: 14px;
  font-weight: 700;
  color: #e9ecf1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row-games {
  grid-column: 1;
  grid-row: 2;
  font-size: 11px;
  color: #8a93a6;
  font-weight: 600;
  text-align: center;
}

.wr-bar-wrap {
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
}

.wr-bar-bg {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.wr-bar-fill {
  height: 100%;
  transition: width 1s ease;
}

.wr-bar-fill.is-green {
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
}

.wr-bar-fill.is-red {
  background: #e23a4e;
  box-shadow: 0 0 8px rgba(226, 58, 78, 0.4);
}

.wr-text {
  grid-column: 3;
  grid-row: 1 / span 2;
  font-size: 12px;
  font-weight: 700;
  color: #e9ecf1;
  text-align: right;
}

.row-kda {
  grid-column: 4;
  grid-row: 1 / span 2;
  font-size: 11px;
  color: #8a93a6;
  text-align: right;
}

.board--fullscreen .card-content {
  grid-template-columns: 50px 1fr 42px;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>