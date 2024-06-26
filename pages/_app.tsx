import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress';

function MyApp({ Component, pageProps }: AppProps) {

  const progress = new ProgressBar({
    size: 1,
    color: "#FD5B61",
    className: "z-index",
    delay: 100
  })

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return <Component {...pageProps} />
}

export default MyApp
