import Layout from '../components/Layout'; 

import '../styles/globals.scss'
//?NOTE: add global Layouts 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
