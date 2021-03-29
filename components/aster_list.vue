<template>
  <div class="container">
    <aster-filter @filter="filtered($event)" />
    <div class="asters_list">
      <aster-card
        v-for="(aster, index) in asterList"
        :key="index"
        :aster="aster"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
import AsterCard from './aster_card.vue'
import AsterFilter from './aster_filter.vue'

export default {
  components: {
    AsterCard,
    AsterFilter
  },
  props: {
    asters: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const filter = ref(String)
    const filteteredAstersList = computed(() => {
      switch (filter.value) {
        case 'isPlanet':
          return props.asters.filter(aster => aster.isPlanet)
          // eslint-disable-next-line no-unreachable
          break
        case 'withMoon':
          return props.asters.filter(aster => aster.moons != null)
          // eslint-disable-next-line no-unreachable
          break
        default:
          return props.asters
          // eslint-disable-next-line no-unreachable
          break
      }
    })
    function filtered (event) {
      filter.value = event
    }

    return {
      asterList: filteteredAstersList,
      filtered
    }
  }
}
</script>

<style>
.asters_list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
}
</style>
