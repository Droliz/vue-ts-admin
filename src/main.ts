import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import "virtual:svg-icons-register"; // svg 插件配置
import "@/styles/index.less"; // 引入全局样式
import router from "./router";

const app = createApp(App);

// console.log(import.meta.env);
app.use(ElementPlus);

// 引入自定义插件对象，注册全局自定义插件
import globalComponent from "@/components";
app.use(globalComponent);
app.use(router);
app.mount("#app");
