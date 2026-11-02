# LOL 赛事数据对比图生成器

纯前端 Vue3 + Vite 项目，用于生成黑红电竞风的数据对比图。

## 🛠️ 技术栈
- 前端框架：Vue3 (Composition API) + Vite
- 样式：原生 CSS / Flex / Grid (无第三方 UI 库)
- 字体：Sora (Google Fonts)
- 导出工具：html2canvas
- 数据存储：本地 JS 对象（规划接入 Supabase + Vercel 自动化）

## 📁 目录架构
```text
src/
├── App.vue                       # 根组件，数据调度中心 + 顶部导航
├── board/                        # 核心业务组件
│   ├── FilterArea.vue            # 筛选区（日期、赛区、赛事）
│   ├── MatchList.vue             # 比赛列表（点击触发弹窗）
│   ├── DatePicker.vue            # 定制暗黑日历
│   ├── TeamCompareBoard.vue      # 战队对比画板
│   ├── VersusBoard.vue           # 选手对比画板
│   ├── CoachCompareBoard.vue     # 教练对比画板
│   ├── CoverGenerator.vue        # 封面生成器（16:9 / 4:3 / 3:4）
│   ├── ExportBtn.vue             # 全局公共导出按钮（基于 html2canvas）
│   └── FullscreenBackBtn.vue     # 全局全屏返回按钮
└── data/
    ├── index.js                  # 🆕 数据总出口 / 赛事路由映射
    ├── statConfig.js             # 🆕 全局指标字典（teamStatDefs / statDefsByRole）
    ├── coachesDb.js              # 全局教练数据表
    ├── s16_playoffs/             # S16 季后赛数据（按文件夹拆分）
    │   ├── matchesDb.js
    │   ├── teamsDb.js
    │   ├── playersDb.js
    │   └── players/ (top, jug, mid, adc, sup)
    └── s16_worlds/               # S16 世界赛数据（按文件夹拆分）
        ├── matchesDb.js
        ├── teamsDb.js
        ├── playersDb.js
        └── players/ (top, jug, mid, adc, sup)
🗂️ 核心数据结构快照（AI 必看）
数据调度中心 (data/index.js)：导出一个 dataSources 对象，包含 s16_playoffs 和 s16_worlds。组件根据选中的赛事动态拉取对应数据。

全局配置 (data/statConfig.js)：导出 teamStatDefs（战队指标）和 statDefsByRole（选手各位置指标）。

战队数据 (teamsDb.js)：纯展示对象，包含 stats: { winRate, kpm, gd15, dragonRate, fbRate, avgTime }。

选手数据 (playersDb.js)：合并 5 个位置的纯数据，包含 champions 数组和 stats 对象。

📏 开发规范 (极其重要，AI 必须遵守)
DRY 原则（拒绝重复）：任何功能逻辑、CSS 样式、UI 小组件，只要在项目中被复用 2 次及以上，必须抽离为全局公共组件或全局样式。

示例：全屏返回按钮 FullscreenBackBtn.vue。

示例：全站通用的银白金属质感 VS 样式 .universal-vs。

示例：一键导出按钮 ExportBtn.vue。

数据驱动 UI：画板指标必须由 statConfig.js 驱动渲染，严禁在 Vue 模板中写死数据字段。

组件职责单一：画板组件（TeamCompareBoard 等）必须做成“纯傻瓜组件”，只通过 props 接收数据，严禁在组件内部直接 import 业务数据表。

✅ 核心进度更新 (v5.0 架构重构版)
多赛事架构支持：数据表按赛事拆分（s16_playoffs / s16_worlds），通过 App.vue 顶部下拉框动态切换，实现多表联查，杜绝数据串台。

彻底解耦：抽取 statConfig.js 统一管理指标，所有画板组件已切断死数据依赖，改为纯 props 数据驱动。

全屏渲染优化：所有画板全屏统一为 100vw * 100vh 纯黑底，采用 Flex/Grid 放大字体和数据条，适配录屏。

录制模式：主界面支持 B 键隐藏 UI，Esc 恢复。

封面生成器：支持自定义文字（; 换行）及 16:9、4:3、3:4 三种比例。

导出功能：成功安装 html2canvas 并抽离 ExportBtn.vue 公共组件。

🚀 待办事项 (To-Do)
□ 全栈自动化：后天开赛期间，开始搭建 Supabase (免费数据库) + Vercel (免费部署)，写 Node.js 脚本调用 Riot API，实现数据全自动更新。
□ 画质排查：OBS 录制全屏素材时，注意排查 Windows DPI 缩放和推流码率问题。
□ 封面微调：继续优化 3:4 封面在超长文字下的排版。