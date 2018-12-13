import Vue from 'vue'
import Vuex from 'vuex'

import tabs from './tabs'
import auth from './auth'
import items from './items'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tabs,
      auth,
      items
    }
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./tabs'], () => {
      const newShowcase = require('./tabs').default
      store.hotUpdate({ modules: { showcase: newShowcase } })
    })
  }

  return Store
}
