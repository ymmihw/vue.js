import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos,
      meta: {
//        requiresAuth: true
      }
    },
    {
      path: '/implicit/callback',
//      component: Auth.handleCallback(),
    },
  ]
});

//router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
