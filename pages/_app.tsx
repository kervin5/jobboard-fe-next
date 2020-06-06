import React, { ComponentClass } from "react";
import Head from "next/head";
import DefaultLayout from "../components/layout/dafault";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
// import MainLayout from "../components/layout/main";
// import AdminLayout from "../components/layout/admin";

export interface ITheme {
  niceBlack: string;
  primary: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  ...createMuiTheme(),
  niceBlack: "#001F3F",
  primary: "green",
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
export default function App({
  Component,
  pageProps,
  router,
}: {
  Component: ComponentClass;
  pageProps: any;
  router: any;
}) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
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
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <DefaultLayout>
            <Component {...pageProps}></Component>
          </DefaultLayout>
        </ApolloProvider>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}
