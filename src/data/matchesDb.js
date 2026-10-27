// 存放所有比赛数据的仓库
export const matchesDb = [
  // 2026-10-25 的 LPL 比赛（对应你截图里的那些）
  {
    id: 'm1',
    date: '2026-10-25',
    regions: ['lpl'],      // 必须是数组
    tournament: 'lpl',     // 必须是字符串
    time: '19:00',
    status: '已结束', // 或者 '未开始' / '进行中'
    teamA: { name: 'WBG', logo: '' }, // logo留空，默认显示首字母
    teamB: { name: 'JDG', logo: '' },
    score: '2:1',
    // 以后扩展：这里可以存具体的选手ID，比如 ['theshy', 'kanavi']
  },
  {
    id: 'm2',
    date: '2026-10-25',
    regions: ['lpl'],
    tournament: 'lpl', 
    time: '17:00',
    status: '已结束',
    teamA: { name: 'BLG', logo: '' },
    teamB: { name: 'TES', logo: '' },
    score: '2:0',
  },
  {
    id: 'm3',
    date: '2026-10-25',
    regions: ['lpl'],
    tournament: 'lpl', 
    time: '15:00',
    status: '已结束',
    teamA: { name: 'IG', logo: '' },
    teamB: { name: 'NIP', logo: '' },
    score: '2:1',
  },
  {
    id: 'm4',
    date: '2026-10-25',
    regions: ['lpl'],
    tournament: 'lpl', 
    time: '15:00',
    status: '已结束',
    teamA: { name: 'IG', logo: '' },
    teamB: { name: 'NIP', logo: '' },
    score: '2:1',
  },
  {
    id: 'm5',
    date: '2026-10-25',
    regions: ['lpl'],
    tournament: 'lpl', 
    time: '15:00',
    status: '已结束',
    teamA: { name: 'IG', logo: '' },
    teamB: { name: 'NIP', logo: '' },
    score: '2:1',
  },

  // 2026-10-26 的 LCK 比赛（用来测试切换日期和赛区）
  {
    id: 'm6',
    date: '2026-10-26',
    regions: ['lck'],
    tournament: 'lck', 
    time: '18:00',
    status: '已结束',
    teamA: { name: 'GEN', logo: '' },
    teamB: { name: 'T1', logo: '' },
    score: '2:3',
  },
  {
    id: 'm7',
    date: '2026-10-26',
    regions: ['lck'],
    tournament: 'lck', 
    time: '16:00',
    status: '已结束',
    teamA: { name: 'HLE', logo: '' },
    teamB: { name: 'DK', logo: '' },
    score: '2:0',
  },
  {
    id: 'm8',
    date: '2026-10-26',
    regions: ['lpl','lck'],
    tournament: 's16', // 用 tournament 标记
    time: '20:00',
    status: '未开始',
    teamA: { name: 'T1', logo: '' },
    teamB: { name: 'BLG', logo: '' },
    score: '0:0',
  },
  {
    id: 'm9',
    date: '2026-10-26',
    regions: ['lpl','lck'],
    tournament: 's16',
    time: '18:00',
    status: '已结束',
    teamA: { name: 'GEN', logo: '' },
    teamB: { name: 'LNG', logo: '' },
    score: '3:1',
  },
]