// src/data/index.js
import { coachesDb } from './coachesDb'
import { teamStatDefs, statDefsByRole } from './statConfig' // 🆕 引入配置

// 季后赛
import { teamsDb as playoffsTeams } from './s16_playoffs/teamsDb'
import { playersDb as playoffsPlayers } from './s16_playoffs/playersDb'
import { matchesDb as playoffsMatches } from './s16_playoffs/matchesDb' // 假设你有这个文件

// 世界赛
import { teamsDb as worldsTeams } from './s16_worlds/teamsDb'
import { playersDb as worldsPlayers } from './s16_worlds/playersDb'
import { matchesDb as worldsMatches } from './s16_worlds/matchesDb' // 假设你有这个文件

export const dataSources = {
  s16_playoffs: {
    label: 'S16 季后赛',
    teams: playoffsTeams,
    players: playoffsPlayers,
    matches: playoffsMatches,
  },
  s16_worlds: {
    label: 'S16 世界赛',
    teams: worldsTeams,
    players: worldsPlayers,
    matches: worldsMatches,
  }
}

// 🆕 统一导出
export { coachesDb, teamStatDefs, statDefsByRole }