import { createTheme } from "@mui/material/styles";

const palette = {};

const theme = createTheme({
	palette,
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: { fontSize: "2.5rem", fontWeight: 700 },
		h2: { fontSize: "2rem", fontWeight: 600 },
		h3: { fontSize: "1.75rem", fontWeight: 500 },
		body1: { fontSize: "1rem" },
		body2: { fontSize: "0.875rem", color: "#333333" },
		button: { fontSize: "1rem", fontWeight: 600 },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "8px",
				},
			},
		},
	},
});

export default theme;
