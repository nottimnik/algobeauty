import "@/styles/globals.css";
import SessionProvider from "@/components/session-provider";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <>
      <Component {...pageProps} />
      <SessionProvider />
    </>
  );
}
