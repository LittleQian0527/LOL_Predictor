// 打野数据指标
export const jugStatDefs = [
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'dpm', label: '分均伤害' },
  { key: 'gd15', label: '15分钟经济差' },
  { key: 'vspm', label: '分均视野得分' },
  { key: 'kpm', label: '分均参与击杀' },
  { key: 'kda', label: 'KDA' },
]

export const jugPlayers = {
  canyon: {
    id: 'canyon', name: 'Canyon', team: 'GEN', role: 'jug', games: 45,
    avatar: '', champions: [{ name: '盲僧' }, { name: '豹女' }],
    stats: { kp: '72.1', dpm: 380, gd15: 320, vspm: 2.1, kpm: 4.5, kda: 4.8 }
  },
  kanavi: {
    id: 'kanavi', name: 'Kanavi', team: 'JDG', role: 'jug', games: 44,
    avatar: '', champions: [{ name: '猴子' }, { name: '蔚' }],
    stats: { kp: '75.4', dpm: 410, gd15: 450, vspm: 1.9, kpm: 4.8, kda: 5.2 }
  }
}