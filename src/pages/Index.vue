<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="evangelion">
      <q-btn color="purple" label="Posters" @click="toImages"/>
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

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      evangelion: {}
    }
  },
  methods: {
    async getEps () {
      const response = await axios.get('https://imdb-api.com/en/API/Title/k_oytr4k7n/tt0112159')
      console.log(response.data)
      this.evangelion = response.data
    },
    toImages () {
      this.$router.push({ name: 'posters' })
    }
  },
  async created () {
    await this.getEps()
  }

})
</script>
