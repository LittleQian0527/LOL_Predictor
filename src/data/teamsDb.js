// src/data/teamsDb.js
export const teamsDb = {
  gen: {
    id: 'gen',
    name: 'GEN',
    logo: '/images/teams/gen-team-icon.png', // 记得去剪映抠好图放进去
    stats: {
      winRate: '55%',
      fbRate: '48%',
      kpm: '12.8',
      deaths: '12.4',
      gd15: -350,         // 🆕 前15分钟经济差（负数，表示落后）
      dragonRate: '53%',
      tower: '7.1',
    }
  },
  t1: {
    id: 't1',
    name: 'T1',
    logo: '/images/teams/t1-team-icon.png',
    stats: {
      winRate: '68%',
      fbRate: '62%',      // 🆕 一血率
      kpm: '14.2',        // 场均击杀
      deaths: '10.1',     // 🆕 场均死亡
      gd15: 1450,         // 🆕 前15分钟经济差（正数）
      dragonRate: '71%',  // 🆕 小龙控制率
      tower: '8.5',       // 场均推塔
    }
  },
  wbg: {
    id: 'wbg',
    name: 'WBG',
    logo: '/images/teams/wbg.png',
    stats: {
      winRate: '52%',
      kpm: '11.5',
      tower: '6.8',
      dragon: '2.5',
    }
  },
  jdg: {
    id: 'jdg',
    name: 'JDG',
    logo: '/images/teams/jdg.png',
    stats: {
      winRate: '72%',
      kpm: '15.1',
      tower: '9.2',
      dragon: '3.6',
    }
  }
}