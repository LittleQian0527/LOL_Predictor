// 只引入选手数据，不引入指标
import { topPlayers } from './players/top'
import { jugPlayers } from './players/jug'
import { midPlayers } from './players/mid'
import { adcPlayers } from './players/adc'
import { supPlayers } from './players/sup'

// ================= 合并所有选手到一个大表 =================
export const playersDb = {
  ...topPlayers,
  ...jugPlayers,
  ...midPlayers,
  ...adcPlayers,
  ...supPlayers,
}

// 🆕 注意：statDefsByRole 已经彻底搬到 src/data/statConfig.js 了
// 以后组件需要指标，直接 import { statDefsByRole } from '../data/statConfig'
// 这个文件现在只负责乖乖存数据！