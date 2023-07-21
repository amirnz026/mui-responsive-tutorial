import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    mobile: true;
    tablet: true;
    md: true;
    lg: true;
    xl: false;
  }
}
const theme = createTheme({
  typography: {
    fontSize: 16,
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 480,
      md: 700,
      lg: 1024,
    },
  },
});

if (theme.components) {
  theme.components.MuiButton = {
    styleOverrides: {
      root: {
        whiteSpace: "nowrap",
        [theme.breakpoints.down("mobile")]: {
          color: "#f9ed69",
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          color: "#c500bb",
        },
        [theme.breakpoints.up("tablet")]: {
          color: "#f08a5d",
        },
      },
    },
  };
}

export { theme };
