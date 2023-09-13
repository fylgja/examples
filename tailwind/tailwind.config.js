const colors = require("@fylgja/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    lighter: colors.purple[3],
                    DEFAULT: colors.purple[6],
                    darker: colors.purple[9],
                    on: colors.purple[0],
                },
            },
        },
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
};
