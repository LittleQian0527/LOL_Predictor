<script setup>
import { ref, computed, onMounted } from 'vue'
import FilterArea from './board/FilterArea.vue'
import MatchList from './board/MatchList.vue'
import VersusBoard from './board/VersusBoard.vue'
import TeamCompareBoard from './board/TeamCompareBoard.vue'
import CoachCompareBoard from './board/CoachCompareBoard.vue' // 🆕 引入教练对比组件

import { playersDb } from './data/playersDb'
import { teamsDb } from './data/teamsDb'
import { coachesDb } from './data/coachesDb' // 🆕 引入教练数据表

// ================= 状态管理 =================
const currentView = ref('match') // 'match' | 'compare' | 'coach' 🆕
const currentFilters = ref({})
const selectedMatch = ref(null) // 战队弹窗状态

// 选手对比状态
const playerA = ref(playersDb['theshy'])
const playerB = ref(playersDb['zeus'])

// 🆕 教练对比状态 (默认展示 Helper vs Homme)
const coachA = ref(coachesDb['helper'])
const coachB = ref(coachesDb['homme'])

// 快速对比输入框状态
const quickA = ref('')
const quickB = ref('')

// 提示框状态
const toastMessage = ref('')
function showToast(msg) {
  toastMessage.value = msg
  setTimeout(() => { toastMessage.value = '' }, 2500)
}

// 动态 Placeholder 逻辑（根据当前所在页面提示不同的输入格式）
const placeholderA = computed(() => {
  if (currentView.value === 'match') return '队伍A (如gen)'
  if (currentView.value === 'compare') return '选手A (如theshy)'
  return '教练A (如helper)'
})
const placeholderB = computed(() => {
  if (currentView.value === 'match') return '队伍B (如t1)'
  if (currentView.value === 'compare') return '选手B (如zeus)'
  return '教练B (如homme)'
})

// ================= 生命周期与路由监听 =================
const isFullscreenMode = ref(false)
const fullscreenMatch = ref(null)
const fullscreenPlayerA = ref(null)
const fullscreenPlayerB = ref(null)
const fullscreenCoachA = ref(null) // 🆕
const fullscreenCoachB = ref(null) // 🆕

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const mode = params.get('mode')

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
    fullscreenPlayerA.value = playersDb[params.get('playerA')]
    fullscreenPlayerB.value = playersDb[params.get('playerB')]
  }

  // 🆕 教练全屏模式
  if (mode === 'coach') {
    isFullscreenMode.value = true
    fullscreenCoachA.value = coachesDb[params.get('coachA')]
    fullscreenCoachB.value = coachesDb[params.get('coachB')]
  }
})

function handleSearch(filters) {
  currentFilters.value = filters
}

function handleSelectMatch(match) {
  selectedMatch.value = match
}

function closeModal() {
  selectedMatch.value = null
}

