// const path = require('path')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

// const proxySetting = {
//     target: 'https://mybot.qytest.netease.com',
//     changeOrigin: true,
//     secure: false
// }

module.exports = {
    // 是否为生产环境构建生成 source map
    productionSourceMap: false,

    // CSS 相关选项
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    }

    // configureWebpack: {
    //     plugins: [
    //         new webpack.DllReferencePlugin({
    //             context: process.cwd(),
    //             manifest: require('./public/vendor/vendor-manifest.json')
    //         }),
    //         // 将 dll 注入到 生成的 html 模板中
    //         new AddAssetHtmlPlugin({
    //             // dll文件位置
    //             filepath: path.resolve(__dirname, './public/vendor/*.js'),
    //             // dll 引用路径
    //             publicPath: './vendor',
    //             // dll最终输出的目录
    //             outputPath: './vendor'
    //         })
    //     ]
    // },

    // devServer: {
    //     proxy: {
    //         // '/api': proxySetting,
    //         // '/rest': proxySetting
    //     }
    // }
}
