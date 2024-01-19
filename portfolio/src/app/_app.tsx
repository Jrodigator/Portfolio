import { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
 
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main >
      <Component {...pageProps} />
    </main>
  )
}