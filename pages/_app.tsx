import React, { ComponentClass } from "react";
import Head from "next/head";
import DefaultLayout from "@/components/layout/dafault";
import AdminLayout from "@/components/layout/admin";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apolloClient";
// import MainLayout from "@/compmponents/layout/main";
// import AdminLayout from "@/compmponents/layout/admin";

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

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
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

  const PageLayout = getPageLayoutComponent(
    router.pathname,
    DefaultLayout,
    AdminLayout
  );

  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <Head>
          <title>Find Jobs</title>
        </Head>
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <PageLayout>
            <Component {...pageProps}></Component>
          </PageLayout>
        </ApolloProvider>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}

function getPageLayoutComponent(
  route: string,
  defaultLayout: React.FC,
  adminLayout: React.FC
) {
  return route.startsWith("/admin") ? adminLayout : defaultLayout;
}
