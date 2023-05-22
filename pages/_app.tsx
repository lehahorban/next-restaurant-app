import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          type="image/png"
          rel="icon"
          href="/images/favicon.png"
          sizes="16x16"
        />
      </Head>
      <Component className={montserrat.className} {...pageProps} />
    </>
  );
}
