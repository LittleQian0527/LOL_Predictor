# LOL 赛事数据对比图生成器

纯前端 Vue3 + Vite 项目，用于生成黑红电竞风的数据对比图。

## 🛠️ 技术栈
- 前端框架：Vue3 (Composition API) + Vite
- 样式：原生 CSS / Flex / Grid (禁用第三方 UI 库)
- 字体：Sora (Google Fonts)
- 数据存储：本地 JS 对象 (未来计划接入后端/爬虫)
- 截图导出：html2canvas (待接入)

## 📁 目录架构
```text
src/
├── App.vue                 # 根组件，包含顶部导航和视图切换
├── board/                  # 核心业务组件
│   ├── FilterArea.vue      # 筛选区（日期、赛区多选、赛事单选）
│   ├── MatchList.vue       # 比赛列表（支持点击触发弹窗）
│   ├── DatePicker.vue      # 定制暗黑科技风日历组件
│   ├── TeamCompareBoard.vue# 战队对比画板（弹窗展示）
│   ├── VersusBoard.vue     # 选手对比画板（目前写死/或带下拉框）
│   └── PlayerSelector.vue  # 选手下拉框选择组件 (若有)
└── data/                   # 数据层
    ├── matches/            # 赛事数据按年份拆分
    ├── matchesDb.js        # 赛事数据总入口
    ├── teamsDb.js          # 战队数据表（胜率、场均击杀等）
    └── playersDb.js        # 选手数据表（分位置 top/jug/mid/adc/sup/coach）
```