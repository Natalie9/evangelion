<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black">

      <q-toolbar class="justify-around q-py-lg">
        <q-btn @click="$router.push({path: '/'})">
          <q-icon name="live_tv" size="lg" color="amber-12"/>
        </q-btn>

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
