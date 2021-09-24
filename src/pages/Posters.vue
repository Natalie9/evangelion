<template>
<q-page>
  Posters aqui
  <div v-if="posters.keys">
    <div v-for="poster in posters" >
      aaa {{poster}}
      <img :src="poster.image">
    </div>
  </div>
  {{posters}}
</q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posters',
  data () {
    return {
      posters: {}
    }
  },
  async created () {
    await this.getPosters()
  },
  methods: {
    async getPosters () {
      const response = await axios.get('https://imdb-api.com/en/API/Title/k_oytr4k7n/tt0112159')
      console.log(response)
      this.posters = response
    }
  }
}
</script>

<style scoped>

</style>
