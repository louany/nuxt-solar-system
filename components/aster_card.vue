<template>
  <div class="aster_card">
    <article class="aster">
      {{ aster.name }}
      <p class="isPlanet">
        <span>Planète : </span>
        <span v-if="aster.isPlanet">
          Oui
        </span>
        <span v-else>
          Non
        </span>
      </p>
      <p class="withMoon">
        <span>Lunes :  </span>
        <span v-if="aster.moons">
          Oui
        </span>
        <span v-else>
          Non
        </span>
      </p>
      <div class="aster-cta">
        <nuxt-link
          :to="{ name : 'aster-id', params : { id : aster.id } }"
          class="aster_link"
        >
          En savoir plus
        </nuxt-link>
        <span v-if="!isFavourites" class="aster_link" @click="addFavourites()">
          Ajouter aux favoris
        </span>
        <span v-else class="aster_link" @click="removeFavourites()">
          Supprimer des favoris
        </span>
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
  setup (props) {
    const store = useStore()
    const isFavourites = computed(() => {
      return store.state.favourites.favouritesAsters.some(a => a.id === props.aster.id)
    })

    function addFavourites () {
      store.dispatch('favourites/addFavouriteAster', props.aster)
    }
    function removeFavourites () {
      store.dispatch('favourites/removeFavouriteAster', props.aster)
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
  }
  .aster_link {
    text-align: center;
    width: 100%;
    display: block;
    color: #fff;
    padding: .4rem .8rem;
    background: rgb(45, 37, 151);
    text-decoration: none;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
      color: rgb(204, 122, 16);
      border: 1px solid rgb(204, 122, 16);
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
