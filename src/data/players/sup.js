// 辅助数据指标
export const supStatDefs = [
  { key: 'kp', label: '参团率', suffix: '%' },
  { key: 'vspm', label: '分均视野得分' },
  { key: 'kpm', label: '分均参与击杀' },
  { key: 'gpm', label: '分均经济' },
  { key: 'wpm', label: '每分钟插眼数' },
  { key: 'kda', label: 'KDA' },
]

export const supPlayers = {
  meiko: {
    id: 'meiko',
    name: 'Meiko',
    team: 'IG',
    role: 'sup',
    games: 20,
    avatar: '/images/players/sup/meiko.png',
    scale: 1.0,
    champions: [
      { name: '露露', icon: '/images/champions/Lulu.png', games: 3, winRate: 100, kda: 24.0 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 3, winRate: 100, kda: 5.9 },
      { name: '锤石', icon: '/images/champions/Thresh.png', games: 3, winRate: 100, kda: 8.8 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 2, winRate: 50, kda: 3.3 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 2, winRate: 50, kda: 3.7 },
      { name: '光辉', icon: '/images/champions/Lux.png', games: 1, winRate: 100, kda: 6.7 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 3.3 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 0, kda: 1.8 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 100, kda: 10.5 },
      { name: '巴德', icon: '/images/champions/Bard.png', games: 1, winRate: 0, kda: 1.7 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 1, winRate: 0, kda: 2.0 }
    ],
    stats: {
      kp: 80,
      vspm: 3.83,
      kpm: 0.47,
      gpm: 286,
      wpm: 1.82,
      kda: 5.3
    }
  },
  duro: {
    id: 'duro',
    name: 'Duro',
    team: 'GEN',
    role: 'sup',
    games: 11,
    avatar: '/images/players/sup/duro.png',
    scale: 1.0,
    champions: [
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 2, winRate: 100, kda: 10.3 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 2, winRate: 50, kda: 4.2 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 100, kda: 2.3 },
      { name: '妮蔻', icon: '/images/champions/Neeko.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 0, kda: 4.0 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 1, winRate: 100, kda: '-' },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 79.7,
      vspm: 4.17,
      kpm: 0.44,
      gpm: 273,
      wpm: 2.14,
      kda: 5.7
    }
  },
  delight: {
    id: 'delight',
    name: 'Delight',
    team: 'HLE',
    role: 'sup',
    games: 17,
    avatar: '/images/players/sup/delight.png',
    scale: 1.0,
    champions: [
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 3, winRate: 0, kda: 2.9 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 3, winRate: 66.7, kda: 7.5 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 2, winRate: 0, kda: 0.8 },
      { name: '巴德', icon: '/images/champions/Bard.png', games: 2, winRate: 50, kda: 2.1 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 9.5 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 100, kda: 15.0 },
      { name: '派克', icon: '/images/champions/Pyke.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 1, winRate: 0, kda: 1.8 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 1, winRate: 100, kda: 2.6 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 76,
      vspm: 4.45,
      kpm: 0.35,
      gpm: 269,
      wpm: 2.17,
      kda: 3.1
    }
  }, zhuo: {
    id: 'zhuo',
    name: 'Zhuo',
    team: 'TES',
    role: 'sup',
    games: 10,
    avatar: '/images/players/sup/zhuo.png',
    scale: 1.0,
    champions: [
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 2, winRate: 50, kda: 9.3 },
      { name: '芮尔', icon: '/images/champions/Rell.png', games: 2, winRate: 50, kda: 6.8 },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 2, winRate: 0, kda: 3.2 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 1, winRate: 0, kda: 2.0 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 100, kda: 7.5 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 0, kda: 6.0 },
      { name: '波比', icon: '/images/champions/Poppy.png', games: 1, winRate: 100, kda: 6.3 }
    ],
    stats: {
      kp: 82.4,
      vspm: 3.82,
      kpm: 0.34,
      gpm: 254,
      wpm: 1.97,
      kda: 5.6
    }
  },
  on: {
    id: 'on',
    name: 'ON',
    team: 'BLG',
    role: 'sup',
    games: 11,
    avatar: '/images/players/sup/on.png',
    scale: 1.0,
    champions: [
      { name: '露露', icon: '/images/champions/Lulu.png', games: 3, winRate: 66.7, kda: 9.5 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 3, winRate: 33.3, kda: 2.6 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 2, winRate: 50, kda: 2.9 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 1, winRate: 100, kda: '-' },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 1, winRate: 100, kda: '-' },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 100, kda: 5.3 }
    ],
    stats: {
      kp: 74.5,
      vspm: 4.11,
      kpm: 0.44,
      gpm: 277,
      wpm: 2.07,
      kda: 5.3
    }
  },
  alvaro: {
    id: 'alvaro',
    name: 'Alvaro',
    team: 'MKOI',
    role: 'sup',
    games: 15,
    avatar: '/images/players/sup/alvaro.png',
    scale: 1.0,
    champions: [
      { name: '巴德', icon: '/images/champions/Bard.png', games: 3, winRate: 66.7, kda: 11.7 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 3, winRate: 66.7, kda: 4.2 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 2, winRate: 50, kda: 10.0 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 2, winRate: 50, kda: 3.8 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 1, winRate: 0, kda: 7.0 },
      { name: '妮蔻', icon: '/images/champions/Neeko.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '芮尔', icon: '/images/champions/Rell.png', games: 1, winRate: 100, kda: 2.2 },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 1, winRate: 0, kda: 2.0 }
    ],
    stats: {
      kp: 79.9,
      vspm: 4.53,
      kpm: 0.36,
      gpm: 273,
      wpm: 2.16,
      kda: 5.5
    }
  },
  kael: {
    id: 'kael',
    name: 'Kael',
    team: 'AL',
    role: 'sup',
    games: 16,
    avatar: '/images/players/sup/kael.png',
    scale: 1.0,
    champions: [
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 3, winRate: 33.3, kda: 3.4 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 3, winRate: 33.3, kda: 5.3 },
      { name: '妮蔻', icon: '/images/champions/Neeko.png', games: 3, winRate: 33.3, kda: 2.0 },
      { name: '光辉', icon: '/images/champions/Lux.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 1, winRate: 100, kda: 5.3 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 1, winRate: 100, kda: 13.0 },
      { name: '塔姆', icon: '/images/champions/TahmKench.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '芮尔', icon: '/images/champions/Rell.png', games: 1, winRate: 100, kda: 9.0 }
    ],
    stats: {
      kp: 71.6,
      vspm: 4.19,
      kpm: 0.32,
      gpm: 267,
      wpm: 2.08,
      kda: 4.4
    }
  },
  busio: {
    id: 'busio',
    name: 'Busio',
    team: 'KC',
    role: 'sup',
    games: 11,
    avatar: '/images/players/sup/busio.png',
    scale: 1.0,
    champions: [
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 2, winRate: 50, kda: 1.1 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 2, winRate: 100, kda: 18.0 },
      { name: '大眼', icon: '/images/champions/Velkoz.png', games: 1, winRate: 100, kda: 4.0 },
      { name: '娜美', icon: '/images/champions/Nami.png', games: 1, winRate: 0, kda: 1.7 },
      { name: '芮尔', icon: '/images/champions/Rell.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 1, winRate: 100, kda: 9.0 },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 1, winRate: 100, kda: '-' },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '女坦', icon: '/images/champions/Leona.png', games: 1, winRate: 100, kda: 5.5 }
    ],
    stats: {
      kp: 71.2,
      vspm: 3.98,
      kpm: 0.28,
      gpm: 263,
      wpm: 2.03,
      kda: 4.5
    }
  },
  keria: {
    id: 'keria',
    name: 'Keria',
    team: 'T1',
    role: 'sup',
    games: 18,
    avatar: '/images/players/sup/keria.png',
    scale: 1.0,
    champions: [
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 3, winRate: 100, kda: 6.4 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 2, winRate: 50, kda: 32.0 },
      { name: '巴德', icon: '/images/champions/Bard.png', games: 2, winRate: 0, kda: 1.6 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 2, winRate: 0, kda: 2.3 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 2, winRate: 0, kda: 2.4 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '妮蔻', icon: '/images/champions/Neeko.png', games: 1, winRate: 100, kda: 13.0 },
      { name: '机器人', icon: '/images/champions/Blitzcrank.png', games: 1, winRate: 100, kda: 10.5 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 100, kda: '-' },
      { name: '悠米', icon: '/images/champions/Yuumi.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '塔姆', icon: '/images/champions/TahmKench.png', games: 1, winRate: 0, kda: 0.7 }
    ],
    stats: {
      kp: 83.3,
      vspm: 4.04,
      kpm: 0.40,
      gpm: 265,
      wpm: 2.16,
      kda: 5.3
    }
  },
  ackerman: {
    id: 'ackerman',
    name: 'Ackerman',
    team: 'LOS',
    role: 'sup',
    games: 14,
    avatar: '/images/players/sup/ackerman.png',
    scale: 1.0,
    champions: [
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 2, winRate: 50, kda: 5.0 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 2, winRate: 100, kda: '-' },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 2, winRate: 50, kda: 8.5 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 2, winRate: 100, kda: 25.0 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 9.0 },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 0, kda: 0.7 },
      { name: '妮蔻', icon: '/images/champions/Neeko.png', games: 1, winRate: 0, kda: 2.8 },
      { name: '波比', icon: '/images/champions/Poppy.png', games: 1, winRate: 100, kda: 16.0 },
      { name: '巴德', icon: '/images/champions/Bard.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 100, kda: 6.0 }
    ],
    stats: {
      kp: 72.2,
      vspm: 4.28,
      kpm: 0.30,
      gpm: 264,
      wpm: 2.01,
      kda: 6.6
    }
  },
  isles: {
    id: 'isles',
    name: 'Isles',
    team: 'LYON',
    role: 'sup',
    games: 16,
    avatar: '/images/players/sup/isles.png',
    scale: 1.0,
    champions: [
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 4, winRate: 50, kda: 3.8 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 3, winRate: 33.3, kda: 3.9 },
      { name: '烈娜塔', icon: '/images/champions/Renata.png', games: 3, winRate: 100, kda: 8.4 },
      { name: '芮尔', icon: '/images/champions/Rell.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 1, winRate: 100, kda: '-' },
      { name: '米利欧', icon: '/images/champions/Milio.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 15.0 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 1, winRate: 0, kda: 0.5 }
    ],
    stats: {
      kp: 63.9,
      vspm: 4.1,
      kpm: 0.25,
      gpm: 251,
      wpm: 1.99,
      kda: 4.1
    }
  },
  labrov: {
    id: 'labrov',
    name: 'Labrov',
    team: 'G2',
    role: 'sup',
    games: 10, // 9W - 1L
    avatar: '/images/players/sup/labrov.png',
    scale: 1.0,
    champions: [
      { name: '萨勒芬妮', icon: '/images/champions/Seraphine.png', games: 2, winRate: 100, kda: 4.1 },
      { name: '洛', icon: '/images/champions/Rakan.png', games: 2, winRate: 50, kda: 1.6 },
      { name: '露露', icon: '/images/champions/Lulu.png', games: 2, winRate: 100, kda: 9.3 },
      { name: '牛头', icon: '/images/champions/Alistar.png', games: 1, winRate: 100, kda: 3.2 },
      { name: '卡尔玛', icon: '/images/champions/Karma.png', games: 1, winRate: 100, kda: 9.5 },
      { name: '泰坦', icon: '/images/champions/Nautilus.png', games: 1, winRate: 100, kda: 2.0 },
      { name: '光辉', icon: '/images/champions/Lux.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      kp: 67,
      vspm: 4.14,
      kpm: 0.39,
      gpm: 287,
      wpm: 1.99,
      kda: 4.6
    }
  },
}