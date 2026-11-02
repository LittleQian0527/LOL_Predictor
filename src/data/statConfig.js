// src/data/statConfig.js

// 战队对比指标
export const teamStatDefs = [
  { key: 'winRate', label: '胜率', isPercent: true },
  { key: 'kpm', label: '场均击杀' },
  { key: 'gd15', label: '15分钟经济差' },
  { key: 'dragonRate', label: '小龙控制率', isPercent: true },
  { key: 'fbRate', label: '一血率', isPercent: true },
  { key: 'avgTime', label: '平均游戏时长' },
]

// 选手对比指标 (按位置)
export const statDefsByRole = {
  top: [
    { key: 'dpm', label: '分均伤害' },
    { key: 'dmgShare', label: '伤害占比', suffix: '%' },
    { key: 'csd', label: '分均补刀' },
    { key: 'gpm', label: '分均经济' },
    { key: 'kp', label: '参团率', suffix: '%' },
    { key: 'kda', label: 'KDA' }
  ],
  jug: [
    { key: 'kp', label: '参团率', suffix: '%' },
    { key: 'dpm', label: '分均伤害' },
    { key: 'gd15', label: '15分钟经济差' },
    { key: 'vspm', label: '分均视野得分' },
    { key: 'kpm', label: '分均参与击杀' },
    { key: 'kda', label: 'KDA' }
  ],
  mid: [
    { key: 'dpm', label: '分均伤害' },
    { key: 'dmgConv', label: '伤害转化率', suffix: '%' },
    { key: 'kp', label: '参团率', suffix: '%' },
    { key: 'csd', label: '分均补刀' },
    { key: 'gpm', label: '分均经济' },
    { key: 'kda', label: 'KDA' }
  ],
  adc: [
    { key: 'dpm', label: '分均伤害' },
    { key: 'dmgConv', label: '伤害转化率', suffix: '%' },
    { key: 'csd', label: '分均补刀' },
    { key: 'gpm', label: '分均经济' },
    { key: 'kp', label: '参团率', suffix: '%' },
    { key: 'kda', label: 'KDA' }
  ],
  sup: [
    { key: 'kp', label: '参团率', suffix: '%' },
    { key: 'vspm', label: '分均视野得分' },
    { key: 'kpm', label: '分均参与击杀' },
    { key: 'gpm', label: '分均经济' },
    { key: 'wpm', label: '每分钟插眼数' },
    { key: 'kda', label: 'KDA' }
  ]
}