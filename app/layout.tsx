// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ApolloWrapper } from "./apollo-provider";

export const metadata: Metadata = {
  title: "UAQ EventHub",
  description: "Frontend de UAQ EventHub con GraphQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-50">
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
