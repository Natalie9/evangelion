<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black">

      <q-toolbar class="justify-center q-py-lg">

          <SearchBar class="col-8"></SearchBar>

      </q-toolbar>
    </q-header>
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
