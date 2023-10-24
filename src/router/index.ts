import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./routes"; // 公共路由配置

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;
