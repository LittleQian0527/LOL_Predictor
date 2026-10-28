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
  jiaqi: {
    id: 'jiaqi',
    name: 'Jiaqi',
    team: 'IG',
    role: 'adc',
    games: 20,
    avatar: '/images/players/adc/jiaqi.png',
    scale: 1.0,
    champions: [
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 3, winRate: 100, kda: 5.3 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 3, winRate: 66.7, kda: 3.2 },
      { name: '厄斐琉斯', icon: '/images/champions/Aphelios.png', games: 3, winRate: 100, kda: 5.7 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 100, kda: 9.7 },
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 2, winRate: 50, kda: 2.4 },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 2, winRate: 50, kda: 5.0 },
      { name: '辛德拉', icon: '/images/champions/Syndra.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 100, kda: 4.5 },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 0, kda: 0.6 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 1, winRate: 0, kda: 0.6 }
    ],
    stats: {
      dpm: 829.1,
      dmgConv: 156.7,
      csd: 10.1,
      gpm: 529,
      kp: 67.8,
      kda: 3.7
    }
  },
  ruler: {
    id: 'ruler',
    name: 'Ruler',
    team: 'GEN',
    role: 'adc',
    games: 11,
    avatar: '/images/players/adc/ruler.png',
    scale: 1.0,
    champions: [
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 100, kda: 5.8 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 100, kda: 10.0 },
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 1, winRate: 100, kda: '-' },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 0, kda: 0.8 },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '女枪', icon: '/images/champions/MissFortune.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 0, kda: 6.0 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 1, winRate: 100, kda: 7.5 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 1, winRate: 100, kda: 14.0 },
      { name: '飞机', icon: '/images/champions/Corki.png', games: 1, winRate: 100, kda: 3.0 }
    ],
    stats: {
      dpm: 831.7,
      dmgConv: 155.2,
      csd: 10.6,
      gpm: 536,
      kp: 70.6,
      kda: 6.0
    }
  },
  gumayusi: {
    id: 'gumayusi',
    name: 'Gumayusi',
    team: 'HLE',
    role: 'adc',
    games: 17,
    avatar: '/images/players/adc/gumayusi.png',
    scale: 1.0,
    champions: [
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 4, winRate: 75, kda: 4.3 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 3, winRate: 0, kda: 1.9 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 2, winRate: 0, kda: 0.7 },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 2, winRate: 50, kda: 6.5 },
      { name: '女枪', icon: '/images/champions/MissFortune.png', games: 1, winRate: 100, kda: 3.7 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 100, kda: 20.0 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 100, kda: 2.8 },
      { name: '炸弹人', icon: '/images/champions/Ziggs.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 100, kda: '-' }
    ],
    stats: {
      dpm: 706.0,
      dmgConv: 147.1,
      csd: 10.3,
      gpm: 480,
      kp: 69.3,
      kda: 2.9
    }
  },
  jackeylove: {
    id: 'jackeylove',
    name: 'JackeyLove',
    team: 'TES',
    role: 'adc',
    games: 10,
    avatar: '/images/players/adc/jackeylove.png',
    scale: 1.0,
    champions: [
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 50, kda: 4.0 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 2, winRate: 0, kda: 1.9 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 0, kda: 1.5 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 100, kda: 4.5 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 100, kda: 10.0 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 0, kda: 0.9 },
      { name: '飞机', icon: '/images/champions/Corki.png', games: 1, winRate: 0, kda: 2.7 },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 100, kda: 18.0 }
    ],
    stats: {
      dpm: 740.6,
      dmgConv: 162.1,
      csd: 9.4,
      gpm: 457,
      kp: 76.7,
      kda: 3.1
    }
  },
  viper: {
    id: 'viper',
    name: 'Viper',
    team: 'BLG',
    role: 'adc',
    games: 11,
    avatar: '/images/players/adc/viper.png',
    scale: 1.0,
    champions: [
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 3, winRate: 66.7, kda: 5.1 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 3, winRate: 33.3, kda: 2.6 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 100, kda: 31.0 },
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 1, winRate: 100, kda: 16.0 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 100, kda: '-' },
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 1, winRate: 0, kda: 1.7 }
    ],
    stats: {
      dpm: 806.5,
      dmgConv: 153.9,
      csd: 10.6,
      gpm: 524,
      kp: 72.7,
      kda: 5.5
    }
  },
  supa: {
    id: 'supa',
    name: 'Supa',
    team: 'MKOI',
    role: 'adc',
    games: 15,
    avatar: '/images/players/adc/supa.png',
    scale: 1.0,
    champions: [
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 3, winRate: 66.7, kda: 5.6 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 3, winRate: 66.7, kda: 4.4 },
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 2, winRate: 100, kda: 7.0 },
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 2, winRate: 50, kda: 6.0 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 50, kda: 6.0 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 2, winRate: 50, kda: 4.7 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 0, kda: 3.0 }
    ],
    stats: {
      dpm: 708.1,
      dmgConv: 137.0,
      csd: 10.3,
      gpm: 517,
      kp: 66.2,
      kda: 5.3
    }
  }, hope: {
    id: 'hope',
    name: 'Hope',
    team: 'AL',
    role: 'adc',
    games: 16,
    avatar: '/images/players/adc/hope.png',
    scale: 1.0,
    champions: [
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 3, winRate: 33.3, kda: 2.5 },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 2, winRate: 0, kda: 0.6 },
      { name: '飞机', icon: '/images/champions/Corki.png', games: 2, winRate: 50, kda: 2.5 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 50, kda: 2.1 },
      { name: '女枪', icon: '/images/champions/MissFortune.png', games: 2, winRate: 50, kda: 9.7 },
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 1, winRate: 100, kda: 4.0 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 1, winRate: 100, kda: '-' },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '金克丝', icon: '/images/champions/Jinx.png', games: 1, winRate: 100, kda: '-' },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 1, winRate: 100, kda: 13.0 }
    ],
    stats: {
      dpm: 705.3,
      dmgConv: 143.9,
      csd: 9.9,
      gpm: 490,
      kp: 66.4,
      kda: 4.2
    }
  },
  caliste: {
    id: 'caliste',
    name: 'Caliste',
    team: 'KC',
    role: 'adc',
    games: 11,
    avatar: '/images/players/adc/caliste.png',
    scale: 1.0,
    champions: [
      { name: '霞', icon: '/images/champions/Xayah.png', games: 2, winRate: 100, kda: 19.0 },
      { name: '女枪', icon: '/images/champions/MissFortune.png', games: 1, winRate: 0, kda: 0.2 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 100, kda: 13.0 },
      { name: '德莱文', icon: '/images/champions/Draven.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 1, winRate: 100, kda: 7.0 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 100, kda: '-' },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 100, kda: 12.0 }
    ],
    stats: {
      dpm: 632.3,
      dmgConv: 123.3,
      csd: 10.6,
      gpm: 513,
      kp: 70.5,
      kda: 5.4
    }
  },
  peyz: {
    id: 'peyz',
    name: 'Peyz',
    team: 'T1',
    role: 'adc',
    games: 18,
    avatar: '/images/players/adc/peyz.png',
    scale: 1.0,
    champions: [
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 2, winRate: 50, kda: 6.2 },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 2, winRate: 50, kda: 4.6 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 2, winRate: 100, kda: 4.4 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 2, winRate: 0, kda: 1.8 },
      { name: '金克丝', icon: '/images/champions/Jinx.png', games: 2, winRate: 0, kda: 0.9 },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '女枪', icon: '/images/champions/MissFortune.png', games: 1, winRate: 100, kda: 2.5 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 100, kda: 6.3 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 0, kda: 2.7 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 100, kda: 5.0 },
      { name: '梅尔', icon: '/images/champions/Mel.png', games: 1, winRate: 0, kda: 2.7 }, // 注：国服如果翻译不一样请自行修改
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 1, winRate: 100, kda: 8.0 },
      { name: '泽丽', icon: '/images/champions/Zeri.png', games: 1, winRate: 100, kda: 5.0 }
    ],
    stats: {
      dpm: 826.8,
      dmgConv: 161.5,
      csd: 10.5,
      gpm: 512,
      kp: 73.1,
      kda: 3.6
    }
  },
  duduhh: {
    id: 'duduhh',
    name: 'Duduhh',
    team: 'LOS',
    role: 'adc',
    games: 14,
    avatar: '/images/players/adc/duduhh.png',
    scale: 1.0,
    champions: [
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 2, winRate: 50, kda: 1.9 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 2, winRate: 100, kda: 3.1 },
      { name: '岩雀', icon: '/images/champions/Taliyah.png', games: 1, winRate: 100, kda: 5.5 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 0, kda: 0.6 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '大嘴', icon: '/images/champions/KogMaw.png', games: 1, winRate: 100, kda: '-' },
      { name: '伊泽瑞尔', icon: '/images/champions/Ezreal.png', games: 1, winRate: 0, kda: 2.5 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 1, winRate: 0, kda: 4.0 },
      { name: '飞机', icon: '/images/champions/Corki.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 1, winRate: 0, kda: 0.7 },
      { name: '亚索', icon: '/images/champions/Yasuo.png', games: 1, winRate: 100, kda: '-' },
      { name: '金克丝', icon: '/images/champions/Jinx.png', games: 1, winRate: 100, kda: 6.0 }
    ],
    stats: {
      dpm: 684.9,
      dmgConv: 139.5,
      csd: 10.0,
      gpm: 491,
      kp: 70.8,
      kda: 3.3
    }
  },
  berserker: {
    id: 'berserker',
    name: 'Berserker',
    team: 'LYON',
    role: 'adc',
    games: 16,
    avatar: '/images/players/adc/berserker.png',
    scale: 1.0,
    champions: [
      { name: '芸阿娜', icon: '/images/champions/Yunara.png', games: 3, winRate: 33.3, kda: 3.0 },
      { name: '卡莉丝塔', icon: '/images/champions/Kalista.png', games: 2, winRate: 100, kda: 4.5 },
      { name: '烬', icon: '/images/champions/Jhin.png', games: 2, winRate: 50, kda: 17.0 },
      { name: '杰斯', icon: '/images/champions/Jayce.png', games: 1, winRate: 0, kda: 1.0 },
      { name: '希维尔', icon: '/images/champions/Sivir.png', games: 1, winRate: 0, kda: 0.0 },
      { name: '寒冰', icon: '/images/champions/Ashe.png', games: 1, winRate: 100, kda: 18.0 },
      { name: '卢锡安', icon: '/images/champions/Lucian.png', games: 1, winRate: 0, kda: 0.7 },
      { name: '韦鲁斯', icon: '/images/champions/Varus.png', games: 1, winRate: 100, kda: 9.0 },
      { name: '金克丝', icon: '/images/champions/Jinx.png', games: 1, winRate: 100, kda: 6.0 },
      { name: '女警', icon: '/images/champions/Caitlyn.png', games: 1, winRate: 0, kda: 0.3 },
      { name: '卡莎', icon: '/images/champions/Kaisa.png', games: 1, winRate: 100, kda: 11.0 },
      { name: '霞', icon: '/images/champions/Xayah.png', games: 1, winRate: 0, kda: 0.5 }
    ],
    stats: {
      dpm: 577.5,
      dmgConv: 126.1,
      csd: 10.0,
      gpm: 458,
      kp: 59.3,
      kda: 4.0
    }
  },
}