<template>
  <q-page class="bg-grey-10 text-grey-2">
    <div class="row inline-xs q-pa-md">
      <div class="justify-center row">

        <q-img :src="anime.image" width="400px"/>

      </div>

      <div class="col row content-center">
        <span class="text-h4 text-bold">{{ anime.fullTitle }}</span>
        <span class="text-overline">{{ anime.originalTitle }} (original title)</span>
        <br/>
        <br/>
        <div v-for="genre in anime.genreList" :key="genre.key" class="q-ma-xs">
          <q-badge color="amber-12" class="text-grey-9">{{ genre.value }}</q-badge>
        </div>
        <span>{{ anime.plot }}</span>

      </div>
    </div>
    <div>
      <q-intersection
        v-for="actor in anime.actorList"
        :key="actor.id"
        transition="scale"
        class="row inline justify-center q-ma-md"
      >
        <q-card flat dark class="text-center"
                style="width: 200px">
          <q-img :src="actor.image" width="200px" :ratio="3/4"/>
          <div>
            <span class="text-bold">{{ actor.name }}</span>
            <br/>
            <span>{{ actor.asCharacter }}</span>
          </div>

        </q-card>
      </q-intersection>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AnimeInfo',
  computed: {
    ...mapState('anime', { anime: 'STATE_ANIME_INFO' })
  },
  mounted () {
    console.log(this.anime)
  }
}
</script>

<style scoped>

</style>
