// 上单数据指标
export const topStatDefs = [
  { key: 'dpm', label: '分均伤害' },
  { key: 'dmgShare', label: '伤害占比', suffix: '%' },
  { key: 'csd', label: '分均补刀' },
  { key: 'gpm', label: '分均经济' },
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'kda', label: 'KDA' },
]

export const topPlayers = {
  theshy: {
    id: 'theshy', name: 'TheShy', team: 'WBG', role: 'top', games: 42,
    avatar: '/images/players/top/theshy.png', champions: [
     { name: '杰斯', icon: '/images/champions/Jayce.png', games: 12, winRate: 75, kda: 4.2 },
     { name: '剑姬', icon: '/images/champions/Fiora.png', games: 8, winRate: 62.5, kda: 3.8 },
     { name: '纳尔', icon: '/images/champions/Gnar.png', games: 6, winRate: 50, kda: 2.9 },
     { name: '凯南', icon: '/images/champions/Kennen.png', games: 4, winRate: 100, kda: 5.1 },
     { name: '格温', icon: '/images/champions/Gwen.png', games: 3, winRate: 33.3, kda: 1.8 },
     { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 0, kda: 1.2 },
     { name: '奥恩', icon: '/images/champions/Ornn.png', games: 2, winRate: 100, kda: 6.0 },
     { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: '-' }
    ],
    scale: 1.0,
    stats: { dpm: 612, dmgShare: '28.5', csd: 8.4, gpm: 410, kp: '61.3', kda: 3.4 }
  },
  zeus: {
    id: 'zeus', name: 'Zeus', team: 'T1', role: 'top', games: 48,
    avatar: '/images/players/top/zeus.png', champions: [
    { name: '奥拉夫', icon: '/images/champions/Olaf.png' },
    { name: '永恩', icon: '/images/champions/Yone.png' }
    ],
    scale: 1.4,
    stats: { dpm: 650, dmgShare: '30.2', csd: 8.9, gpm: 435, kp: '65.2', kda: 4.1 }
  }
}