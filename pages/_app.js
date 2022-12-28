import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Nav from "../components/home/Nav";
import Footer from "../components/home/Footer";
import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
      <Script nomodule  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
  
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
