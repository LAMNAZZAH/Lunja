import Layout from "../components/Layout";
import AuthProvider ,{ PrivateRoute } from "../contexts/auth";

import "../styles/globals.scss";
//?NOTE: add global Layouts

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {Component.requireAuth ? (
             <PrivateRoute>
             <Layout>
               <Component {...pageProps} />
             </Layout>
           </PrivateRoute>
           ) : (
            <Layout>
            <Component {...pageProps} />
          </Layout>
           )}
    </AuthProvider>
  );
}

export default MyApp;
