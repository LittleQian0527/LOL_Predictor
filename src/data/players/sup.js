// 辅助数据指标
export const supStatDefs = [
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'vspm', label: '分均视野得分' },
  { key: 'kpm', label: '分均参与击杀' },
  { key: 'gpm', label: '分均经济' },
  { key: 'wpm', label: '每分钟插眼数' },
]

export const supPlayers = {
  keria: {
    id: 'keria', name: 'Keria', team: 'T1', role: 'sup', games: 48,
    avatar: '', champions: [{ name: '烈娜塔' }, { name: '璐璐' }],
    stats: { kp: '75.2', vspm: 3.8, kpm: 4.9, gpm: 250, wpm: 1.8 }
  },
  missing: {
    id: 'missing', name: 'Missing', team: 'JDG', role: 'sup', games: 45,
    avatar: '', champions: [{ name: '洛' }, { name: '牛头' }],
    stats: { kp: '78.5', vspm: 3.5, kpm: 5.2, gpm: 245, wpm: 1.6 }
  }
}