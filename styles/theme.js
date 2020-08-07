const theme = {
  colors: {
    white: "#F0F0F3",
    dark: "#14111D",
    text: "dark",
    background: "#F0F0F3",
    mojoGreen: "#00ba40",
    modes: {
      dark: {
        text: "white",
        background: "dark",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  buttons: {
    primary: {
      background: "#F0F0F3",
      color: "dark",
      borderRadius: 27,
      boxShadow: "21px 21px 42px #cccccf, -21px -21px 42px #ffffff",
      paddingY: 3,
      ":active": {
        background: "linear-gradient(145deg, #d8d8db, #ffffff)",
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      paddingX: 3,
    },
  },
  styles: {
    root: {
      fontSize: 16,
      fontFamily: "body",
    },
  },
};

export default theme;
