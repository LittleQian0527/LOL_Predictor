// src/utils/chartUtils.js

// 🆕 提取纯数值（必须放在这里，给 getBarWidth 内部调用）
export const parseValue = (val) => {
  if (val === null || val === undefined || val === '') return 0
  if (typeof val === 'string' && val.includes(':')) {
    const [m, s] = val.split(':')
    return parseInt(m) + parseInt(s) / 60
  }
  return Math.abs(parseFloat(String(val).replace('%', ''))) || 0
}

// 🆕 统一计算进度条宽度
export const getBarWidth = (valA, valB, key) => {
  // 1. 针对“15分钟经济差”的特殊拦截
  if (key === 'gd15') {
    const numA = parseFloat(String(valA).replace('%', '')) || 0
    const numB = parseFloat(String(valB).replace('%', '')) || 0
    
    if (numA > 0 && numB <= 0) return { left: 100, right: 10 }
    if (numA <= 0 && numB > 0) return { left: 10, right: 100 }
    
    if (numA <= 0 && numB <= 0) {
      const absA = Math.abs(numA)
      const absB = Math.abs(numB)
      const total = absA + absB || 1
      return { left: (absA / total) * 100, right: (absB / total) * 100 }
    }
    
    const total = numA + numB || 1
    return { left: (numA / total) * 100, right: (numB / total) * 100 }
  }

  // 2. 其他常规指标（调用 parseValue 处理时间和百分比）
  const numA = parseValue(valA)
  const numB = parseValue(valB)
  
  const max = Math.max(numA, numB) || 1
  return {
    left: (numA / max) * 94,
    right: (numB / max) * 94
  }
}