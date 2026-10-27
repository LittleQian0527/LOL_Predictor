<script setup>
import { ref, watch } from 'vue'
import { matchesDb } from '../data/matchesDb'

// 接收父组件（App.vue）传下来的筛选条件
const props = defineProps({
  filters: { type: Object, default: () => ({}) }
})
// ================= 核心注释 =================
// 向父组件（App.vue）发送自定义事件。
// 这里的 'selectMatch' 就是我们自己起的事件名，用来告诉父组件：“有人点了一张比赛卡片！”
const emit = defineEmits(['selectMatch'])
// ============================================
const loading = ref(false) // 控制“加载中”状态
const matches = ref([])    // 存放过滤后的最终比赛数据


// 监听筛选条件的变化
watch(() => props.filters, (newVal) => {
  if (!newVal.date) return // 没选日期就直接不查
  
  loading.value = true
  
  // 模拟 200ms 的延迟，让 UI 有个“加载中”的过渡
  setTimeout(() => {
    matches.value = matchesDb.filter(match => {
      // 条件1：日期必须完全匹配
      if (match.date !== newVal.date) return false

            // 条件2：赛区过滤
      let regionMatch = true
      if (newVal.regions && newVal.regions.length > 0) {
        // 【核心修复】兼容处理：
        // 如果比赛数据有 regions 数组，就直接用；
        // 如果只有旧的 region 字符串，就临时包成一个数组；
        // 如果都没有，就给个空数组，防止 .some() 报错。
        const matchRegions = match.regions || (match.region ? [match.region] : [])
        
        // 用 some 判断是否有交集
        regionMatch = matchRegions.some(r => newVal.regions.includes(r))
      }

      // 条件3：赛事过滤
      let tournamentMatch = true
      if (newVal.tournament) {
        // 单选，必须精准相等
        tournamentMatch = match.tournament === newVal.tournament
      }

      // 以上三个条件必须同时满足（AND 逻辑）
      return regionMatch && tournamentMatch
    })
    
    loading.value = false
  }, 200)
}, { deep: true, immediate: true })
</script>

<template>
  <div class="match-area">
    <div class="match-header">
      <h3>赛事列表</h3>
      <span class="count">{{ matches.length }} 场比赛</span>
    </div>

    <!-- 状态1：加载中 -->
    <div v-if="loading" class="placeholder">加载中...</div>
    
    <!-- 状态2：空数据 -->
    <div v-else-if="matches.length === 0" class="placeholder">
      暂无数据，请检查日期并选择上方赛区或赛事
    </div>

    <!-- 状态3：有数据，渲染网格 -->
    <div v-else class="match-grid">
      <div v-for="m in matches" :key="m.id" class="match-card" @click="emit('selectMatch', m)">
        
        <!-- 卡片顶部：时间与状态 -->
        <div class="match-meta">
          <span class="time">{{ m.time }}</span>
          <span class="status">{{ m.status }}</span>
        </div>
        
        <!-- 卡片主体：队伍A - 比分 - 队伍B -->
        <div class="match-teams">
          <!-- 队伍A -->
          <div class="team">
            <div class="team-logo placeholder-logo">
              <img v-if="m.teamA.logo" :src="m.teamA.logo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />
              <span v-else>{{ m.teamA.name.charAt(0) }}</span>
            </div>
            <span class="team-name">{{ m.teamA.name }}</span>
          </div>
          
          <!-- 中间比分 -->
          <div class="score">{{ m.score }}</div>
          
          <!-- 队伍B -->
          <div class="team">
            <div class="team-logo placeholder-logo">
              <img v-if="m.teamB.logo" :src="m.teamB.logo" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />
              <span v-else>{{ m.teamB.name.charAt(0) }}</span>
            </div>
            <span class="team-name">{{ m.teamB.name }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.match-area { 
  /* flex: 1 告诉浏览器：把筛选区用剩下的高度全给我，我自己内部处理滚动 */
  flex: 1; 
  padding: 30px 60px; 
  overflow-y: auto; /* 数据多的时候，只让列表内部滚动，不破坏整个网页布局 */
}
.match-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.match-header h3 { margin: 0; font-size: 16px; color: #e9ecf1; font-weight: 700; }
.count { font-size: 12px; color: #6e7688; background: rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 20px; }
.placeholder { color: #4b5363; font-size: 14px; text-align: center; padding: 60px 0; border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 16px; }
.match-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 20px; }
.match-card { background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01)); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 16px; transition: all 0.2s; cursor: pointer; }
.match-card:hover { background: rgba(255, 255, 255, 0.06); border-color: rgba(179, 27, 44, 0.4); transform: translateY(-2px); box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5); }
.match-meta { display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 12px; color: #6e7688; }
.status { color: #e23a4e; font-weight: 600; }
.match-teams { display: flex; align-items: center; justify-content: space-between; }
.team { display: flex; align-items: center; gap: 8px; flex: 1; }
.team:last-child { flex-direction: row-reverse; text-align: right; /* 右边队伍镜像翻转 */ }
.team-logo { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; background: #1c1e27; font-weight: 800; color: #6e7688; border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0; }
.team-name { font-size: 15px; font-weight: 700; color: #f3f5f9; white-space: nowrap; }
.score { font-size: 18px; font-weight: 800; color: #fff; padding: 0 10px; white-space: nowrap; flex-shrink: 0; text-align: center; }
</style>