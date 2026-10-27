<script setup>
import { computed } from 'vue'

const props = defineProps({
  player: { type: Object, required: true },
  side: { type: String, default: 'left' }, // 'left' | 'right'
})

const initial = computed(() => (props.player.name?.[0] || '?').toUpperCase())
</script>

<template>
  <div class="player" :class="`player--${side}`">
    <div class="player__avatar">
      <img v-if="player.avatar" :src="player.avatar" :alt="player.name" />
      <span v-else class="player__initial">{{ initial }}</span>
    </div>

    <h2 class="player__name">{{ player.name }}</h2>

    <p class="player__meta">
      <span class="player__team">{{ player.team }}</span>
      <span class="player__dot"></span>
      <span>出场 {{ player.games }}</span>
    </p>

    <div class="player__champs">
      <div v-for="c in player.champions" :key="c.name" class="champ">
        <img v-if="c.icon" :src="c.icon" :alt="c.name" />
        <span v-else>{{ c.name.slice(0, 1) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.player__avatar {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(160deg, #1c1e27, #0d0e12);
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
}

.player__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.player__initial {
  font-size: 36px;
  font-weight: 800;
}

.player__name {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: #f3f5f9;
}

.player__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 0;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #6e7688;
}

.player__team {
  color: #c9d0dc;
  font-weight: 700;
}

.player__dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #4b5363;
}

.player__champs {
  display: flex;
  gap: 7px;
  margin-top: 16px;
}

.champ {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  overflow: hidden;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(150deg, #22242d, #13141a);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.champ img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 左侧：红 */
.player--left .player__avatar {
  border-color: rgba(226, 58, 78, 0.5);
  box-shadow:
    0 0 0 5px rgba(226, 58, 78, 0.06),
    0 16px 40px -12px rgba(226, 58, 78, 0.65),
    inset 0 0 24px rgba(226, 58, 78, 0.12);
}
.player--left .player__initial { color: rgba(226, 58, 78, 0.38); }
.player--left .champ {
  color: #b05561;
  border-color: rgba(226, 58, 78, 0.2);
}

/* 右侧：灰蓝 */
.player--right .player__avatar {
  border-color: rgba(122, 149, 187, 0.5);
  box-shadow:
    0 0 0 5px rgba(122, 149, 187, 0.06),
    0 16px 40px -12px rgba(122, 149, 187, 0.65),
    inset 0 0 24px rgba(122, 149, 187, 0.12);
}
.player--right .player__initial { color: rgba(122, 149, 187, 0.42); }
.player--right .champ {
  color: #7b8ca6;
  border-color: rgba(122, 149, 187, 0.2);
}
</style>