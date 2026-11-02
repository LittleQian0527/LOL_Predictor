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
  rookie: {
    id: 'rookie',
    name: 'Rookie',
    team: 'IG',
    role: 'mid',
    games: 20,
    avatar: '/images/players/mid/rookie.png',
    scale: 1.0,
    champions: [
      { name: '发条', icon: '/images/champions/Orianna.png', games: 4, winRate: 75, kda: 10.5 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 100, kda: 13.0 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 2, winRate: 100, kda: 4.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 2, winRate: 100, kda: '-' },
      { name: '阿萝拉', icon: '/images/champions/Aurora.png', games: 2, winRate: 100, kda: 9.3 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 1, winRate: 0, kda: 6.0 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 1, winRate: 100, kda: '-' },
      { name: '安妮', icon: '/images/champions/Annie.png', games: 1, winRate: 100, kda: 4.3 },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 0, kda: 4.0 }, // ⚠️ 名字和路径根据你国服图库改
      { name: '塞拉斯', icon: '/images/champions/Sylas.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '妖姬', icon: '/images/champions/LeBlanc.png', games: 1, winRate: 0, kda: 1.0 }
    ],
    stats: {
      dpm: 686.3,
      dmgConv: 161.8, // 🆕 伤害转化率 (算出来的，如果表里有现成数据请替换)
      kp: 65.1,
      csd: 8.8,
      gpm: 424,
      kda: 6.7
    }
  },
  chovy: {
    id: 'chovy',
    name: 'Chovy',
    team: 'GEN',
    role: 'mid',
    games: 11,
    avatar: '/images/players/mid/chovy.png',
    scale: 1.0,
    champions: [
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 3, winRate: 33.3, kda: 1.9 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 2, winRate: 100, kda: 24.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 100, kda: '-' },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '薇古丝', icon: '/images/champions/Vex.png', games: 1, winRate: 100, kda: 19.0 },
      { name: '冰女', icon: '/images/champions/Lissandra.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '塞拉斯', icon: '/images/champions/Sylas.png', games: 1, winRate: 100, kda: '-' },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 1, winRate: 100, kda: 9.0 }
    ],
    stats: {
      dpm: 636.7,
      dmgConv: 136.9,
      kp: 62.6,
      csd: 10.0,
      gpm: 465,
      kda: 7.3
    }
  },
  zeka: {
    id: 'zeka',
    name: 'Zeka',
    team: 'HLE',
    role: 'mid',
    games: 17,
    avatar: '/images/players/mid/zeka.png',
    scale: 1.0,
    champions: [
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 2, winRate: 0, kda: 1.3 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 2, winRate: 50, kda: 4.5 },
      { name: '发条', icon: '/images/champions/Orianna.png', games: 2, winRate: 100, kda: 11.5 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 2, winRate: 0, kda: 3.4 },
      { name: '安妮', icon: '/images/champions/Annie.png', games: 1, winRate: 0, kda: 5.0 },
      { name: '蛇女', icon: '/images/champions/Cassiopeia.png', games: 1, winRate: 100, kda: '-' },
      { name: '岩雀', icon: '/images/champions/Taliyah.png', games: 1, winRate: 100, kda: 7.5 },
      { name: '塞拉斯', icon: '/images/champions/Sylas.png', games: 1, winRate: 0, kda: 2.8 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 1, winRate: 100, kda: 14.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 1, winRate: 0, kda: 4.0 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 1, winRate: 100, kda: '-' },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 0, kda: 1.7 }
    ],
    stats: {
      dpm: 629.8,
      dmgConv: 150.3, // 计算得出 (629.8 / 419)
      kp: 72.5,
      csd: 8.9,
      gpm: 419,
      kda: 5.0
    }
  },
  creme: {
    id: 'creme',
    name: 'Creme',
    team: 'TES',
    role: 'mid',
    games: 10,
    avatar: '/images/players/mid/creme.png',
    scale: 1.0,
    champions: [
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 2, winRate: 50, kda: 4.4 },
      { name: '沙皇', icon: '/images/champions/Azir.png', games: 2, winRate: 50, kda: 2.7 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 2, winRate: 50, kda: 4.1 },
      { name: '发条', icon: '/images/champions/Orianna.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 1, winRate: 100, kda: 4.3 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 0, kda: 0.7 },
      { name: '慧', icon: '/images/champions/Hwei.png', games: 1, winRate: 0, kda: 1.3 }
    ],
    stats: {
      dpm: 811.8,
      dmgConv: 210.3,
      kp: 65.8,
      csd: 8.6,
      gpm: 386,
      kda: 2.8
    }
  },
  knight: {
    id: 'knight',
    name: 'Knight',
    team: 'BLG',
    role: 'mid',
    games: 11,
    avatar: '/images/players/mid/knight.png',
    scale: 1.0,
    champions: [
      { name: '发条', icon: '/images/champions/Orianna.png', games: 2, winRate: 50, kda: 2.0 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 1, winRate: 100, kda: 17.0 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 100, kda: 16.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 0, kda: 2.7 },
      { name: '安妮', icon: '/images/champions/Annie.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 1, winRate: 100, kda: '-' },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 100, kda: 14.0 },
      { name: '阿萝拉', icon: '/images/champions/Aurora.png', games: 1, winRate: 0, kda: 3.0 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 1, winRate: 0, kda: 1.3 }
    ],
    stats: {
      dpm: 617.4,
      dmgConv: 141.9,
      kp: 72.9,
      csd: 9.4,
      gpm: 435,
      kda: 5.8
    }
  },
  jojopyun: {
    id: 'jojopyun',
    name: 'Jojopyun',
    team: 'MKOI', // 🆕 队伍已更正为 MKOI
    role: 'mid',
    games: 15,
    avatar: '/images/players/mid/jojopyun.png',
    scale: 1.0,
    champions: [
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 4, winRate: 75, kda: 7.5 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 3, winRate: 33.3, kda: 2.5 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 2, winRate: 50, kda: 2.0 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 2, winRate: 100, kda: 11.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 0, kda: 4.0 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 100, kda: '-' },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 100, kda: 6.5 },
      { name: '冰女', icon: '/images/champions/Lissandra.png', games: 1, winRate: 0, kda: 1.5 }
    ],
    stats: {
      dpm: 620.2,
      dmgConv: 147.7,
      kp: 62.9,
      csd: 9.5,
      gpm: 420,
      kda: 4.3
    }
  },
  shanks: {
    id: 'shanks',
    name: 'Shanks',
    team: 'AL',
    role: 'mid',
    games: 16,
    avatar: '/images/players/mid/shanks.png',
    scale: 1.0,
    champions: [
      { name: '发条', icon: '/images/champions/Orianna.png', games: 2, winRate: 50, kda: 4.3 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 2, winRate: 50, kda: 2.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 2, winRate: 100, kda: 3.8 },
      { name: '安妮', icon: '/images/champions/Annie.png', games: 2, winRate: 100, kda: 3.0 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 2, winRate: 50, kda: 6.7 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 2, winRate: 100, kda: 22.0 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 1, winRate: 0, kda: 1.4 },
      { name: '沙皇', icon: '/images/champions/Azir.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '冰女', icon: '/images/champions/Lissandra.png', games: 1, winRate: 0, kda: 1.3 }
    ],
    stats: {
      dpm: 614.4,
      dmgConv: 154.0,
      kp: 58.9,
      csd: 9.2,
      gpm: 399,
      kda: 3.1
    }
  },
  kyeahoo: {
    id: 'kyeahoo',
    name: 'Kyeahoo',
    team: 'KC',
    role: 'mid',
    games: 11,
    avatar: '/images/players/mid/kyeahoo.png',
    scale: 1.0,
    champions: [
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 2, winRate: 50, kda: 1.7 },
      { name: '蛇女', icon: '/images/champions/Cassiopeia.png', games: 2, winRate: 100, kda: 2.6 },
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 2, winRate: 100, kda: 13.0 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 2, winRate: 100, kda: 4.8 },
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 1, winRate: 0, kda: 0.4 },
      { name: '发条', icon: '/images/champions/Orianna.png', games: 1, winRate: 100, kda: 3.5 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 1, winRate: 100, kda: 9.0 }
    ],
    stats: {
      dpm: 674.0,
      dmgConv: 159.3,
      kp: 57.1,
      csd: 9.5,
      gpm: 423,
      kda: 3.3
    }
  },
  faker: {
    id: 'faker',
    name: 'Faker',
    team: 'T1',
    role: 'mid',
    games: 18,
    avatar: '/images/players/mid/faker.png',
    scale: 1.0,
    champions: [
      { name: '冰鸟', icon: '/images/champions/Anivia.png', games: 3, winRate: 100, kda: 5.0 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 2, winRate: 50, kda: 3.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 50, kda: 2.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 2, winRate: 50, kda: 3.6 },
      { name: '发条', icon: '/images/champions/Orianna.png', games: 2, winRate: 0, kda: 2.1 },
      { name: '岩雀', icon: '/images/champions/Taliyah.png', games: 1, winRate: 100, kda: 21.0 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 1, winRate: 100, kda: 3.0 },
      { name: '冰女', icon: '/images/champions/Lissandra.png', games: 1, winRate: 0, kda: 4.0 },
      { name: '蛇女', icon: '/images/champions/Cassiopeia.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '沙皇', icon: '/images/champions/Azir.png', games: 1, winRate: 0, kda: 0.3 }
    ],
    stats: {
      dpm: 584.0,
      dmgConv: 148.2,
      kp: 62.1,
      csd: 8.9,
      gpm: 394,
      kda: 3.0
    }
  },
  feisty: {
    id: 'feisty',
    name: 'Feisty',
    team: 'LOS',
    role: 'mid',
    games: 14,
    avatar: '/images/players/mid/feisty.png',
    scale: 1.0,
    champions: [
      { name: '发条', icon: '/images/champions/Orianna.png', games: 3, winRate: 100, kda: 8.8 },
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 2, winRate: 100, kda: 6.7 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 2, winRate: 100, kda: 12.5 },
      { name: '阿萝拉', icon: '/images/champions/Aurora.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '慧', icon: '/images/champions/Hwei.png', games: 1, winRate: 100, kda: '-' },
      { name: '狐狸', icon: '/images/champions/Ahri.png', games: 1, winRate: 0, kda: 2.3 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 0, kda: 2.3 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 1, winRate: 100, kda: '-' },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '冰女', icon: '/images/champions/Lissandra.png', games: 1, winRate: 0, kda: 0.7 }
    ],
    stats: {
      dpm: 553.8,
      dmgConv: 140.6,
      kp: 75.1,
      csd: 8.5,
      gpm: 394,
      kda: 5.2
    }
  },
  saint: {
    id: 'saint',
    name: 'Saint',
    team: 'LYON',
    role: 'mid',
    games: 16,
    avatar: '/images/players/mid/saint.png',
    scale: 1.0,
    champions: [
      { name: '瑞兹', icon: '/images/champions/Ryze.png', games: 3, winRate: 100, kda: 5.8 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 3, winRate: 33.3, kda: 6.0 },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 2, winRate: 0, kda: 0.5 },
      { name: '卡牌', icon: '/images/champions/TwistedFate.png', games: 2, winRate: 50, kda: 3.7 },
      { name: '洛克', icon: '/images/champions/Locke.png', games: 1, winRate: 0, kda: 4.5 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '安妮', icon: '/images/champions/Annie.png', games: 1, winRate: 100, kda: 2.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 0, kda: 0.5 },
      { name: '塞拉斯', icon: '/images/champions/Sylas.png', games: 1, winRate: 100, kda: 9.0 },
      { name: '妖姬', icon: '/images/champions/LeBlanc.png', games: 1, winRate: 100, kda: 2.5 }
    ],
    stats: {
      dpm: 629.6,
      dmgConv: 149.2,
      kp: 55.6,
      csd: 9.0,
      gpm: 422,
      kda: 3.6
    }
  },
  caps: {
    id: 'caps',
    name: 'Caps',
    team: 'G2',
    role: 'mid',
    games: 10, // 9W - 1L
    avatar: '/images/players/mid/caps.png',
    scale: 1.0,
    champions: [
      { name: '发条', icon: '/images/champions/Orianna.png', games: 2, winRate: 100, kda: 16.5 },
      { name: '妖姬', icon: '/images/champions/LeBlanc.png', games: 2, winRate: 100, kda: 4.0 },
      { name: '永恩', icon: '/images/champions/Yone.png', games: 1, winRate: 100, kda: '-' },
      { name: '维克托', icon: '/images/champions/Viktor.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '加里奥', icon: '/images/champions/Galio.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '小炮', icon: '/images/champions/Tristana.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '阿卡丽', icon: '/images/champions/Akali.png', games: 1, winRate: 100, kda: 12.0 }
    ],
    stats: {
      dpm: 639.5,
      dmgConv: 146.3,
      kp: 67.9,
      csd: 9.2,
      gpm: 437,
      kda: 7.1
    }
  },
}