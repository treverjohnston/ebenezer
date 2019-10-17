import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs'

import tabs from './tabs'
import auth from './auth'
import items from './items'
import email from './email'

Vue.use(Vuex)
Vue.use(VueAnime)
import VueAnalytics from 'vue-analytics';

vue.use(VueAnalytics, {
  id: 'UA-120904325-1',
  checkDuplicatedScript: true,
  router
});
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tabs,
      auth,
      items,
      email
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
