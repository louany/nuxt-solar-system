const state = () => ({
  asters: null
})

const getters = {
  getAsters: (state) => {
    return state.asters
  }
}

const mutations = {
  fetchAsters: (state, asters) => {
    state.asters = asters
  }
}

const actions = {
  async fetchAsters ({ commit }) {
    await this.$axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(resp => (commit('fetchAsters', resp.data.bodies)))
  }
}

export default { state, mutations, actions, getters }
