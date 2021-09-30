<template>
  <QPage>
    <span class="text-h4" v-if="!animesList?.length">Busque por seu anime favorito!</span>

    <section v-else>

      <q-page-container class="row inline justify-around">
        <div v-for="anime of animesList" :key="anime.id">
          <q-card class="anime-list__card" flat @click="openAnime(anime.id)">
            <q-img
              class="anime-list__card__image"
              :src="anime.image"
            />

            <q-card-section>
              <q-separator></q-separator>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ anime.title }}</div>
              <div class="text-caption text-grey">
                {{ anime.description }}
              </div>
            </q-card-section>

          </q-card>
        </div>

      </q-page-container>
    </section>
  </QPage>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AnimeList',

  computed: {
    ...mapState('animes', ['animesList'])

  },
  methods: {
    async openAnime (id) {
      console.log(id)
      await this.getAnime(id)
      this.$router.push({ name: 'anime' })
    },
    ...mapActions('anime', ['getAnime'])
  }
}
</script>

<style scoped lang="scss">
.anime-list__card {
  cursor: pointer;
  width: 300px;

  &__image{
    min-height: 500px
  }
}
</style>
