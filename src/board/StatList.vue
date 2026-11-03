<script setup>
import { getBarWidth } from '../utils/chartUtils'

const props = defineProps({
    defs: { type: Array, required: true },   // 指标字典 (teamStatDefs 或 currentStatDefs)
    dataA: { type: Object, required: true }, // 左侧数据对象
    dataB: { type: Object, required: true }, // 右侧数据对象
    animateBars: { type: Boolean, default: false }
})

// 统一格式化数值（如：+号、百分号）
const formatVal = (val, s) => {
    if (val === undefined || val === null) return '-'
    if (s.key === 'gd15' && Number(val) > 0) return `+${val}`
    return `${val}${s.suffix || ''}`
}

// 判断是否为正数高亮
const isPositive = (key, val) => {
    return key === 'gd15' && Number(val) > 0
}
</script>

<template>
    <section class="stats">
        <div v-for="(s, index) in defs" :key="s.key" class="stat">

            <!-- 左侧 -->
            <div class="stat__side stat__side--left">
                <span class="stat__value" :style="isPositive(s.key, dataA[s.key]) ? { color: '#00ff88' } : {}">
                    {{ formatVal(dataA[s.key], s) }}
                </span>
                <div class="stat__track">
                    <div class="stat__bar stat__bar--left"
                        :class="{ 'is-negative': s.key === 'gd15' && parseFloat(dataA[s.key]) < 0 }" :style="{
                            width: (animateBars ? getBarWidth(dataA[s.key], dataB[s.key], s.key).left : 0) + '%',
                            transitionDelay: `${index * 0.15}s`
                        }">
                    </div>
                </div>
            </div>

            <!-- 中间标签 -->
            <span class="stat__label">{{ s.label }}</span>

            <!-- 右侧 -->
            <div class="stat__side stat__side--right">
                <div class="stat__track">
                    <div class="stat__bar stat__bar--right"
                        :class="{ 'is-negative': s.key === 'gd15' && parseFloat(dataB[s.key]) < 0 }" :style="{
                            width: (animateBars ? getBarWidth(dataA[s.key], dataB[s.key], s.key).right : 0) + '%',
                            transitionDelay: `${index * 0.15}s`
                        }">
                    </div>
                </div>
                <span class="stat__value" :style="isPositive(s.key, dataB[s.key]) ? { color: '#00ff88' } : {}">
                    {{ formatVal(dataB[s.key], s) }}
                </span>
            </div>

        </div>
    </section>
</template>

<style scoped>
.stats {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 380px;
    justify-content: center;
}

.stat {
    display: grid;
    grid-template-columns: 1fr 140px 1fr;
    align-items: center;
    padding: 10px 0;
}

.stat__side {
    display: flex;
    align-items: center;
    gap: 14px;
}

.stat__side--left {
    justify-content: flex-end;
}

.stat__side--right {
    justify-content: flex-start;
}

.stat__value {
    width: 80px;
    font-size: 17px;
    font-weight: 700;
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
    height: 10px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 99px;
    overflow: hidden;
    display: flex;
}

.stat__side--left .stat__track {
    justify-content: flex-end;
}

.stat__bar {
    height: 100%;
    border-radius: 99px;
    transition: width 1.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.stat__bar--left {
    background: linear-gradient(90deg, #8e1523, #e23a4e);
}

.stat__bar--right {
    background: linear-gradient(90deg, #7a95bb, #3e5069);
}

.stat__label {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #737c8e;
}

/* 负数灰化 */
.stat__bar--left.is-negative {
    background: linear-gradient(90deg, #2a2a2a, #4b4b4b) !important;
    box-shadow: none !important;
}

.stat__bar--right.is-negative {
    background: linear-gradient(90deg, #4b4b4b, #2a2a2a) !important;
    box-shadow: none !important;
}
</style>