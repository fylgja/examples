import * as path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	root: path.resolve(__dirname, "src"),
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
	server: {
		port: 8080,
		host: true,
	},
	plugins: [tailwindcss()],
});
