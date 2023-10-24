import { RouteRecordRaw } from "vue-router";
// 对外暴露路由配置
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/404"
  }
];