// 限制只能输入小写英文字母和数字
const enforceLowercase = (e) => {
  e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

// ================= 快速对比逻辑 =================
function handleQuickCompare() {
  if (!quickA.value || !quickB.value) {
    showToast('请输入两个英文缩写！')
    return
  }

  const idA = quickA.value.toLowerCase()
  const idB = quickB.value.toLowerCase()

  // 1. 赛事查询页 -> 查战队
  if (currentView.value === 'match') {
    if (!teamsDb[idA]) return showToast(`查不到战队：${idA.toUpperCase()}`)
    if (!teamsDb[idB]) return showToast(`查不到战队：${idB.toUpperCase()}`)
    selectedMatch.value = {
      teamA: { id: idA, name: idA.toUpperCase() },
      teamB: { id: idB, name: idB.toUpperCase() },
      score: '',
      status: ''
    }
  } 
  // 2. 选手对比页 -> 查选手
  else if (currentView.value === 'compare') {
    if (!playersDb[idA]) return showToast(`查不到选手：${idA}`)
    if (!playersDb[idB]) return showToast(`查不到选手：${idB}`)
    playerA.value = playersDb[idA]
    playerB.value = playersDb[idB]
    showToast(`已加载：${playerA.value.name} vs ${playerB.value.name}`)
  } 
  // 3. 🆕 教练对比页 -> 查教练
  else if (currentView.value === 'coach') {
    if (!coachesDb[idA]) return showToast(`查不到教练：${idA}`)
    if (!coachesDb[idB]) return showToast(`查不到教练：${idB}`)
    coachA.value = coachesDb[idA]
    coachB.value = coachesDb[idB]
    showToast(`已加载：${coachA.value.name} vs ${coachB.value.name}`)
  }
}

// ================= 全屏跳转逻辑 =================
// 1. 战队全屏跳转
function handleOpenFullscreen(match) {
  const query = new URLSearchParams({
    mode: 'compare',
    teamA: match.teamA.name,
    teamB: match.teamB.name,
    score: match.score || '',
    status: match.status || '',
    teamAId: match.teamA.id || '',
    teamBId: match.teamB.id || ''
  }).toString()
  window.open('/?' + query, '_blank') 
}

// 2. 选手全屏跳转
function handlePlayerFullscreen() {
  const query = new URLSearchParams({
    mode: 'player',
    playerA: playerA.value.id,
    playerB: playerB.value.id
  }).toString()
  window.open('/?' + query, '_blank')
}

// 3. 🆕 教练全屏跳转
function handleCoachFullscreen() {
  const query = new URLSearchParams({
    mode: 'coach',
    coachA: coachA.value.id,
    coachB: coachB.value.id
  }).toString()
  window.open('/?' + query, '_blank')
}
</script>

<template>
  <!-- 1. 独立全屏网页模式 -->
  <div v-if="isFullscreenMode" class="fullscreen-wrapper">
    <TeamCompareBoard v-if="fullscreenMatch" :match="fullscreenMatch" :is-fullscreen="true" />
    <VersusBoard v-if="fullscreenPlayerA && fullscreenPlayerB" :player-a="fullscreenPlayerA" :player-b="fullscreenPlayerB" :is-fullscreen="true" />
    <!-- 🆕 教练全屏 -->
    <CoachCompareBoard v-if="fullscreenCoachA && fullscreenCoachB" :coach-a="fullscreenCoachA" :coach-b="fullscreenCoachB" :is-fullscreen="true" />
  </div>

  <!-- 2. 主界面 -->
  <div v-else class="app-container">
    <div class="bg-overlay"></div>
    
    <div class="app-workspace">
      
      <header class="app-nav">
        <div class="nav-brand">LOL <span>PREDICTOR</span></div>
        
        <!-- 快速对比区域 -->
        <div class="quick-compare">
          <input 
            type="text" 
            v-model="quickA" 
            @input="enforceLowercase" 
            :placeholder="placeholderA" 
            maxlength="12"
          />
          <button class="quick-btn" @click="handleQuickCompare">快速对比</button>
          <input 
            type="text" 
            v-model="quickB" 
            @input="enforceLowercase" 
            :placeholder="placeholderB" 
            maxlength="12"
          />

          <!-- 提示框 -->
          <transition name="modal-fade">
            <div v-if="toastMessage" class="toast-box">{{ toastMessage }}</div>
          </transition>
        </div>

        <!-- 导航栏 -->
        <div class="nav-menu">
          <button class="nav-btn" :class="{ 'is-active': currentView === 'match' }" @click="currentView = 'match'">赛事查询</button>
          <button class="nav-btn" :class="{ 'is-active': currentView === 'compare' }" @click="currentView = 'compare'">选手对比</button>
          <!-- 🆕 教练对比 Tab -->
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
            :player-a="playerA" 
            :player-b="playerB" 
            @openFullscreen="handlePlayerFullscreen"
          />
        </div>
      </div>

      <!-- 🆕 教练对比视图 -->
      <div v-if="currentView === 'coach'" class="app-view is-center">
        <div class="compare-wrapper">
          <CoachCompareBoard 
            :coach-a="coachA" 
            :coach-b="coachB" 
            @openFullscreen="handleCoachFullscreen"
          />
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
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; height: 100%; }
body { font-family: 'Sora', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif; color: #e9ecf1; background-color: #040405; }

.app-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* 使用你要求的专属背景图路径 */
  background-image: url('/images/indexBG/worlds-2026.jpg'); 
  background-size: cover;       
  background-position: center;  
  background-attachment: fixed; 
  background-repeat: no-repeat;
}

.bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(4, 4, 5, 0.65) 0%, rgba(4, 4, 5, 0.9) 100%);
  z-index: 1;
}

.app-workspace {
  position: relative; z-index: 2; 
  width: 100%; max-width: 1600px; height: 90vh;
  display: flex; flex-direction: column;
  background: rgba(18, 19, 25, 0.75); 
  backdrop-filter: blur(12px); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px; overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* 导航栏 */
.app-nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* 左边占1份，中间自适应，右边占1份 */
  align-items: center;
  padding: 0 40px; 
  height: 64px; 
  flex-shrink: 0;
  background: rgba(10, 11, 14, 0.6); 
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
/* 左侧 Logo 自然靠左 */
.nav-brand { 
  font-size: 18px; font-weight: 800; color: #f3f5f9; letter-spacing: 0.1em; 
  justify-self: start;
}
.nav-brand span { color: #b31b2c; }
/* 右侧菜单强制靠右 */
.nav-menu { 
  display: flex; gap: 10px; height: 100%; 
  justify-self: end; /* 🆕 强制贴右边 */
}
.nav-btn {
  background: none; border: none; border-bottom: 2px solid transparent;
  color: #6e7688; font-family: inherit; font-size: 14px; font-weight: 600;
  padding: 0 24px; cursor: pointer; height: 100%; transition: all 0.2s;
}
.nav-btn:hover { color: #e9ecf1; }
.nav-btn.is-active { color: #e23a4e; border-bottom-color: #e23a4e; }

/* 中间的搜索框自动居中 */
.quick-compare { 
  display: flex; align-items: center; gap: 12px; position: relative; 
  justify-self: center; /* 🆕 强制居中 */
}
.quick-compare input {
  width: 140px; background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2); color: #fff;
  padding: 6px 10px; border-radius: 6px; font-family: inherit;
  font-size: 13px; font-weight: 600; outline: none; text-align: center; transition: all 0.2s;
}
.quick-compare input:focus {
  border-color: #b31b2c; background: rgba(179, 27, 44, 0.1); box-shadow: 0 0 10px rgba(179, 27, 44, 0.3);
}
.quick-compare input::placeholder { color: #4b5363; font-size: 11px; font-weight: 400; }
.quick-btn {
  background: #b31b2c; border: none; color: #fff; padding: 6px 16px;
  border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 700; transition: all 0.2s;
}
.quick-btn:hover { background: #e23a4e; box-shadow: 0 0 15px rgba(226, 58, 78, 0.5); }

/* 视图容器 */
.app-view { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.app-view.is-center { align-items: center; justify-content: center; overflow-y: auto; padding: 40px; }
.compare-wrapper { width: 100%; display: flex; justify-content: center; align-items: center; }

/* 弹窗与全屏 */
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
  width: 100vw; height: 100vh; background: #090a0d; display: flex; justify-content: center; align-items: center; overflow: hidden;
}

/* 提示框 */
.toast-box {
  position: absolute; top: calc(100% + 15px); left: 50%; transform: translateX(-50%);
  white-space: nowrap; background: rgba(226, 58, 78, 0.95); color: #fff;
  padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;
  z-index: 9999; box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>