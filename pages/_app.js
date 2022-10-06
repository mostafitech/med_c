import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import '../styles/globals.css';
import '../styles/layout.css'
import Bluearea from '../components/bluearea';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Bluearea/>
      <Footer/>
    </>
  );
}

export default MyApp;
