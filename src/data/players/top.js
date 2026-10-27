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
    id: 'theshy', name: 'TheShy', team: 'IG', role: 'top', games: 20,
    avatar: '/images/players/top/theshy.png', champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 3, winRate: 66.7, kda: 2.8 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 2, winRate: 100, kda: 7.0 },
      { name: '格温', icon: '/images/champions/Gwen.png', games: 2, winRate: 100, kda: 2.0 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 1.3 },
      { name: '薇恩', icon: '/images/champions/Vayne.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '酒桶', icon: '/images/champions/Gragas.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '蒙多', icon: '/images/champions/DrMundo.png', games: 1, winRate: 0, kda: 1.4 },
      { name: '约里克', icon: '/images/champions/Yorick.png', games: 1, winRate: 100, kda: 2.6 },
      { name: '克烈', icon: '/images/champions/Kled.png', games: 1, winRate: 100, kda: 8.5 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: 16.0 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 100, kda: '-' },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 0, kda: 0.7 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 0, kda: 0.3 }
    ],
    scale: 1.0,
    stats: { dpm: 585.8, dmgShare: '20.7', csd: 7.9, gpm: 382, kp: '43.4', kda: 2.8 }
  },
  kiin: {
    id: 'kiin', name: 'Kiin', team: 'GEN', role: 'top', games: 11,
    avatar: '/images/players/top/kiin.png', champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 50, kda: 4.1 },
      { name: '格温', icon: '/images/champions/Gwen.png', games: 2, winRate: 100, kda: 5.0 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 2, winRate: 100, kda: 31.0 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 1, winRate: 100, kda: 1.8 },
      { name: '剑魔', icon: '/images/champions/Aatrox.png', games: 1, winRate: 100, kda: 5.5 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '约里克', icon: '/images/champions/Yorick.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '塞恩', icon: '/images/champions/Sion.png', games: 1, winRate: 100, kda: 4.5 }
    ],
    scale: 1.2,
    stats: { dpm: 604.5, dmgShare: '22.5', csd: 8.2, gpm: 423, kp: '61.7', kda: 5.1 }
  },
  zeus: {
    id: 'zeus', name: 'Zeus', team: 'HLE', role: 'top', games: 17,
    avatar: '/images/players/top/zeus.png', scale: 1.0, champions: [
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 2, winRate: 0, kda: 2.6 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 2, winRate: 50, kda: 1.9 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 2, winRate: 50, kda: 3.6 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 2, winRate: 100, kda: 14.5 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 100, kda: 6.3 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '酒桶', icon: '/images/champions/Gragas.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '内瑟斯', icon: '/images/champions/Nasus.png', games: 1, winRate: 0, kda: 0.4 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 100, kda: '-' },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '蒙多', icon: '/images/champions/DrMundo.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '剑姬', icon: '/images/champions/Fiora.png', games: 1, winRate: 0, kda: 1.0 }
    ],
    stats: { dpm: 554.1, dmgShare: 21.5, csd: 8.2, gpm: 393, kp: 58.5, kda: 3.0 }
  },
  p369: {
    id: 'p369', name: '369', team: 'TES', role: 'top', games: 25,
    avatar: '', scale: 1.0, champions: [
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 5, winRate: 60, kda: 2.0 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 3, winRate: 33.3, kda: 1.2 },
      { name: '塞恩', icon: '/images/champions/Sion.png', games: 3, winRate: 33.3, kda: 1.3 },
      { name: '剑魔', icon: '/images/champions/Aatrox.png', games: 3, winRate: 66.7, kda: 6.7 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 2, winRate: 50, kda: 1.2 },
      { name: '约里克', icon: '/images/champions/Yorick.png', games: 2, winRate: 0, kda: 0.3 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 50, kda: 2.2 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 2, winRate: 50, kda: 4.8 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 0, kda: 0.4 },
      { name: '铁男', icon: '/images/champions/Mordekaiser.png', games: 1, winRate: 0, kda: 0.4 },
      { name: '凯南', icon: '/images/champions/Kennen.png', games: 1, winRate: 100, kda: 12.0 }
    ],
    stats: { dpm: 638.7, dmgShare: 23.3, csd: 8.8, gpm: 378, kp: 41.9, kda: 1.7 }
  },
  bin: {
    id: 'bin', name: 'Bin', team: 'BLG', role: 'top', games: 11,
    avatar: '', scale: 1.0, champions: [
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 3, winRate: 66.7, kda: 4.8 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 100, kda: 21.0 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 0, kda: 0.2 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 100, kda: '-' },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 1, winRate: 100, kda: 3.7 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 0, kda: 1.2 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 0, kda: 0.2 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 1, winRate: 100, kda: 5.5 }
    ],
    stats: { dpm: 513.7, dmgShare: 20.0, csd: 8.4, gpm: 395, kp: 56.0, kda: 3.1 }
  },
  myrwn: {
    id: 'myrwn', name: 'Myrwn', team: 'MKOI', role: 'top', games: 15,
    avatar: '', scale: 1.0, champions: [
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 3, winRate: 66.7, kda: 2.7 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 2, winRate: 50, kda: 1.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 50, kda: 4.2 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 2, winRate: 50, kda: 2.0 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '格温', icon: '/images/champions/Gwen.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '慎', icon: '/images/champions/Shen.png', games: 1, winRate: 100, kda: 5.5 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 100, kda: 10.0 },
      { name: '龙女', icon: '/images/champions/Shyvana.png', games: 1, winRate: 100, kda: '-' },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 1, winRate: 0, kda: 0.8 }
    ],
    stats: { dpm: 606.8, dmgShare: 23.5, csd: 8.3, gpm: 376, kp: 47.9, kda: 2.9 }
  },
  breathe: {
    id: 'breathe', name: 'Breathe', team: 'AL', role: 'top', games: 16,
    avatar: '', scale: 1.0, champions: [
      { name: '约里克', icon: '/images/champions/Yorick.png', games: 2, winRate: 100, kda: 5.5 },
      { name: '内瑟斯', icon: '/images/champions/Nasus.png', games: 2, winRate: 50, kda: 1.6 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 2, winRate: 0, kda: 2.5 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 50, kda: 9.5 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 2, winRate: 100, kda: 5.0 },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 2, winRate: 100, kda: 7.7 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 1.6 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '凯南', icon: '/images/champions/Kennen.png', games: 1, winRate: 0, kda: 1.2 }
    ],
    stats: { dpm: 483.7, dmgShare: 19.2, csd: 8.0, gpm: 371, kp: 46.1, kda: 2.9 }
  },
  canna: {
    id: 'canna', name: 'Canna', team: 'KC', role: 'top', games: 11,
    avatar: '', scale: 1.0, champions: [
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 3, winRate: 100, kda: 4.2 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 100, kda: 3.3 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '克烈', icon: '/images/champions/Kled.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 1, winRate: 100, kda: '-' },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 10.0 },
      { name: '凯南', icon: '/images/champions/Kennen.png', games: 1, winRate: 100, kda: 3.5 },
      { name: 'Zaahan', icon: '/images/champions/Zaahan.png', games: 1, winRate: 100, kda: 1.5 } // 如有中文译名请自行修改
    ],
    stats: { dpm: 611.9, dmgShare: 24.7, csd: 8.7, gpm: 403, kp: 45.6, kda: 2.8 }
  },
  doran: {
    id: 'doran', name: 'Doran', team: 'T1', role: 'top', games: 18,
    avatar: '', scale: 1.0, champions: [
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 3, winRate: 66.7, kda: 3.4 },
      { name: '奥拉夫', icon: '/images/champions/Olaf.png', games: 2, winRate: 50, kda: 2.4 },
      { name: '凯南', icon: '/images/champions/Kennen.png', games: 2, winRate: 50, kda: 3.2 },
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 2, winRate: 50, kda: 1.4 },
      { name: '奥恩', icon: '/images/champions/Ornn.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '内瑟斯', icon: '/images/champions/Nasus.png', games: 1, winRate: 100, kda: 12.0 },
      { name: '格温', icon: '/images/champions/Gwen.png', games: 1, winRate: 100, kda: '-' },
      { name: '剑魔', icon: '/images/champions/Aatrox.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '青钢影', icon: '/images/champions/Camille.png', games: 1, winRate: 100, kda: '-' },
      { name: '酒桶', icon: '/images/champions/Gragas.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '奎桑提', icon: '/images/champions/KSante.png', games: 1, winRate: 100, kda: 15.0 },
      { name: '武器', icon: '/images/champions/Jax.png', games: 1, winRate: 0, kda: 0.0 }
    ],
    stats: { dpm: 551.0, dmgShare: 20.0, csd: 8.7, gpm: 389, kp: 49.4, kda: 2.9 }
  },
  zest: {
    id: 'zest', name: 'Zest', team: 'LOS', role: 'top', games: 14,
    avatar: '', scale: 1.0, champions: [
      { name: '兰博', icon: '/images/champions/Rumble.png', games: 3, winRate: 66.7, kda: 3.7 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 2, winRate: 50, kda: 3.3 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 2, winRate: 50, kda: 3.2 },
      { name: '巨魔', icon: '/images/champions/Trundle.png', games: 1, winRate: 100, kda: 2.6 },
      { name: '武器', icon: '/images/champions/Jax.png', games: 1, winRate: 0, kda: 0.6 },
      { name: '纳尔', icon: '/images/champions/Gnar.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '蛮王', icon: '/images/champions/Tryndamere.png', games: 1, winRate: 0, kda: 1.4 },
      { name: '凯南', icon: '/images/champions/Kennen.png', games: 1, winRate: 100, kda: '-' },
      { name: '安蓓萨', icon: '/images/champions/Ambessa.png', games: 1, winRate: 100, kda: 4.0 },
      { name: '鳄鱼', icon: '/images/champions/Renekton.png', games: 1, winRate: 100, kda: 7.0 }
    ],
    stats: { dpm: 622.6, dmgShare: 26.4, csd: 9.3, gpm: 418, kp: 64.4, kda: 2.9 }
  }
}