<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' }, // 格式 YYYY-MM-DD
  min: { type: String, default: '' },
  max: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const rootEl = ref(null)

// 当前面板显示的年月
const viewYear = ref(new Date().getFullYear())
const viewMonth = ref(new Date().getMonth()) // 0-11

const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate()
const firstDayOfMonth = (y, m) => new Date(y, m, 1).getDay() // 0是周日

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

// 日期格式化
const formatDate = (y, m, d) => {
  const mm = String(m + 1).padStart(2, '0')
  const dd = String(d).padStart(2, '0')
  return `${y}-${mm}-${dd}`
}

// 面板显示的年月标题
const headerText = computed(() => {
  return `${viewYear.value}年 ${viewMonth.value + 1}月`
})

// 生成日历网格
const calendarDays = computed(() => {
  const days = []
  const total = daysInMonth(viewYear.value, viewMonth.value)
  const startDay = firstDayOfMonth(viewYear.value, viewMonth.value)
  
  // 上个月补位
  const prevMonthTotal = daysInMonth(viewYear.value, viewMonth.value - 1)
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: formatDate(viewYear.value, viewMonth.value - 1, prevMonthTotal - i),
      day: prevMonthTotal - i,
      isCurrentMonth: false
    })
  }
  
  // 本月
  for (let i = 1; i <= total; i++) {
    days.push({
      date: formatDate(viewYear.value, viewMonth.value, i),
      day: i,
      isCurrentMonth: true
    })
  }
  
  // 下个月补位（补齐42个格子，6行）
  const remain = 42 - days.length
  for (let i = 1; i <= remain; i++) {
    days.push({
      date: formatDate(viewYear.value, viewMonth.value + 1, i),
      day: i,
      isCurrentMonth: false
    })
  }
  
  return days
})

// 判断日期是否可选
const isDisabled = (dateStr) => {
  if (props.min && dateStr < props.min) return true
  if (props.max && dateStr > props.max) return true
  return false
}

// 选中日期
const selectDate = (dateStr) => {
  if (isDisabled(dateStr)) return
  emit('update:modelValue', dateStr)
  isOpen.value = false
}

// 切换月份
const changeMonth = (step) => {
  let m = viewMonth.value + step
  let y = viewYear.value
  if (m < 0) { m = 11; y-- }
  if (m > 11) { m = 0; y++ }
  viewMonth.value = m
  viewYear.value = y
}

// 点击外部关闭
const handleClickOutside = (e) => {
  if (rootEl.value && !rootEl.value.contains(e.target)) {
    isOpen.value = false
  }
}

// 监听外部值变化，同步面板年月
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    const [y, m] = newVal.split('-')
    viewYear.value = parseInt(y)
    viewMonth.value = parseInt(m) - 1
  }
}, { immediate: true })

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div ref="rootEl" class="tech-datepicker">
    <!-- 触发按钮：禁用输入，仅点击触发 -->
    <div class="dp-trigger" :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
      <span class="dp-value">{{ modelValue || '请选择日期' }}</span>
      <svg class="dp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </div>

    <!-- 科技感日历面板 -->
    <transition name="dp-fade">
      <div v-if="isOpen" class="dp-panel">
        <!-- 面板头部 -->
        <div class="dp-header">
          <button class="dp-nav" @click="changeMonth(-1)">‹</button>
          <span class="dp-title">{{ headerText }}</span>
          <button class="dp-nav" @click="changeMonth(1)">›</button>
        </div>

        <!-- 星期表头 -->
        <div class="dp-weekdays">
          <span v-for="w in weekdays" :key="w">{{ w }}</span>
        </div>

        <!-- 日期网格 -->
        <div class="dp-grid">
          <div
            v-for="(item, index) in calendarDays"
            :key="index"
            class="dp-day"
            :class="{
              'is-other': !item.isCurrentMonth,
              'is-selected': item.date === modelValue,
              'is-disabled': isDisabled(item.date)
            }"
            @click="selectDate(item.date)"
          >
            {{ item.day }}
          </div>
        </div>
        
        <!-- 底部操作 -->
        <div class="dp-footer">
          <span class="dp-btn" @click="selectDate('')">清空</span>
          <span class="dp-btn" @click="selectDate(max)">今天</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.tech-datepicker {
  position: relative;
  width: 240px;
  user-select: none;
}

/* 触发器 */
.dp-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.dp-trigger:hover, .dp-trigger.is-active {
  background: rgba(179, 27, 44, 0.1);
  border-color: #b31b2c;
  box-shadow: 0 0 15px rgba(179, 27, 44, 0.3);
}
.dp-value {
  font-size: 15px;
  font-weight: 600;
  color: #e9ecf1;
  letter-spacing: 1px;
}
.dp-icon {
  width: 18px;
  height: 18px;
  color: #e23a4e; /* 亮红色图标 */
  transition: transform 0.3s;
}
.dp-trigger:hover .dp-icon {
  transform: scale(1.1);
}

/* 弹窗面板 */
.dp-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 300px;
  padding: 16px;
  background: rgba(13, 14, 18, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(179, 27, 44, 0.4);
  border-radius: 14px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(179, 27, 44, 0.15),
    inset 0 0 20px rgba(179, 27, 44, 0.05);
  z-index: 100;
}

/* 头部 */
.dp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.dp-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.05em;
}
.dp-nav {
  background: none;
  border: none;
  color: #8a93a6;
  font-size: 20px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: 0.2s;
}
.dp-nav:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* 网格 */
.dp-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
  text-align: center;
  font-size: 12px;
  color: #6e7688;
}

.dp-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.dp-day {
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #c9d0dc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.dp-day:hover:not(.is-disabled) {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.dp-day.is-other {
  color: #4b5363;
}

.dp-day.is-selected {
  background: linear-gradient(135deg, #b31b2c 0%, #7d1420 100%);
  color: #fff;
  box-shadow: 0 0 10px rgba(179, 27, 44, 0.6);
}

.dp-day.is-disabled {
  color: #333;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.02);
}

.dp-day.is-selected.is-disabled {
  background: #333;
  box-shadow: none;
}

/* 底部 */
.dp-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.dp-btn {
  font-size: 13px;
  color: #e23a4e;
  cursor: pointer;
  font-weight: 600;
}
.dp-btn:hover {
  text-decoration: underline;
}

/* 动画 */
.dp-fade-enter-active,
.dp-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.dp-fade-enter-from,
.dp-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>