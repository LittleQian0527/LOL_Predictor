// 中单数据指标
export const midStatDefs = [
  { key: 'dpm', label: '分均伤害' },
  { key: 'dmgConv', label: '伤害转化率', suffix: '%' },
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'csd', label: '分均补刀' },
  { key: 'gpm', label: '分均经济' },
  { key: 'kda', label: 'KDA' },
]

export const midPlayers = {
  faker: {
    id: 'faker', name: 'Faker', team: 'T1', role: 'mid', games: 48,
    avatar: '', champions: [{ name: '沙皇' }, { name: '发条' }],
    stats: { dpm: 580, dmgConv: '145', kp: '68.5', csd: 9.1, gpm: 420, kda: 3.9 }
  },
  knight: {
    id: 'knight', name: 'knight', team: 'BLG', role: 'mid', games: 46,
    avatar: '', champions: [{ name: '狐狸' }, { name: '妮蔻' }],
    stats: { dpm: 620, dmgConv: '152', kp: '72.1', csd: 8.8, gpm: 430, kda: 5.1 }
  }
}