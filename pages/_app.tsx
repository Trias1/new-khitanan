import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/navbar.css";
import "../styles/modal.css";
import "../styles/keterangan.css";
import "../styles/invitations.css";
import "../styles/calonpasangan.css";
import "../styles/weadingloaction.css";
import "../styles/maps.css";
import "../styles/gallery.css";
import "../styles/amplop.css";
import "../styles/keamanan.css";
import "../styles/footer.css";
import "../styles/comment.css";
import "../styles/untilities.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Khitanan Wira Al Kahfi</title>
        <meta name="description" content="Khitanan Wira Al Kahfi" />
        <link rel="icon" href="/favicon.ico" />
        {/* Boostrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />

        {/* Call Boostrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel&family=Great+Vibes&family=Merriweather&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playball&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
