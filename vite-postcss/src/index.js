import fontSizes from "@fylgja/fonts";
import sizes from "@fylgja/sizes";
const { fontSize, lineHeight } = fontSizes;

console.log({
    sizes: sizes.size[11],
    lineHeight: lineHeight[1],
});

document.documentElement.style.setProperty("--font-size", fontSize[3]);
