/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// fontFamily: {
			// 	mont: ["var(--font-mont)"],
			// },
			// colors: {
			// 	blue_gray: "#DAE2E7",
			// 	blue_grotto: "#025492",
			// 	blue_navy: "#003B73",
			// 	blue_royal: "#0074B7",
			// 	cognac: "#C39D99",
			// 	gold: "#F8CF40",
			// 	white: "#f5f5f5",
			// },
		},
	},
	plugins: [],
};
