import request from "@/utils/request";
import { API, LoginParams, LoginResponse, UserInfoResponse } from "./type";

// 登录
export const reqLogin = (data: LoginParams) =>
  request.post<LoginResponse>(API.LOGIN_API, data);

// 获取用户信息
export const reqUserInfo = () =>
  request.get<UserInfoResponse>(API.USER_INFO_API);
