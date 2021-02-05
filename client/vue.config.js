const path = require("path");

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
    chainWebpack: config => {
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
    }
};
