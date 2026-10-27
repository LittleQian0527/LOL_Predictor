import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 🆕 全站滚动监听：利用事件捕获，不管哪个元素滚动都能捕捉到
let scrollTimer = null
let lastScrollTarget = null

document.addEventListener('scroll', (e) => {
  const target = e.target
  // 如果滚动的是 document 本身，target 会是 document，不然就是具体的 div
  if (!target || target.nodeType !== 1) return 

  // 1. 如果上一次滚动的元素不是当前元素，把上一个的类名清掉
  if (lastScrollTarget && lastScrollTarget !== target) {
    lastScrollTarget.classList.remove('is-scrolling')
    clearTimeout(scrollTimer)
  }

  // 2. 给当前滚动的元素加上类名
  target.classList.add('is-scrolling')
  lastScrollTarget = target

  // 3. 重新计时 2 秒
  clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    if (target) target.classList.remove('is-scrolling')
  }, 2000)

}, true) // 🆕 关键：第三个参数传 true，表示在捕获阶段拦截，这样内层 div 的滚动也能被监听

app.mount('#app')