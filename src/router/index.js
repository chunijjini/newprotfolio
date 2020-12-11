import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About/index'
// import contact from '@/views/contact/index'
// import works from '@/views/works/index'

Vue.use(Router)

const router = new Router({
  mode: 'history', 
  routes: [
    {                                                         
      path: '/',
      name: 'Home',
      component: Home 
    },
    {                                                         
        path: '/about',
        name: 'about',
        component: About
    },
    // {                                                         
    //     path: '/contact',
    //     name: 'contact',
    //     component: contact
    // },
    // {                                                         
    //     path: '/works',
    //     name: 'works',
    //     component: works
    // },
  ],
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   } 
})

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//       // Start the route progress bar.
//       // console.log( "start" );
//       // NProgress.start()
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   // console.log( "end" );
//   // NProgress.done()
// })


export default router