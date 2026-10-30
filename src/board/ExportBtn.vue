<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'

const props = defineProps({
  targetId: { type: String, required: true },
  fileName: { type: String, default: 'LOL_数据对比.png' },
  scale: { type: Number, default: 2 }
})

const isExporting = ref(false)

async function handleExport() {
  const targetEl = document.getElementById(props.targetId)
  if (!targetEl) return alert('找不到要导出的元素！')

  isExporting.value = true
  try {
    // 🆕 等待 300ms，让图片、字体等资源彻底加载完毕
    await new Promise(resolve => setTimeout(resolve, 300))

    const canvas = await html2canvas(targetEl, {
      scale: props.scale,
      useCORS: true, // 允许加载跨域图片
      backgroundColor: '#07080a',
      logging: false
    })
    
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = props.fileName
    a.click()
  } catch (err) {
    console.error(err)
    alert('导出失败，请检查控制台')
  } finally {
    isExporting.value = false
  }
}
</script>

<template>
  <button class="global-export-btn" @click.stop="handleExport" :disabled="isExporting">
    {{ isExporting ? '正在导出...' : '一键导出' }}
  </button>
</template>

<style scoped>
.global-export-btn {
  width: 100%;
  background: #e23a4e; color: #fff; border: none; padding: 12px; border-radius: 8px;
  font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit;
}
.global-export-btn:hover:not(:disabled) { background: #ff5567; box-shadow: 0 0 15px rgba(226, 58, 78, 0.5); }
.global-export-btn:disabled { opacity: 0.6; cursor: not-allowed; }
</style>