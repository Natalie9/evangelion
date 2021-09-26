<template>
  <q-page >
    <SearchBar></SearchBar>
    <div v-if="evangelion">
<!--      //buscador de anime, busque pelo nome e veja os eps, atores e etc-->
      <q-btn color="purple" label="Posters" @click="toImages"/>
      <q-btn color="purple" label="infos" @click="getEps"/>
      <h3>{{ evangelion.title }}</h3>
      <h5>{{evangelion.originalTitle}}</h5>
      <img :src="evangelion.image">
      <p>{{ evangelion.description }}</p>
      <div v-for="genre in evangelion.genreList" :key="genre.id" class="col">
        <q-badge outline color="primary" :label="genre.value"/>
      </div>
      <span> {{evangelion.plot}}</span>
    </div>
  </q-page>
</template>

<script>
import { getEvangelionInfos } from '../services'
import SearchBar from '../components/SearchBar'

export default {
  name: 'PageIndex',
  components: { SearchBar },
  data () {
    return {
      evangelion: {}
    }
  },
  methods: {
    async getEps () {
      const response = await getEvangelionInfos()
      console.log(response.data)
      this.evangelion = response.data
    },
    toImages () {
      this.$router.push({ name: 'posters' })
    }
  },
  async created () {
    // await this.getEps()
  }

}
</script>
