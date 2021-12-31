import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavigationBar from '../components/ui/NavigationBar';
import Footer from '../components/ui/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}

export default MyApp
