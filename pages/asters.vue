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
    <transition name="fade">
      <p
        v-if="error"
        :class="`error`"
      >
        {{ error }}
      </p>
    </transition>
  </section>
</template>

<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
import axios from 'axios'
import AsterList from '../components/aster_list.vue'

export default {
  components: {
    AsterList
  },
  setup (_) {
    const astersList = ref([])
    const isLoading = ref(Boolean)
    const error = ref('')
    const errorClass = ref('in_progress')
    const getAllAsters = async () => {
      isLoading.value = true
      await axios
        .get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(resp => (astersList.value = resp.data.bodies))
        .catch((error) => { error.value = 'Une erreur est survenue' })
      isLoading.value = false
    }

    onMounted(getAllAsters)

    return {
      asters: astersList,
      isLoading,
      error,
      errorClass
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
