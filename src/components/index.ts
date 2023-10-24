import { App } from "vue";
import SvgIcon from "./SvgIcon/index.vue";

const allGlobalComponents: {
  [key: string]: object;
} = { SvgIcon };

// 对外暴露插件对象
export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
  }
};
