import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import HomeMenu from "@/views/home_components/HomeMenu.vue";

const router = createRouter({
  // 必须指定history属性
  history: createWebHistory(),
  routes: [
    // 默认重定向到home
    {
      path: '/',
      redirect: '/home'
    },
    // 这种模式默认没有分包处理
    // { path: '/home', component: Home },
    // { path: '/about', component: About },

    // 开发中常用import函数导入的形式,进行分包
    {
      path: '/home',
      component: () => import('@/views/Home.vue'),
      // 嵌套使用
      children: [
        {
          path: '/home/menu',
          component: () => import('@/views/home_components/HomeMenu.vue')
        },
        {
          path: '/home/song',
          component: () => import('@/views/home_components/HomeSong.vue')
        },
      ]
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    },

    // 动态组件(id代表不用用户的id)
    {
      path: '/user/:id',
      component: () => import('@/views/User.vue')
    },
    // NotFound
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/NotFound.vue')
    },
  ]
})

export default router