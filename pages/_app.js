import { ThemeProvider } from "theme-ui";
import { Provider } from "next-auth/client";

import Header from "../components/Header";

import theme from "../styles/theme";

const App = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default App;
