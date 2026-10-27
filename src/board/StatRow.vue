<script setup>
import { computed } from 'vue'

const props = defineProps({
  stat: { type: Object, required: true },
})

// 两边最大值作为满格基准；留 6% 呼吸空间，视觉不顶边
const BAR_MAX_PCT = 94

const maxVal = computed(() => Math.max(props.stat.left, props.stat.right) || 1)

const leftWidth = computed(() => (props.stat.left / maxVal.value) * BAR_MAX_PCT)
const rightWidth = computed(() => (props.stat.right / maxVal.value) * BAR_MAX_PCT)

const format = (v) => `${v}${props.stat.suffix ?? ''}`
</script>

<template>
  <div class="stat">
    <div class="stat__side stat__side--left">
      <span class="stat__value">{{ format(stat.left) }}</span>
      <div class="stat__track">
        <div class="stat__bar stat__bar--left" :style="{ width: leftWidth + '%' }"></div>
      </div>
    </div>

    <span class="stat__label">{{ stat.label }}</span>

    <div class="stat__side stat__side--right">
      <div class="stat__track">
        <div class="stat__bar stat__bar--right" :style="{ width: rightWidth + '%' }"></div>
      </div>
      <span class="stat__value">{{ format(stat.right) }}</span>
    </div>
  </div>
</template>

<style scoped>
.stat {
  display: grid;
  grid-template-columns: 1fr 140px 1fr;
  align-items: center;
  padding: 12px 0;
}

.stat__side {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.stat__value {
  flex: none;
  width: 78px;
  font-size: 17px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;
}

.stat__side--left .stat__value {
  text-align: right;
  color: #ff5567;
}

.stat__side--right .stat__value {
  text-align: left;
  color: #8fa9ce;
}

.stat__track {
  flex: 1;
  display: flex;
  height: 10px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

/* 左边数据条贴中轴生长 */
.stat__side--left .stat__track {
  justify-content: flex-end;
}

.stat__bar {
  height: 100%;
  border-radius: 99px;
  transition: width 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stat__bar--left {
  background: linear-gradient(90deg, #8e1523 0%, #e23a4e 100%);
  box-shadow: 0 0 14px rgba(226, 58, 78, 0.45);
}

.stat__bar--right {
  background: linear-gradient(90deg, #7a95bb 0%, #3e5069 100%);
  box-shadow: 0 0 14px rgba(122, 149, 187, 0.35);
}

.stat__label {
  text-align: center;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #737c8e;
  white-space: nowrap;
}
</style>