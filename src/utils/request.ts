import axios from "axios";
import { ElMessage } from "element-plus";

// axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API as string,
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    return config;
  },
  (error) => {
    // 发送失败
    console.log(error);

    ElMessage({
      message: "请求发送失败",
      type: "error",
      duration: 5 * 1000
    });

    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 在这里对返回的数据进行处理
    const res = response.data;
    if (res.code !== 200) {
      ElMessage({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    // 处理响应失败
    console.log(error);
    const status = error.response.status;
    let message = "";

    switch (status) {
      case 400:
        message = "请求错误";
        break;
      case 401:
        message = "未授权，请登录";
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = `请求地址出错: ${error.response.config.url}`;
        break;
      case 408:
        message = "请求超时";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      case 501:
        message = "服务未实现";
        break;
      case 502:
        message = "网关错误";
        break;
      case 503:
        message = "服务不可用";
        break;
      case 504:
        message = "网关超时";
        break;
      case 505:
        message = "HTTP版本不受支持";
        break;
      default:
        message = "请求失败";
    }

    ElMessage({
      message: message,
      type: "error",
      duration: 5 * 1000
    });

    return Promise.reject(error);
  }
);

export default request;
