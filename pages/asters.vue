<template>
  <section class="section_one">
    <h1>Les astres</h1>
    <aster-list
      v-if="!isLoading"
      :asters="asters"
    />
    <div
      v-else
      class="loading"
    >
      <p>CHARGEMENT...</p>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, useStore } from '@nuxtjs/composition-api'
import AsterList from '../components/aster_list.vue'

export default {
  components: {
    AsterList
  },
  setup (_, context) {
    const isLoading = ref(Boolean)

    const store = useStore()

    const astersList = computed(() => {
      return store.getters['asters/getAsters']
    })

    const fecthAsters = () => {
      isLoading.value = true
      if (store.state.asters.asters === null) { store.dispatch('asters/fetchAsters') }
      isLoading.value = false
    }

    onMounted(fecthAsters)

    return {
      asters: astersList,
      isLoading
    }
  }
}
</script>

<style scoped>
  main {
    padding-top: 12vh;
    background: rgb(19, 15, 70);
  }
  .section_one {
    color: #fff;
  }
</style>
