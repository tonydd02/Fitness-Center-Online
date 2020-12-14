import { Provider } from 'next-auth/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    import("jquery").then($ => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
