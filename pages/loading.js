import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Loading from "../components/Generator/Loading";

const Home = () => {
    return (
        <div>
            <Head>
                <title>QRCoded (QR Code Generator): Get Support</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Loading />
            <Footer />
        </div>
    );
};

export default Home;