<template>
  <div class="aster_card">
    <article class="aster">
      <p>{{ aster.name }}</p>
      <div class="aster-cta">
        <span v-if="!isFavourites" class="aster_link material-icons" @click="addFavourites()">
          favorite_border
        </span>
        <span v-else class="aster_link material-icons" @click="removeFavourites()">
          favorites
        </span>
        <nuxt-link
          :to="{ name : 'aster-id', params : { id : aster.id } }"
          class="aster_link"
        >
          Voir plus
        </nuxt-link>
      </div>
    </article>
  </div>
</template>
<script>
import { computed, useStore } from '@nuxtjs/composition-api'
export default {
  props: {
    aster: {
      type: Object,
      required: true
    }
  },
  setup (props, context) {
    const store = useStore()
    const toastTextAdd = `${props.aster.name} a été ajouté aux favoris`
    const toastTextRemove = `${props.aster.name} a été retiré des favoris`
    const toastOptions = {
      theme: 'bubble',
      duration: 3000,
      action: {
        text: 'Voir les favoris',
        onClick: (e, toastObject) => context.root._router.push('/favourites')
      }
    }

    const isFavourites = computed(() => {
      return store.state.favourites.favouritesAsters.some(a => a.id === props.aster.id)
    })

    function addFavourites () {
      store.dispatch('favourites/addFavouriteAster', props.aster)
      this.$toasted.show(toastTextAdd, toastOptions)
    }
    function removeFavourites () {
      store.dispatch('favourites/removeFavouriteAster', props.aster)
      this.$toasted.show(toastTextRemove, toastOptions)
    }

    return {
      addFavourites,
      removeFavourites,
      isFavourites
    }
  }
}
</script>

<style lang="scss">
  .aster_card {
    width: 100%;
    padding: 0 5px;
  }
  .aster {
    background: rgb(45, 37, 151);
    padding: 2.4rem;
    margin-bottom: .8rem
  }
  .aster-cta {
    display: flex;
    padding-top: 2rem;
    justify-content: space-between;
  }
  .aster_link {
    text-align: center;
    display: block;
    color: #fff;
    background: rgb(45, 37, 151);
    text-decoration: none;
    cursor: pointer;
    &.material-icons {
      max-width: 24px;
    }
    &:hover {
      color: rgb(204, 122, 16);
    }
  }
  @media (min-width: 768px) {
    .aster_card {
      width: 50%;
    }
  }
  @media (min-width: 998px) {
    .aster_card {
      width: calc(100% /3);
    }
  }
</style>
