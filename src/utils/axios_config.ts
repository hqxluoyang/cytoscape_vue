/*
 * @Author: your name
 * @Date: 2021-01-06 16:49:40
 * @LastEditTime: 2021-01-06 16:54:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\utils\axios_config.ts
 */

 import axios from "axios";

axios.interceptors.request.use(
  config => {
    console.log("process.env.NODE_ENV != 'production':", process.env.NODE_ENV != 'production')
    if(process.env.NODE_ENV != 'production')  config['url'] = "/api" + config.url;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    console.log("请求正确返回....");
    return response;
  },
  error => {
    console.log("请求返回错误:", error);
    if (error.response) {
      console.log("error.response.message:", error.response)
      switch (error.response.status) {
        case 401:
          console.log("login status");
          localStorage.setItem("users", "") as any
          (window as any).router.replace('/login')
        case 403:
          console.log("后台接口没找到....403");
        case 404:
          console.log("后台接口没找到....404");
        default:
          console.log("后台返回错误////")
      }
    }
    return Promise.reject(error.response.data);
  }
);
