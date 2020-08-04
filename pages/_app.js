import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
