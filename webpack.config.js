import path from "path"
const __dirname = path.resolve();
export default {
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js",
    },
    entry: "./src/index.js",
    mode: 'development'   //  有开发阶段(development)不会压缩打包速度快  跟生产阶段(production)会压缩打包速度慢
}