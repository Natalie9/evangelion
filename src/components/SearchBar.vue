<template>
  <section>
    <q-input rounded filled v-model="searchedTerm" dark label="Busque por seu anime preferido" @keypress.enter="searchTermHandler" color="yellow-4">
      <template v-slot:append>
        <q-icon name="search" @click="searchTermHandler"/>
      </template>
    </q-input>
  </section>
</template>

<script>
import { Loading, QSpinnerGrid } from 'quasar'

import { mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  data () {
    return {
      searchedTerm: ''
    }
  },
  methods: {
    async searchTermHandler () {
      await this.$router.push({ path: '/' })
      Loading.show({
        spinner: QSpinnerGrid,
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'black',
        messageColor: 'white'
      })
      await this.searchTerm(this.searchedTerm)
    },
    ...mapActions('animes', ['searchTerm'])
  }
}
</script>

<style scoped>

</style>
