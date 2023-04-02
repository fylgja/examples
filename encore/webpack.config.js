const Encore = require("@symfony/webpack-encore");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("dist")
    .setPublicPath("/dist")

    .addEntry("app", "./src/index.js")

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .enableSassLoader((options) => {
        options.sourceMap = true;
        options.sassOptions = {
            outputStyle: "compressed",
            includePaths: ["node_modules"],
        };
    }, {});

module.exports = Encore.getWebpackConfig();
