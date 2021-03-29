const state = () => ({
  favouritesAsters: []
})

const getters = {
  getFavouritesAsters: (state) => {
    return state.favouritesAsters
  }
}

const mutations = {
  addFavouriteAster: (state, aster) => {
    state.favouritesAsters.push(aster)
  },
  removeFavouriteAster: (state, aster) => {
    state.favouritesAsters = state.favouritesAsters.filter(a => a.id !== aster.id)
  }
}

const actions = {
  addFavouriteAster: ({ commit }, aster) => {
    commit('addFavouriteAster', aster)
  },
  removeFavouriteAster: ({ commit }, aster) => {
    commit('removeFavouriteAster', aster)
  }
}

export default { state, mutations, actions, getters }
