import Head from "next/head";

import Navigation from "../components/Navigation";
import Support from "../components/Support";
import Action from "../components/Action";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen h-full relative overflow-hidden">
            <Head>
                <title>QRCoded (QR Code Generator): Get Support</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Support />
            <Action />
            <Footer />
        </div>
    );
};

export default Home;