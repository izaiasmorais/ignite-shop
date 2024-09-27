import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				linearion: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				product: {
					principal: "#00875F",
					light: "#00B37E",
				},
				gray: {
					900: "#121214",
					800: "#202024",
					300: "c4c4cc",
				},
				green: {
					500: "#00875f",
					300: "#00b37e",
				},
			},
		},
	},
	plugins: [],
};

export default config;
