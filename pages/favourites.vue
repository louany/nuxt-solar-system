<template>
  <section class="favourites">
    <h1>Favoris</h1>
    <aster-list
      :asters="asters"
    />
  </section>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  setup (_, context) {
    const store = useStore()
    const favouritesAsters = computed(() => {
      return store.getters['favourites/getFavouritesAsters']
    })
    return {
      asters: favouritesAsters
    }
  }
}
</script>

<style>
.favourites {
  color: #fff;
}
</style>
