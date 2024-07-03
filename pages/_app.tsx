import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F99FVNWSL1"
      />
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-F99FVNWSL1');
`}
      </Script>

      <Component {...pageProps} />

      <Analytics />
    </>
  );
}

export default MyApp;
