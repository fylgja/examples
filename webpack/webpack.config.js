const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: ["node_modules"],
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
        ],
    },
    stats: {
        loggingDebug: ["sass-loader"],
    },
};
