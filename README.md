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

## 📏 开发规范 (极其重要，AI 必须遵守)

1. **DRY 原则（拒绝重复）**：**任何功能逻辑、CSS 样式、甚至 UI 小组件，只要在项目中被复用 2 次及以上，必须抽离为全局公共组件或全局样式（如 `App.vue` 中的无 scoped 样式，或 `src/components/` 下的公共组件）。**
   - *示例*：全屏返回按钮已抽离为 `FullscreenBackBtn.vue`。
   - *示例*：全站通用的银白金属质感 VS 样式已抽离为 `.universal-vs` 类。
2. **全站风格统一**：新增画板或页面时，必须优先使用全局已封装好的样式类（如 `.universal-vs`），禁止重复编写类似样式的冗余代码。
3. **数据驱动 UI**：所有对比图表、数据条，必须由 `src/data/` 下的指标字典（如 `teamStatDefs`）驱动渲染，严禁在 Vue 模板中写死数据字段。

✅ 已完成进度（更新于今日凌晨）
1. 全局 UI 框架：背景图、毛玻璃效果、顶部导航切换。
2. 赛事查询：多选赛区、单选赛事、日期过滤，卡片列表自适应。
3. 战队对比弹窗：点击卡片弹出，带队标、大比分、动态数据条。
4. 选手数据层：5 个位置独立拆分，含指标定义和选手数据。
5. **全站智能滚动条**：基于 JS 捕获事件 + CSS `.is-scrolling` 类，实现“滚动出现，停止2秒后渐隐”。
6. **英雄池自适应网格**：
   - 常规模式 2 列，全屏模式强制 3 列。
   - 彻底解决长名字溢出和 KDA 隐藏导致的排版错位。
   - 使用 CSS Grid 实现“场次”死死钉在“英雄名”正下方。
   - 锁死 `.board` 的 `max-height` 为 `85vh`，内部滚动，彻底解决撑破屏幕问题。
## ✅ 已完成进度（最新更新）
1. **全量数据录入**：已录入世界赛 10 支战队的战队数据，以及上单/打野/中单/ADC/辅助/教练的所有核心数据。
2. **智能对比中心**：顶部导航栏内置下拉选择器，支持位置联动选人、战队树状分组选教练、点击“生成对比”按钮后才渲染画板。
3. **全站动态渲染**：使用数据字典（StatDefs）驱动画板，所有条形图、数值自动换算（支持负数、百分比、时长格式）。
4. **全屏/录制适配**：所有画板（战队/选手/教练/英雄池）的全屏尺寸已统一为 `90vw * 90vh`，防止录屏画面跳动；主界面新增按 `B` 键隐藏 UI（纯背景模式），按 `Esc` 恢复。
5. **封面生成器 (CoverGenerator)**：新增独立封面生成组件，支持输入自定义标题（使用 `;` 换行），支持 16:9、4:3、3:4 三种自适应比例。
6. **组件化抽离**：将全屏模式下的“返回主界面”悬浮按钮抽离为公共组件 `FullscreenBackBtn.vue`，实现所有画板点击复用，保持交互一致。

## ✅ 最新进度更新 (3.0)
1. **组件化抽离**：将全屏“返回按钮”抽离为 `FullscreenBackBtn.vue`；将 VS 样式抽离为全局 `.universal-vs`（银白金属渐变），实现全站风格绝对统一，大幅精简冗余代码。
2. **全屏排版大满贯**：重构 `TeamCompareBoard`、`VersusBoard`、`CoachCompareBoard` 的全屏 CSS。采用 Flex/Grid 均分空间，放大所有字体、头像与条形图，彻底告别海景房留白。
3. **英雄池自适应**：修复全屏下英雄池卡片过小的问题，实现上下垂直居中。
4. **布局细节修正**：教练对比页的“数据来源”在全屏模式下完美移至右上角，避开右下角挤压。

## 🚀 待办事项 (To-Do)
- [ ] 接入 html2canvas，实现一键下载静态对比图。
- [ ] 考虑全栈化（引入后端与数据库，应对未来数据膨胀）。
- [ ] **画质排查**：下次录屏时排查 EV/OBS 和剪映导出的画质模糊问题（可能涉及 Windows DPI 缩放或推流码率）。
- [ ] **排版微调**：继续优化 3:4 封面在超长文字下的排版细节。
- [ ] **自动化接入**：未来规划接入 html2canvas 一键截图，以及 Riot API / 爬虫自动化更新数据。

## ✅ 最新进度更新 (v4.0)
1. **导出功能落地**：安装 `html2canvas` 依赖，并成功抽离出全局公共导出组件 `ExportBtn.vue`。实现了按需传入目标 DOM ID 即可一键导出超清图片的功能，完美遵循 DRY 原则。
2. **素材库扩充**：补充了 G2 与 HLE 等战队的队标及选手高清抠图素材，完善了 `public/images/` 目录结构。
