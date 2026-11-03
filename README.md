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
│   ├── FilterArea.vue            # 筛选区
│   ├── MatchList.vue             # 比赛列表
│   ├── DatePicker.vue            # 定制暗黑日历
│   ├── TeamCompareBoard.vue      # 战队对比画板
│   ├── VersusBoard.vue           # 选手对比画板
│   ├── CoachCompareBoard.vue     # 教练对比画板
│   ├── StatList.vue              # 🆕 全局公共数据条列表（支持负数灰化）
│   ├── CoverGenerator.vue        # 封面生成器（支持纯黑底 + 队标）
│   ├── ExportBtn.vue             # 全局公共导出按钮（基于 html2canvas）
│   └── FullscreenBackBtn.vue     # 全局全屏返回按钮
├── utils/
│   └── chartUtils.js             # 🆕 全局图表计算工具（数值解析、进度条宽度计算）
└── data/
    ├── index.js                  # 数据总出口 / 赛事路由映射
    ├── statConfig.js             # 全局指标字典
    ├── coachesDb.js              # 全局教练数据表
    ├── s16_playoffs/             # S16 季后赛数据
    └── s16_worlds/               # S16 世界赛数据

    📏 开发规范 (极其重要，AI 必须遵守)
DRY 原则（拒绝重复）：任何功能逻辑、CSS 样式、UI 小组件，只要在项目中被复用 2 次及以上，必须抽离为全局公共组件或全局样式。

示例：数据条列表已抽离为 StatList.vue。

示例：进度条计算逻辑已抽离为 utils/chartUtils.js 中的 getBarWidth 和 parseValue。

示例：全屏返回按钮 FullscreenBackBtn.vue，全站通用 VS 样式 .universal-vs，一键导出按钮 ExportBtn.vue。

数据驱动 UI：画板指标必须由 statConfig.js 驱动渲染，严禁在 Vue 模板中写死数据字段。

组件职责单一：画板组件（TeamCompareBoard 等）必须做成“纯傻瓜组件”，只通过 props 接收数据，严禁在组件内部直接 import 业务数据表。

✅ 核心进度更新 (v6.0 组件精装修版)
架构再次解耦：成功抽离全局公共组件 StatList.vue（数据条列表）和 utils/chartUtils.js（图表计算工具）。极大减少了 TeamCompareBoard 和 VersusBoard 中的冗余代码。

经济差 Bug 修复：完美解决“15分钟经济差”负数导致的进度条反向拉长视觉错误。现在负数会自动变成暗灰色，且按绝对值比例缩短，正数则高亮拉满。

封面生成器极简升级：移除了繁琐的标题输入功能，将背景改为纯黑底，保留队标和网格。生成出的底板非常适合后期导入剪映自行添加花字和表情包，彻底解耦了代码与内容创作。

全屏穿透适配：使用 :deep() 完美解决了抽离组件后，父组件全屏样式无法渗透到子组件的问题。

🚀 待办事项 (To-Do)
□ 全栈自动化（Vercel + Supabase）：比赛期间抽空搭建免费数据库与部署平台，编写 Node.js 脚本调用 Riot API 实现数据半自动更新。
□ 视频发布节奏：每日凌晨 6 点比赛，遵循“赛前晚 7-9 点发前瞻，赛后下午 6-8 点发杂谈”的流量矩阵。
□ 游戏补票：打完比赛赶紧去玩《影之刃零》！