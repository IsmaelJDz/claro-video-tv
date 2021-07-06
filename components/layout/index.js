import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

/**
 *
 * @param {*} param0 children main layout
 */

const Home = ({ children }) => {
  return (
    <>
      <Head>
        <title>Clarovideo</title>
        <meta name="description" content="watch the best series and movies" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Home;
