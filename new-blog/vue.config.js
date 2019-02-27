// const package = require("./package.json")

// module.exports = {
//     publicPath: '/', // 根路径
//     outputDir: 'dist', // 构建输出目录
//     assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
//     lintOnSave: false, // 是否开启eslint保存检测，有效值：true || false || error
//     devServer: {
//         open: true, // 当项目运行时，是否自动打开浏览器
//         host: 'localhost',
//         port: 8081, //端口号
//         https: false,
//         hotOnly: false,
//         proxy: {
//             // 配置跨域
//             'api': {
//                 target: 'http//localhost:5000/api/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//         before: (app) =>{ //提供在服务器内部的所有其他中间件之前执行自定义中间件的能力
//             app.get("/api/users", (req,res) => {
//                 res.json(package)
//             })
//         }
//     }
// }

module.exports = {
    publicPath: '/',
    outputDir : 'dist',   //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    assetsDir : 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    devServer : {
        open: true,
    }
}











