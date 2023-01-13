import { Wallpoet } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { PRIMARY_COLOR } from "./constants";

export const font = Wallpoet({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: PRIMARY_COLOR,
			dark: "#ffffff80",
			light: "#fff",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: font.style.fontFamily,
	},
});

export default theme;
