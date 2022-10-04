import type { AppProps } from "next/app";

import Head from "next/head";

import { HeaderComp } from "../components/HeaderComp";

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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComp />
            <Component {...pageProps} />
        </>
    );
}

export default App;
