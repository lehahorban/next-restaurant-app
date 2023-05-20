import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Layout from "@/components/Layout";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component className={montserrat.className} {...pageProps} />
    </>
  );
}
