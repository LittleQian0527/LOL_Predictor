// 射手数据指标
export const adcStatDefs = [
  { key: 'dpm', label: '分均伤害' },
  { key: 'dmgConv', label: '伤害转化率', suffix: '%' },
  { key: 'csd', label: '分均补刀' },
  { key: 'gpm', label: '分均经济' },
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'kda', label: 'KDA' },
]

export const adcPlayers = {
  ruler: {
    id: 'ruler', name: 'Ruler', team: 'JDG', role: 'adc', games: 45,
    avatar: '', champions: [{ name: '泽丽' }, { name: '卡莎' }],
    stats: { dpm: 680, dmgConv: '165', csd: 10.2, gpm: 460, kp: '68.9', kda: 5.5 }
  },
  guma: {
    id: 'guma', name: 'Gumayusi', team: 'T1', role: 'adc', games: 48,
    avatar: '', champions: [{ name: '韦鲁斯' }, { name: '女警' }],
    stats: { dpm: 650, dmgConv: '158', csd: 9.8, gpm: 445, kp: '65.2', kda: 4.8 }
  },hope: {
    id: 'hope', name: 'Hope', team: 'AL', role: 'adc', games: 4,
    avatar: '/images/players/adc/hope.png', champions: [
    { name: '芸阿娜', icon: '/images/champions/Yunara.png' },
    ],
    scale: 1.0,
    stats: { dpm: 650, dmgConv: '158', csd: 9.8, gpm: 445, kp: '65.2', kda: 4.8 }
  }
}