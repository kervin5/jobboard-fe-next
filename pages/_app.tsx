import React from "react";

import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
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
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${(props) => props.theme.niceBlack}; 
  }
`;
export default function App({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <AdminLayout> */}
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps}></Component>
        </ApolloProvider>
        {/* </AdminLayout> */}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Find Jobs</title>
      </Head>
      {/* <MainLayout> */}
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps}></Component>
      </ApolloProvider>
      {/* </MainLayout> */}
    </ThemeProvider>
  );
}
