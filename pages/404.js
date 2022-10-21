import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
                <title>QRCoded (QR Code Generator): 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className="mx-auto flex items-center justify-center py-20 px-10 bg-yellow-50">
                <h1 className="text-6xl leading-normal font-bold text-center">404</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Home;