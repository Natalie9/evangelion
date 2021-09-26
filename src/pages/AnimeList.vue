<template>
  <QPage>
    <QHeader>Lista de animes</QHeader>

    <section v-if="animesList.length">

      <div v-for="anime of animesList" :key="anime.id">
        <q-card class="my-card" flat bordered>
          <q-img
            width="300px"
            :src="anime.image"
          />

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ anime.title }}</div>
            <div class="text-caption text-grey">
              {{ anime.description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn color="dark" label="More" @click="openAnime(anime.id)"/>

          </q-card-actions>

        </q-card>

      </div>
    </section>
  </QPage>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AnimeList',
  computed: {
    ...mapState('animes', ['animesList'])
  },
  methods: {
    openAnime (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
.my-card {
  max-width: 350px;
}
</style>
