import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "'Barlow Semi Condensed', sans-serif",
        },
      },
    },
  },
});

export default theme;
