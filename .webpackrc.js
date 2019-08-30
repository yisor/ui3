import { resolve } from 'path';

export default {
  entry: "./src/*.js",
  define: {
    'process.env': {},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV
  },
  extraBabelPlugins: [
    ["module-resolver", { "alias": { "dva": "dva-react-router-3" } }],
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib", "style": true }]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
      ],
      publicPath: "/",
    },
    production: {
      extraBabelPlugins: [
        ["transform-remove-console", { "exclude": ["error", "warn"] }],
      ],
      publicPath: "/",
    }
  },
  es5ImcompatibleVersions: true,
  extraBabelIncludes: [],
  alias: {
    components: resolve(__dirname, "./src/components"),
    utils: resolve(__dirname, "./src/utils"),
    services: resolve(__dirname, "./src/services"),
    models: resolve(__dirname, "./src/models"),
    routes: resolve(__dirname, "./src/routes"),
    assets: resolve(__dirname, "./src/assets"),
    constants: resolve(__dirname, "./src/constants")
  }
}
