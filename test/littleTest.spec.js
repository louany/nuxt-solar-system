import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store/favourites', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  let nuxtStore
  let store

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    nuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await nuxtStore.createStore()
  })

  describe('Favourites Asters', () => {
    let favouritesAsters

    beforeEach(() => {
      favouritesAsters = store.getters['favourites/getFavouritesAsters']
    })

    test('Getter is an array', () => {
      expect(_.isArray(favouritesAsters)).toBe(true)
    })
  })
})
