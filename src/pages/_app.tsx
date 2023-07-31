// pages/_app.tsx
import { AppProps } from "next/app";

import GlobalStyle from "@/globalStyles";
import Layout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
