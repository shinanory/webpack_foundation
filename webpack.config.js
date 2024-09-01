// 引入插件，html-webpack-plugin负责自动生成一个html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 构建模式，可选development和production
    mode: "development",
    // 入口文件, 默认是src/index.js，支持数据或对象
    entry: "./src/index.js",
    // 输出配置
    output:{
        // 输出文件名
        // filename: "bundle.js",
        // 输出路径，相对于webpack.config.js文件
        // path: __dirname + "/dist"
        // 清除上次打包文件
        clean: true,
    },
    // loaders加载器配置，按需在官网查看
    module:{
        rules:[
            {
                // 匹配文件
                test: /\.css$/,
                // 使用的加载器，从后往前执行
                use: ["style-loader", "css-loader"]
            },
            // babel加载器，一般框架写好了，不需要自己配置
            // 在package.json中也可以配置兼容性列表 browserslist
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //         },
            //     },
            // },
        ]
    },
    // 插件，为webpack提供扩展功能
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // 模板
        })
    ],
    // 控制是否生成，以及如何生成 source map（代码映射，调试源码）
    devtool: "inline-source-map"
}