<template>
<section>
  Anime info
  {{anime.title}}
  <img :src="anime.image">
</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AnimeInfo',
  computed: {
    ...mapState('anime', { anime: 'STATE_ANIME_INFO' })
  }
}
</script>

<style scoped>

</style>
