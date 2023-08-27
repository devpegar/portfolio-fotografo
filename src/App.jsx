import Header from "./components/Header";
import About from "./components/About";
import TrabajosRecientes from "./components/TrabajosRecientes";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <About />
      <TrabajosRecientes />
      <Portfolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
