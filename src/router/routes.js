
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/about', component: () => import('pages/Index.vue') },
      { path: '/work', component: () => import('pages/Index.vue') },
      { path: '/contact', component: () => import('pages/Index.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
