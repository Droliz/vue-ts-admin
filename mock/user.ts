// 用户信息数据
// function createUserList() {
//   return [
//     {
//       userId: 1,
//       avatar: "",
//       username: "admin",
//       password: "123456",
//       desc: "平台管理员",
//       roles: ["平台管理员"],
//       buttons: ["cuser.detail"],
//       routes: ["home"],
//       token: "admin Token",
//     },
//     {
//       userId: 2,
//       avatar: "",
//       username: "system",
//       password: "123456",
//       desc: "系统管理员",
//       roles: ["系统管理员"],
//       buttons: ["cuser.detail", "cuser.user"],
//       routes: ["home"],
//       token: "System Token",
//     },
//   ];
// }

export default [
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      console.log(body);
      return {
        code: 200,
        message: "success",
        data: {
          token: "admin Token"
        }
      };
    }
  }
];
