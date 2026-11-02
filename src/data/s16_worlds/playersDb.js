// 引入所有副表
import { topStatDefs, topPlayers } from './players/top'
import { jugStatDefs, jugPlayers } from './players/jug'
import { midStatDefs, midPlayers } from './players/mid'
import { adcStatDefs, adcPlayers } from './players/adc'
import { supStatDefs, supPlayers } from './players/sup'

// ================= 1. 合并所有选手到一个大表 =================
export const playersDb = {
  ...topPlayers,
  ...jugPlayers,
  ...midPlayers,
  ...adcPlayers,
  ...supPlayers,
}

// ================= 2. 数据指标配置中心 =================
// 以后组件想知道该显示什么数据，就调用这个方法
export const statDefsByRole = {
  top: topStatDefs,
  jug: jugStatDefs,
  mid: midStatDefs,
  adc: adcStatDefs,
  sup: supStatDefs,
}