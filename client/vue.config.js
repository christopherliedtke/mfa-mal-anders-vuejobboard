const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5001"
      },
      "/sitemap.xml": {
        target: "http://localhost:5001"
      },
      "/graphql": {
        target: "http://localhost:5001"
      }
    },
    port: 8081
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ],
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
    // resolve: {
    //   alias: {
    //     moment: "moment/src/moment"
    //   }
    // }
  },
  chainWebpack: config => {
    // if (config.plugins.has("extract-css")) {
    //     const extractCSSPlugin = config.plugin("extract-css");
    //     extractCSSPlugin &&
    //         extractCSSPlugin.tap(() => [
    //             {
    //                 filename: "[name].css",
    //                 chunkFilename: "[name].css"
    //             }
    //         ]);
    // }
    /* 
       Disable (or customize) prefetch, see:
       https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch
    */
    // config.plugins.delete("prefetch");

    /* 
       Configure preload to load all chunks
       NOTE: use `allChunks` instead of `all` (deprecated)
    */
    // config.plugin("preload").tap(options => {
    //   options[0].include = "allChunks";
    //   return options;
    // });
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options["transformAssetUrls"] = {
          img: "src",
          image: "xlink:href",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "img-src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        };

        return options;
      });
    config.optimization.minimizer("terser").tap(args => {
      args[0].terserOptions.output = {
        ...args[0].terserOptions.output,
        comments: false // exclude all comments from output
      };
      return args;
    });
  }
};
