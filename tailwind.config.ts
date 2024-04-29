import scrollbars from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./src/**/*.{ts,tsx,css,svg,md,mdx}", "./docs/**/*.{md,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-open-sans)", ...fontFamily.sans],
			},

			screens: {
				xs: "475px",
			},

			boxShadow: {
				"dim-inner": "0px 0px 10px 0px #00000080 inset",
			},

			colors: {
				background: "#171717",
				white: "#e2e2e2",
				blurple: "#5865f2",
				primary: "#ff7077",

				darker: "#1e1f22",

				"light-gray": "#474747",
				"dark-gray": "#232323",

				red: { ...colors.red, DEFAULT: "#df4444" },
				yellow: { ...colors.yellow, DEFAULT: "#fbb748" },
				green: { ...colors.green, DEFAULT: "#3ea25e" },
			},

			backgroundImage: {
				"gradient-radial": "linear-gradient(92.52deg, #FF7077 0%, #FFE87C 100%)",
				"gradient-radial-hover": "linear-gradient(93deg, #FFE87C 0%, #804994 100%)",

				"gradient-lurkr-max":
					"linear-gradient(90deg, rgba(170,214,198,1) 1%, rgba(250,144,121,1) 33%, rgba(252,201,83,1) 66%, rgba(116,218,156,1) 100%)",
				"gradient-lurkr-ultimate":
					"linear-gradient(90deg, rgba(162,251,236,1) 1%, rgba(249,133,255,1) 33%, rgba(144,77,255,1) 66%, rgba(77,84,254,1) 100%)",

				patreon: "linear-gradient(93.24deg, #FF424D 0%, #FF7077 100%)",
			},

			backgroundSize: {
				"size-10": "10px 10px",
			},

			textShadow: {
				regular: "1.5px 1.5px 0px rgba(0, 33, 66, 0.95)",
			},

			dropShadow: {
				regular: "1.5px 1.5px 0px rgba(0, 33, 66, 0.95)",
			},

			fill: {
				"icon-gradient-primary": "url(#icon-gradient-primary)",
				"icon-gradient-tertiary": "url(#icon-gradient-tertiary)",
			},

			keyframes: {
				"pulse-success": {
					"0%, 100%": {
						backgroundColor: "rgba(62, 162, 94, 1)",
					},
					"50%": {
						backgroundColor: "rgba(62, 162, 94, 0.6)",
					},
				},
			},

			animation: {
				"pulse-success": "pulse-success 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
	},
	plugins: [
		scrollbars({ nocompatible: true }),

		// https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
		plugin(({ matchUtilities, theme }) => {
			matchUtilities({ "text-shadow": (value) => ({ textShadow: value }) }, { values: theme("textShadow") });
		}),

		plugin(({ addVariant, e: escapeClass }) => {
			// @ts-expect-error: Tailwind types are wrong
			addVariant("slider-thumb", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }: { className: string }) => {
					return `.${escapeClass(`slider-thumb${separator}${className}`)}::-webkit-slider-thumb, .${escapeClass(
						`slider-thumb${separator}${className}`,
					)}::-moz-range-thumb`;
				});
			});
		}),
	],
} satisfies Config;
