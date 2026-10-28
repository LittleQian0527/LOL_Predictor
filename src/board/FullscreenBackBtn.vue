<script setup>
function closeFullscreen() {
  // 关闭当前全屏标签页
  window.close()
}
</script>

<template>
  <div class="fullscreen-back-zone">
    <button class="back-btn" @click="closeFullscreen">
      ← 返回主界面
    </button>
  </div>
</template>

<style scoped>
.fullscreen-back-zone {
  position: absolute;
  right: 40px;
  top: 25px;
  padding: 10px;
  z-index: 999;
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
  font-family: inherit;
  
  opacity: 0; 
  pointer-events: none; 
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.fullscreen-back-zone:hover .back-btn {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-5px);
}

.back-btn:hover {
  background: #e23a4e;
  color: #fff;
  box-shadow: 0 0 15px rgba(226, 58, 78, 0.6);
}
</style>