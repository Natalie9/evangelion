<template>
  <section>
    <q-input v-model="searchedTerm" label="Busque por seu anime preferido" @keypress.enter="searchTermHandler">
      <template v-slot:append>
        <q-icon name="search" @click="searchTermHandler"/>
      </template>
    </q-input>

  </section>
</template>

<script>
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
      await this.searchTerm(this.searchedTerm)
    },
    ...mapActions('animes', ['searchTerm'])
  }
}
</script>

<style scoped>

</style>
