import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
        <Component {...pageProps} />
    </main>
  );
}
