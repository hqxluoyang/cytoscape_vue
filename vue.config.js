/*
 * @Author: your name
 * @Date: 2020-12-29 13:22:30
 * @LastEditTime: 2021-01-06 17:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\vue.config.js
 */

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: './',
    //publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // assetsDir: "./",
    assetsDir: "assets",
    filenameHashing: false,
    outputDir: "../ims3d/www/wwwroot/planroomEditer",
    // outputDir: "../hqxluoyang.github.io/topodist",
    //outputDir: "../test/app/public/webgl",
    productionSourceMap: false,
    devServer: {
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

        // 配置多个代理
        proxy: {
            "/api": {
                target: 'http://devdemo.3ddcim.com/', // 要访问的接口域名
                // target: "http://sgcc.3ddcim.com/",
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
                }
            }
        }
    }
}