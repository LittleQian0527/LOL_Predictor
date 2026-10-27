# LOL 赛事数据对比图生成器

纯前端 Vue3 + Vite 项目，用于生成黑红电竞风的数据对比图。

## 🛠️ 技术栈
- 前端框架：Vue3 (Composition API) + Vite
- 样式：原生 CSS / Flex / Grid (无第三方 UI 库)
- 字体：Sora (Google Fonts)
- 数据存储：本地 JS 对象（未来计划接入后端/爬虫）
- 截图导出：html2canvas (待接入)

## 📁 目录架构
```text
src/
├── App.vue                       # 根组件，顶部导航 + 视图切换
├── board/                        # 核心业务组件
│   ├── FilterArea.vue            # 筛选区（日期、赛区多选、赛事单选）
│   ├── MatchList.vue             # 比赛列表（点击触发弹窗）
│   ├── DatePicker.vue            # 定制暗黑科技风日历
│   ├── TeamCompareBoard.vue      # 战队对比画板（弹窗展示）
│   ├── VersusBoard.vue           # 选手对比画板
│   ├── CoachCompareBoard.vue     # 教练对比画板
│   ├── PlayerCard.vue            # 选手卡片展示
│   └── StatRow.vue               # 数据条单行组件
└── data/
    ├── matchesDb.js              # 赛事数据总入口（数组）
    ├── teamsDb.js                # 战队数据表（对象）
    ├── playersDb.js              # 选手数据总入口（合并 5 个位置）
    └── players/
        ├── top.js                # 上单数据指标 + 选手
        ├── jug.js                # 打野数据指标 + 选手
        ├── mid.js                # 中单数据指标 + 选手
        ├── adc.js                # ADC 数据指标 + 选手
        └── sup.js                # 辅助数据指标 + 选手

🗂️ 核心数据结构快照（AI 必看）
1. 赛事数据（matchesDb.js）
数组，每项包含：

id, date, regions (数组), tournament, time, status

teamA / teamB: { name, logo }

score

2. 战队数据（teamsDb.js）
对象，键为战队 id。每项包含：

id, name, logo

stats: 含 winRate, fbRate, kpm, deaths, gd15, dragonRate, tower 等

3. 选手数据（players/ 分位置，由 playersDb.js 合并）
每个位置导出两部分：

xxxStatDefs: 数据指标定义数组 [{ key, label, suffix? }]

xxxPlayers: 选手对象，键为选手 id。每项包含：

id, name, team, role, games, avatar, champions, scale, stats

示例（上单）：

js
// top.js
export const topStatDefs = [
  { key: 'dpm', label: '分均伤害' },
  { key: 'dmgShare', label: '伤害占比', suffix: '%' },
  // ...
]
export const topPlayers = {
  theshy: {
    id: 'theshy', name: 'TheShy', team: 'WBG', role: 'top',
    games: 42, avatar: '/images/players/top/theshy.png',
    champions: [...], scale: 1.0,
    stats: { dpm: 612, dmgShare: '28.5', csd: 8.4, gpm: 410, kp: '61.3', kda: 3.4 }
  },
  // ...
}
playersDb.js 将 5 个位置合并：

js
export const playersDb = { ...topPlayers, ...jugPlayers, ...midPlayers, ...adcPlayers, ...supPlayers }
export const statDefsByRole = { top: topStatDefs, jug: jugStatDefs, mid: midStatDefs, adc: adcStatDefs, sup: supStatDefs }
✅ 已完成进度
1.全局 UI 框架：背景图、毛玻璃效果、顶部导航切换。

2.赛事查询：多选赛区、单选赛事、日期过滤，卡片列表自适应。

3.战队对比弹窗：点击卡片弹出，带队标、大比分、动态数据条。

4.选手数据层：5 个位置独立拆分，含指标定义和选手数据。

5.选手对比基础组件：VersusBoard 和 StatRow。

🚀 待办事项 (To-Do)
□ 补全 PlayerSelector.vue（目前仓库中缺失，用于下拉框选人）。
□ 接入 html2canvas，一键导出对比图。
□ 教练数据层：补充 coach.js 并统一到 playersDb。
□ 比赛与选手联动：点比赛卡片直接看对位选手对比。
□ 后端全栈化：爬虫自动更新数据、数据库存储。