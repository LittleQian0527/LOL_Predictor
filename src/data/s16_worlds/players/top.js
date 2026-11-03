export const topPlayers = {
  bin: {
    id: 'bin',
    name: 'Bin',
    team: 'BLG',
    role: 'top',
    games: 8, // 5W - 3L
    avatar: '/images/players/top/bin.png',
    scale: 1.0,
    champions: [
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 3, winRate: 33.3, kda: 5.0 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 2, winRate: 100, kda: 3.6 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 405.6,
      dmgShare: 18.4,
      csd: 8.6,
      gpm: 391,
      kp: 50.1,
      kda: 4.5,
      gd15: -34 // 虽然 top 指标没直接展示，但存着备用
    }
  },
  siwoo: {
    id: 'siwoo',
    name: 'Siwoo',
    team: 'DK',
    role: 'top',
    games: 4, // 4W - 0L
    avatar: '/images/players/top/siwoo.png',
    scale: 1.0,
    champions: [
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 1, winRate: 100, kda: 2.5 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 100, kda: 1.5 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 100, kda: 4.3 },
      { name: '刀妹', icon: '/images/champions/Irelia.png', games: 1, winRate: 100, kda: 1.7 }
    ],
    stats: {
      dpm: 429.5,
      dmgShare: 17.8,
      csd: 9.4,
      gpm: 410,
      kp: 50.8,
      kda: 2.6,
      gd15: 395
    }
  },
  kiin: {
    id: 'kiin',
    name: 'Kiin',
    team: 'GEN',
    role: 'top',
    games: 5, // 4W - 1L
    avatar: '/images/players/top/kiin.png',
    scale: 1.0,
    champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 50, kda: 9.5 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 100, kda: 4.0 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 5.5 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 1, winRate: 100, kda: 12.0 }
    ],
    stats: {
      dpm: 624.9,
      dmgShare: 24.7,
      csd: 8.8,
      gpm: 403,
      kp: 70.2,
      kda: 6.8,
      gd15: 208 // 🆕 殿下钦定，绝对准确
    }
  },
  theshy: {
    id: 'theshy',
    name: 'TheShy',
    team: 'IG',
    role: 'top',
    games: 6, // 4W - 2L
    avatar: '/images/players/top/theshy.png',
    scale: 1.0,
    champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 1, winRate: 0, kda: 1.4 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 100, kda: 4.7 },
      { name: '克烈', icon: '/images/champions/Kled.png', games: 1, winRate: 100, kda: 4.5 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 100, kda: '-' },
      { name: '亚恒', icon: '/images/champions/Zaahen.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 581,
      dmgShare: 23.1,
      csd: 8.0,
      gpm: 372,
      kp: 55,
      kda: 3.3
    }
  },
  canna: {
    id: 'canna',
    name: 'Canna',
    team: 'KC',
    role: 'top',
    games: 7, // 5W - 2L
    avatar: '/images/players/top/canna.png',
    scale: 1.0,
    champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 3, winRate: 33.3, kda: 4.5 },
      { name: '武器', icon: '/images/champions/Jax.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 100, kda: '-' },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 1, winRate: 100, kda: 1.8 }
    ],
    stats: {
      dpm: 578.2,
      dmgShare: 22.6,
      csd: 8.2,
      gpm: 395,
      kp: 58.8,
      kda: 3.9
    }
  },
  dhokla: {
    id: 'dhokla',
    name: 'Dhokla',
    team: 'LYON',
    role: 'top',
    games: 11, // 6W - 5L
    avatar: '/images/players/top/dhokla.png',
    scale: 1.0,
    champions: [
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 4, winRate: 50, kda: 4.2 },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 2, winRate: 100, kda: 2.2 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 0, kda: 2.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 100, kda: 14.0 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 0, kda: 2.0 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 100, kda: 1.3 }
    ],
    stats: {
      dpm: 396.1,
      dmgShare: 19.5,
      csd: 7.7,
      gpm: 353,
      kp: 54.8,
      kda: 3.1
    }
  },
  doran: {
    id: 'doran',
    name: 'Doran',
    team: 'T1',
    role: 'top',
    games: 5, // 4W - 1L
    avatar: '/images/players/top/doran.png',
    scale: 1.0,
    champions: [
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 2, winRate: 50, kda: 5.0 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 2, winRate: 100, kda: 7.0 },
      { name: '格温', icon: '/images/champions/Gwen.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 699.6,
      dmgShare: 26.3,
      csd: 9.9,
      gpm: 445,
      kp: 53.5,
      kda: 7.8
    }
  },
  p369: { // 如果你的 id 写的是 369，请自行改一下这里
    id: 'p369',
    name: '369',
    team: 'TES',
    role: 'top',
    games: 6, // 4W - 2L
    avatar: '/images/players/top/p369.png',
    scale: 1.0,
    champions: [
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 2, winRate: 100, kda: 9.0 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '剑魔', icon: '/images/champions/Aatrox.png', games: 1, winRate: 100, kda: '-' },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 498.8,
      dmgShare: 20.3,
      csd: 8.9,
      gpm: 394,
      kp: 53.2,
      kda: 3.5
    }
  },
}