import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient() {
  const isSSR = typeof window === "undefined";
  const authorization = isSSR
    ? ""
    : window?.localStorage?.getItem("token") || "";

  const client = new ApolloClient({
    ssrMode: isSSR,
    uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn",
    credentials: "same-origin",
    cache: new InMemoryCache(),
    headers: {
      authorization,
    },
  });
  return client;
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
