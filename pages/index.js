import Head from 'next/head';

import Navigation from '../components/Navigation';
import Generator from '../components/Generator/Generator';
import Information from '../components/Information';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen h-full relative">
      <Head>
        <title>QRCoded (QR Code Generator): Direct Users To Your Website Quickly And Simply.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Generator />
      <Information />
      <Action />
      <Footer />
    </div>
  );
};

export default Home;