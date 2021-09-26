<template>
  <q-layout view="lHh Lpr lFf">
    <SearchBar></SearchBar>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SearchBar from 'components/SearchBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { SearchBar }
})
</script>
