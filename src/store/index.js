import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs'

import auth from './auth'
import items from './items'

Vue.use(Vuex)
Vue.use(VueAnime)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      items
    }
  })

  return Store
}
