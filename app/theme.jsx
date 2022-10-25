import { blue, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#e7ebf0",
          },
        },
      ],
    },
  },
  palette: {
    primary: blue,
    secondary: purple,
    mode: "dark",
  },
});
