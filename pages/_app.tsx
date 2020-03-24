import '../components/global.css'

import { AppProps } from 'next/app'

type Props = {
  Component: any
  pageProps: AppProps
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}
