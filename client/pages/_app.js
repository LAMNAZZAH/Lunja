import Layout from "../components/Layout";
import AuthProvider from '../contexts/auth';

import "../styles/globals.scss";
//?NOTE: add global Layouts

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
