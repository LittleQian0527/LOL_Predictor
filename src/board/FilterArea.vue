<script setup>
import { ref, watch } from 'vue'
import { regionsList, tournamentsList } from '../data/filterOptions'
import DatePicker from './DatePicker.vue'

// 定义向父组件（App.vue）派发的事件
const emit = defineEmits(['search'])

// ================= 日期限制逻辑 =================
const today = new Date()
// 最大可选日期：今天
const maxDate = today.toISOString().split('T')[0]
// 最小可选日期：3年前的今天
const threeYearsAgo = new Date(today.getFullYear() - 3, today.getMonth(), today.getDate())
const minDate = threeYearsAgo.toISOString().split('T')[0]

// ================= 筛选状态管理 =================
const selectedDate = ref(maxDate) // 日期：默认选中今天
const selectedRegions = ref([]) // 赛区：多选，所以用空数组 []
const selectedTournament = ref('') // 赛事：单选，所以用空字符串 ''

// 切换赛区（多选逻辑）
function toggleRegion(id) {
  // 找找看当前点的赛区是不是已经在数组里了
  const index = selectedRegions.value.indexOf(id)
  if (index > -1) {
    // 如果在，说明用户想取消选中，就把它切掉
    selectedRegions.value.splice(index, 1)
  } else {
    // 如果不在，就加进数组里
    selectedRegions.value.push(id)
  }
}

// 切换赛事（单选逻辑）
function toggleTournament(id) {
  if (selectedTournament.value === id) {
    // 如果点的是当前已经选中的赛事，就取消选中（变成空字符串）
    selectedTournament.value = ''
  } else {
    // 如果点的是别的赛事，直接覆盖（保证只能选一个）
    selectedTournament.value = id
  }
}

// 清空所有筛选条件（恢复默认状态）
function clearAll() {
  selectedRegions.value = []
  selectedTournament.value = ''
}

// 监听这三个条件的变化，只要有变化，就通知父组件去搜索
watch([selectedDate, selectedRegions, selectedTournament], () => {
  if (selectedDate.value) {
    emit('search', {
      date: selectedDate.value,
      regions: selectedRegions.value,
      tournament: selectedTournament.value
    })
  }
}, { deep: true, immediate: true }) // deep: true 是为了监听数组内部的变化；immediate: true 是为了页面一加载就搜一次
</script>

<template>
  <div class="filter-area">
    <div class="filter-header">
      <h2 class="title">MATCH FINDER</h2>
      <p class="subtitle">选择日期与赛区（可多选），并指定单一赛事进行精准查询</p>
    </div>

    <div class="filter-controls">
      <!-- 日期选择区 -->
      <div class="control-group" style="width: 240px; flex-shrink: 0;">
        <label class="label">比赛日期</label>
        <DatePicker v-model="selectedDate" :min="minDate" :max="maxDate" />
      </div>

      <!-- 赛区与赛事区 -->
      <div class="control-group" style="flex: 1;">
        <!-- 赛区多选按钮 -->
        <div class="row-header">
          <label class="label">联赛赛区（可多选）</label>
        </div>
        <div class="region-buttons" style="margin-bottom: 16px;">
          <button
            v-for="region in regionsList"
            :key="region.id"
            class="region-btn"
            :class="{ 'is-active': selectedRegions.includes(region.id) }" 
            @click="toggleRegion(region.id)"
          >
            <!-- includes 用来判断当前按钮是否高亮 -->
            {{ region.label }}
          </button>
        </div>

        <!-- 赛事单选按钮 -->
        <div class="row-header">
          <label class="label">国际赛事（单选）</label>
          <!-- 只有当有选中内容时，才显示清空按钮 -->
          <span class="clear-btn" v-if="selectedRegions.length || selectedTournament" @click="clearAll">
            清空筛选
          </span>
        </div>
        <div class="region-buttons">
          <button
            v-for="t in tournamentsList"
            :key="t.id"
            class="region-btn"
            :class="{ 'is-active': selectedTournament === t.id }"
            @click="toggleTournament(t.id)"
          >
            <!-- === 用来判断单选是否精准匹配 -->
            {{ t.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-area { 
  /* flex-shrink: 0 告诉浏览器：不管内容怎么变，这块区域绝不压缩，按内容自然撑开高度 */
  flex-shrink: 0; 
  padding: 30px 60px; 
  background: linear-gradient(180deg, rgba(22, 23, 29, 0.8) 0%, rgba(10, 11, 14, 0.4) 100%); 
  border-bottom: 1px solid rgba(255, 255, 255, 0.07); 
  display: flex; 
  flex-direction: column; 
}
.filter-header { margin-bottom: 24px; }
.title { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.1em; color: #f3f5f9; }
.subtitle { margin: 8px 0 0; font-size: 13px; color: #6e7688; }
.filter-controls { display: flex; gap: 40px; align-items: flex-start; }
.control-group { display: flex; flex-direction: column; }
.label { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; color: #8a93a6; margin-bottom: 10px; }
.row-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px; }
.clear-btn { font-size: 12px; color: #e23a4e; cursor: pointer; font-weight: 600; }
.clear-btn:hover { text-decoration: underline; }
.region-buttons { display: flex; gap: 12px; flex-wrap: wrap; /* 按钮太多时自动换行 */ }
.region-btn { padding: 8px 20px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; color: #9ca3af; font-family: inherit; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
.region-btn:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }
.region-btn.is-active { background: linear-gradient(135deg, #b31b2c 0%, #8e1523 100%); border-color: #b31b2c; color: #fff; box-shadow: 0 4px 18px -4px rgba(179, 27, 44, 0.8); transform: translateY(-1px); }
</style>