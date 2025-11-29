"use client";


import { ReactNode } from "react";
import { client } from "./lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";


export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
