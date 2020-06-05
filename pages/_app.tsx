import React from "react";

import Head from "next/head";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../lib/apolloClient";
// import MainLayout from "../components/layout/main";
// import AdminLayout from "../components/layout/admin";

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
  ...createMuiTheme(),
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`

`;
export default function App({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // if (router.pathname.startsWith("/dashboard")) {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <GlobalStyle />
  //       {/* <AdminLayout> */}
  //       <ApolloProvider client={apolloClient}>
  //         <Component {...pageProps}></Component>
  //       </ApolloProvider>
  //       {/* </AdminLayout> */}
  //     </ThemeProvider>
  //   );
  // }

  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <Head>
          <title>Find Jobs</title>
        </Head>
        {/* <MainLayout> */}
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps}></Component>
        </ApolloProvider>
        {/* </MainLayout> */}
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}
