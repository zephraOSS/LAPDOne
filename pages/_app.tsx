import type { AppProps } from "next/app";

import Head from "next/head";

import { HeaderComp } from "../components/HeaderComp";
import { FooterComp } from "../components/FooterComp";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>LAPD One</title>
                <meta
                    name="description"
                    content="Test if you're qualified to join the LAPD"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="36x36"
                    href="/favicon/favicon-36x36.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon/favicon-96x96.png"
                />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon/favicon.ico"
                />
                <link rel="manifest" href="/static/manifest.json" />
            </Head>
            <HeaderComp />
            <Component {...pageProps} />
            <FooterComp />
        </>
    );
}

export default App;
