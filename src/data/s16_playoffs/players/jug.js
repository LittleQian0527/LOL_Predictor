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
  wei: {
    id: 'wei',
    name: 'Wei',
    team: 'IG',
    role: 'jug',
    games: 20,
    avatar: '/images/players/jug/wei.png',
    scale: 1.0,
    champions: [
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 4, winRate: 50, kda: 3.8 },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 3, winRate: 33.3, kda: 2.3 },
      { name: '梦魇', icon: '/images/champions/Nocturne.png', games: 3, winRate: 100, kda: 7.8 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 2, winRate: 100, kda: 4.0 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 2, winRate: 100, kda: 6.8 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 2, winRate: 100, kda: 3.5 },
      { name: '猴子', icon: '/images/champions/MonkeyKing.png', games: 1, winRate: 0, kda: 2.0 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 1, winRate: 100, kda: '-' },
      { name: '赵信', icon: '/images/champions/XinZhao.png', games: 1, winRate: 0, kda: 0.7 }
    ],
    stats: {
      kp: 75.1,
      dpm: 506.4,
      gd15: 180,
      vspm: 1.81,
      kpm: 0.43,
      kda: 4.0
    }
  },

  canyon: {
    id: 'canyon',
    name: 'Canyon',
    team: 'GEN',
    role: 'jug',
    games: 11,
    avatar: '/images/players/jug/canyon.png',
    scale: 1.0,
    champions: [
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 2, winRate: 100, kda: 3.4 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 2, winRate: 50, kda: 5.7 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 2, winRate: 50, kda: 3.3 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 1, winRate: 100, kda: '-' },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 1, winRate: 100, kda: 2.8 },
      { name: '剑魔', icon: '/images/champions/Aatrox.png', games: 1, winRate: 100, kda: 9.5 },
      { name: '梦魇', icon: '/images/champions/Nocturne.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 72.3,
      dpm: 395.4,
      gd15: 61,
      vspm: 2.18,
      kpm: 0.4,
      kda: 5.6
    }
  },

  kanavi: {
    id: 'kanavi',
    name: 'Kanavi',
    team: 'HLE',
    role: 'jug',
    games: 17,
    avatar: '/images/players/jug/kanavi.png',
    scale: 1.0,
    champions: [
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 3, winRate: 33.3, kda: 1.6 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 3, winRate: 66.7, kda: 2.1 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 2, winRate: 0, kda: 2.7 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 2, winRate: 50, kda: 1.5 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 2, winRate: 50, kda: 2.3 },
      { name: '猪妹', icon: '/images/champions/Sejuani.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '赵信', icon: '/images/champions/XinZhao.png', games: 1, winRate: 100, kda: 4.3 },
      { name: '梦魇', icon: '/images/champions/Nocturne.png', games: 1, winRate: 100, kda: '-' },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 0, kda: 1.2 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 1, winRate: 0, kda: 0.6 }
    ],
    stats: {
      kp: 68.8,
      dpm: 462.2,
      gd15: 159,
      vspm: 1.93,
      kpm: 0.32,
      kda: 2.3
    }
  },

  tian: {
    id: 'tian',
    name: 'Tian',
    team: 'TES',
    role: 'jug',
    games: 10,
    avatar: '/images/players/jug/tian.png',
    scale: 1.0,
    champions: [
      { name: '赵信', icon: '/images/champions/XinZhao.png', games: 2, winRate: 0, kda: 0.8 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 2, winRate: 50, kda: 2.6 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 2, winRate: 50, kda: 6.2 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 1, winRate: 0, kda: 3.5 },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 1, winRate: 100, kda: 4.3 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 1, winRate: 100, kda: '-' },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 1, winRate: 0, kda: 2.3 }
    ],
    stats: {
      kp: 75.8,
      dpm: 507.7,
      gd15: -124,
      vspm: 1.86,
      kpm: 0.31,
      kda: 3.2
    }
  },

  xun: {
    id: 'xun',
    name: 'Xun',
    team: 'BLG',
    role: 'jug',
    games: 11,
    avatar: '/images/players/jug/xun.png',
    scale: 1.0,
    champions: [
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 2, winRate: 50, kda: 7.3 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 2, winRate: 100, kda: 11.3 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 1, winRate: 0, kda: 1.8 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 1, winRate: 100, kda: '-' },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 1, winRate: 100, kda: '-' },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: 9.0 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 1, winRate: 0, kda: 0.2 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 100, kda: 7.5 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 1, winRate: 0, kda: 0.3 }
    ],
    stats: {
      kp: 78.1,
      dpm: 409.1,
      gd15: -46,
      vspm: 1.64,
      kpm: 0.42,
      kda: 4.9
    }
  },

  elyoya: {
    id: 'elyoya',
    name: 'Elyoya',
    team: 'MKOI',
    role: 'jug',
    games: 15,
    avatar: '/images/players/jug/elyoya.png',
    scale: 1.0,
    champions: [
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 3, winRate: 33.3, kda: 3.7 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 3, winRate: 66.7, kda: 5.3 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 2, winRate: 50, kda: 2.7 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 1, winRate: 100, kda: 4.0 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 1, winRate: 0, kda: 1.3 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 1, winRate: 0, kda: 5.3 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 100, kda: '-' },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '猪妹', icon: '/images/champions/Sejuani.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 77,
      dpm: 438.2,
      gd15: 90,
      vspm: 1.79,
      kpm: 0.35,
      kda: 4.9
    }
  },

  tarzan: {
    id: 'tarzan',
    name: 'Tarzan',
    team: 'AL',
    role: 'jug',
    games: 16,
    avatar: '/images/players/jug/tarzan.png',
    scale: 1.0,
    champions: [
      { name: '大树', icon: '/images/champions/Maokai.png', games: 3, winRate: 66.7, kda: 3.5 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 3, winRate: 66.7, kda: 3.4 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 2, winRate: 0, kda: 2.2 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 2, winRate: 50, kda: 4.2 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 2, winRate: 100, kda: 13.5 },
      { name: '梦魇', icon: '/images/champions/Nocturne.png', games: 1, winRate: 100, kda: '-' },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 1, winRate: 0, kda: 1.7 },
      { name: '猪妹', icon: '/images/champions/Sejuani.png', games: 1, winRate: 100, kda: 12.0 }
    ],
    stats: {
      kp: 65.1,
      dpm: 468.8,
      gd15: 214,
      vspm: 1.73,
      kpm: 0.28,
      kda: 3.6
    }
  },

  yike: {
    id: 'yike',
    name: 'Yike',
    team: 'KC',
    role: 'jug',
    games: 11,
    avatar: '/images/players/jug/yike.png',
    scale: 1.0,
    champions: [
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 3, winRate: 66.7, kda: 10.5 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 2, winRate: 100, kda: 3.4 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 2, winRate: 50, kda: 1.9 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 2, winRate: 100, kda: 4.5 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: 15.0 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 1, winRate: 100, kda: 10.0 }
    ],
    stats: {
      kp: 66.9,
      dpm: 418.5,
      gd15: 47,
      vspm: 1.83,
      kpm: 0.28,
      kda: 4.6
    }
  },

  oner: {
    id: 'oner',
    name: 'Oner',
    team: 'T1',
    role: 'jug',
    games: 18,
    avatar: '/images/players/jug/oner.png',
    scale: 1.0,
    champions: [
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 4, winRate: 25, kda: 2.4 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 3, winRate: 66.7, kda: 2.4 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 2, winRate: 100, kda: 3.4 },
      { name: '梦魇', icon: '/images/champions/Nocturne.png', games: 2, winRate: 0, kda: 0.4 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 2, winRate: 50, kda: 4.5 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 2, winRate: 50, kda: 3.3 },
      { name: '波比', icon: '/images/champions/Poppy.png', games: 1, winRate: 100, kda: '-' },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 67.8,
      dpm: 509.3,
      gd15: -325,
      vspm: 1.79,
      kpm: 0.31,
      kda: 3.0
    }
  },

  curse: {
    id: 'curse',
    name: 'Curse',
    team: 'LOS',
    role: 'jug',
    games: 14,
    avatar: '/images/players/jug/curse.png',
    scale: 1.0,
    champions: [
      { name: '猴子', icon: '/images/champions/MonkeyKing.png', games: 3, winRate: 66.7, kda: 2.5 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 2, winRate: 50, kda: 2.8 },
      { name: '蔚', icon: '/images/champions/Vi.png', games: 2, winRate: 100, kda: 3.8 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 2, winRate: 50, kda: 3.2 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 2, winRate: 50, kda: 1.9 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: 15.0 },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 1, winRate: 100, kda: 3.5 }
    ],
    stats: {
      kp: 68.6,
      dpm: 351.6,
      gd15: 81,
      vspm: 1.63,
      kpm: 0.26,
      kda: 2.9
    }
  },
  inspired: {
    id: 'inspired',
    name: 'Inspired',
    team: 'LYON',
    role: 'jug',
    games: 16,
    avatar: '/images/players/jug/inspired.png',
    scale: 1.0,
    champions: [
      { name: '猴子', icon: '/images/champions/MonkeyKing.png', games: 2, winRate: 50, kda: 6.5 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 2, winRate: 50, kda: 2.6 },
      { name: '赵信', icon: '/images/champions/XinZhao.png', games: 2, winRate: 50, kda: 3.2 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 2, winRate: 100, kda: 6.8 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 2, winRate: 50, kda: 2.3 },
      { name: '纳亚菲利', icon: '/images/champions/Naafiri.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '盲僧', icon: '/images/champions/LeeSin.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '卡兹克', icon: '/images/champions/Khazix.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '奇亚娜', icon: '/images/champions/Qiyana.png', games: 1, winRate: 100, kda: '-' },
      { name: '猪妹', icon: '/images/champions/Sejuani.png', games: 1, winRate: 0, kda: 0.2 }
    ],
    stats: {
      kp: 61.3,
      dpm: 367.2,
      gd15: -15,
      vspm: 1.65,
      kpm: 0.22,
      kda: 3.0
    }
  },
  skewmond: {
    id: 'skewmond',
    name: 'SkewMond',
    team: 'G2',
    role: 'jug',
    games: 10, // 9W - 1L
    avatar: '/images/players/jug/skewmond.png',
    scale: 1.0,
    champions: [
      { name: '赵信', icon: '/images/champions/XinZhao.png', games: 2, winRate: 100, kda: 7.0 },
      { name: '蝎子', icon: '/images/champions/Skarner.png', games: 2, winRate: 100, kda: 7.3 },
      { name: '潘森', icon: '/images/champions/Pantheon.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '皇子', icon: '/images/champions/JarvanIV.png', games: 1, winRate: 100, kda: 7.5 },
      { name: '大虫子', icon: '/images/champions/Chogath.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '大树', icon: '/images/champions/Maokai.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '猴子', icon: '/images/champions/MonkeyKing.png', games: 1, winRate: 100, kda: 13.0 },
      { name: '波比', icon: '/images/champions/Poppy.png', games: 1, winRate: 100, kda: 13.0 }
    ],
    stats: {
      kp: 59.6,
      dpm: 429,
      gd15: -71,
      vspm: 2.01,
      kpm: 0.34,
      kda: 5.9
    }
  },
  brokenblade: {
    id: 'brokenblade',
    name: 'BrokenBlade',
    team: 'G2',
    role: 'top',
    games: 10, // 9W - 1L
    avatar: '/images/players/top/brokenblade.png',
    scale: 1.0,
    champions: [
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 2, winRate: 100, kda: 2.3 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 100, kda: 19.0 },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 1, winRate: 100, kda: 2.0 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 100, kda: 4.5 },
      { name: 'Zaahan', icon: '/images/champions/Zaahan.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '克烈', icon: '/images/champions/Kled.png', games: 1, winRate: 100, kda: 10.0 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 570.0,
      dmgShare: 21.5,
      csd: 8.3,
      gpm: 395,
      kp: 49.1,
      kda: 3.7
    }
  },
}