import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/layout/AppMain";

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: Main,
    redirect: "/dashboard",
    children: [{
      path: "dashboard",
      component: () =>
        import("@/views/Covid"),
      name: "Dashboard",
      meta: {
        title: "Home",
      }
    }]
  },
  // {
  //   path: "/covid",
  //   component: Main,
  //   redirect: "/covid",
  //   children: [{
  //     path: "/covid",
  //     component: () =>
  //       import("@/views/Covid"),
  //     name: "Covid",
  //     meta: {
  //       title: "Covid-19",
  //     }
  //   }]
  // }
];

const router = new VueRouter({
  mode: 'history', //hash history
  base: process.env.BASE_URL,
  routes
})

export default router