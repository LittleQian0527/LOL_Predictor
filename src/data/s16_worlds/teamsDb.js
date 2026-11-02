// 战队数据指标字典（决定前端画板的渲染顺序和名字）
export const teamStatDefs = [
  { key: 'winRate', label: '胜率', isPercent: true },
  { key: 'kpm', label: '场均击杀' },
  { key: 'gd15', label: '15分钟经济差' },
  { key: 'dragonRate', label: '小龙控制率', isPercent: true },
  { key: 'fbRate', label: '一血率', isPercent: true },
  { key: 'avgTime', label: '平均游戏时长' }, // 🆕 替换了这一项
]

export const teamsDb = {
  ig: {
    id: 'ig',
    name: 'IG',
    region: 'LPL',
    logo: '/images/teams/ig-team-icon.png',
    scale: 1.0,
    games: 20,
    stats: {
      winRate: '70%',
      gd15: 1259,
      kpm: '16.3',
      deaths: '12.7',
      dragonRate: '56.7%',
      vspm: '9.7',
      fbRate: '55%',
      avgTime: '29:39'
    }
  },
  gen: {
    id: 'gen',
    name: 'GEN',
    region: 'LCK',
    logo: '/images/teams/gen-team-icon.png',
    scale: 1.0,
    games: 11,
    stats: {
      winRate: '82%',
      gd15: 506,
      kpm: '18.5',
      deaths: '10.8',
      dragonRate: '61.7%',
      vspm: '11.3',
      fbRate: '18.2%',
      avgTime: '33:12'
    }
  },
  hle: {
    id: 'hle',
    name: 'HLE',
    region: 'LCK',
    logo: '/images/teams/hle-team-icon.png',
    scale: 1.0,
    games: 17,
    stats: {
      winRate: '47%',
      gd15: 137,
      kpm: '14.5',
      deaths: '16.6',
      dragonRate: '56.4%',
      vspm: '10.6',
      fbRate: '76.5%',
      avgTime: '32:13'
    }
  },
  tes: {
    id: 'tes',
    name: 'TES',
    region: 'LPL',
    logo: '/images/teams/tes-team-icon.png',
    scale: 1.0,
    games: 10,
    stats: {
      winRate: '40%',
      gd15: -732,
      kpm: '14.3',
      deaths: '15.8',
      dragonRate: '44.7%',
      vspm: '10.1',
      fbRate: '60%',
      avgTime: '34:30'
    }
  },
  blg: {
    id: 'blg',
    name: 'BLG',
    region: 'LPL',
    logo: '/images/teams/blg-team-icon.png',
    scale: 1.0,
    games: 11,
    stats: {
      winRate: '64%',
      gd15: 1441,
      kpm: '15.5',
      deaths: '11.3',
      dragonRate: '46.7%',
      vspm: '9.8',
      fbRate: '45.5%',
      avgTime: '30:02'
    }
  },
  mkoi: {
    id: 'mkoi',
    name: 'MKOI',
    region: 'LEC',
    logo: '/images/teams/mkoi-team-icon.png',
    scale: 1.0,
    games: 15,
    stats: {
      winRate: '60%',
      gd15: 146,
      kpm: '14.9',
      deaths: '11.5',
      dragonRate: '53.5%',
      vspm: '10.3',
      fbRate: '33.3%',
      avgTime: '32:52'
    }
  },
  al: {
    id: 'al',
    name: 'AL',
    region: 'LPL',
    logo: '/images/teams/al-team-icon.png',
    scale: 1.0,
    games: 16,
    stats: {
      winRate: '50%',
      gd15: 378,
      kpm: '13.1',
      deaths: '11.8',
      dragonRate: '61.9%',
      vspm: '10.4',
      fbRate: '68.8%',
      avgTime: '31:29'
    }
  },
  kc: {
    id: 'kc',
    name: 'KC',
    region: 'LEC',
    logo: '/images/teams/kc-team-icon.png',
    scale: 1.0,
    games: 11,
    stats: {
      winRate: '82%',
      gd15: 1663,
      kpm: '13.7',
      deaths: '10.4',
      dragonRate: '54.2%',
      vspm: '10.2',
      fbRate: '36.4%',
      avgTime: '32:42'
    }
  },
  t1: {
    id: 't1',
    name: 'T1',
    region: 'LCK',
    logo: '/images/teams/t1-team-icon.png',
    scale: 1.0,
    games: 18,
    stats: {
      winRate: '50%',
      gd15: -468,
      kpm: '15.3',
      deaths: '14.8',
      dragonRate: '42.2%',
      vspm: '9.9',
      fbRate: '22.2%',
      avgTime: '32:33'
    }
  },
  los: {
    id: 'los',
    name: 'LOS',
    region: 'CBLOL',
    logo: '/images/teams/los-team-icon.png',
    scale: 1.0,
    games: 14,
    stats: {
      winRate: '64%',
      gd15: 846,
      kpm: '13.1',
      deaths: '11.6',
      dragonRate: '49.3%',
      vspm: '9.8',
      fbRate: '35.7%',
      avgTime: '32:43'
    }
  },
  lyon: {
    id: 'lyon',
    name: 'LYON',
    region: 'NA',
    logo: '/images/teams/lyon-team-icon.png',
    scale: 1.0,
    games: 16, // 8W - 8L
    stats: {
      winRate: '50%',
      gd15: 224,           // Gold Differential at 15 min
      kpm: '11.6',         // Kills Per Game
      deaths: '11.7',      // Deaths Per Game
      dragonRate: '41.1%', // Dragons / game (41.1%)
      vspm: '9.7',         // Vision Score Per Minute (Team)
      fbRate: '62.5%',     // First Blood
      avgTime: '34:25'     // Average game duration
    }
  },
    g2: {
    id: 'g2',
    name: 'G2',
    region: 'LEC', // 或 EUW
    logo: '/images/teams/g2-team-icon.png',
    scale: 1.0,
    games: 10, // 9W - 1L
    stats: {
      winRate: '90%',
      gd15: 856,           // Gold Differential at 15 min: +483
      kpm: '16.4',         // Kills Per Game: 16.4
      deaths: '10',        // Deaths Per Game: 10
      dragonRate: '67.2%', // Dragons / game: 2.9 (67.2%)
      vspm: '10.8',        // Vision Score Per Minute: 10.8
      fbRate: '50%',       // First Blood: 50%
      avgTime: '31:19'     // Average game duration: 31:19
    }
  },
}