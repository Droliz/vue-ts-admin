// API 枚举
export enum API {
  LOGIN_API = "/user/login",
  USER_INFO_API = "/user/info"
}

// login 接口参数类型
export interface LoginParams {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

// login 接口返回数据类型
export interface LoginResponse {
  code: number;
  data: dataType;
  message: string;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

// 用户信息相关类型
interface user {
  checkUser: userInfo;
}

// 服务器返回用户信息相关类型
export interface UserInfoResponse {
  code: number;
  data: user;
}
