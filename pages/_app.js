import { ThemeProvider } from "theme-ui";
import { Provider } from "next-auth/client";

import theme from "../styles/theme";

const App = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default App;
