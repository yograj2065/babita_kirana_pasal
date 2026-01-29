import { Header, Hero, About, Products, WhyChooseUs, Gallery, Contact, Footer, Preloader } from './components';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="font-sans antialiased text-dark bg-gray-50 relative overflow-hidden">
      <Preloader />
      <Header />

      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <About />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779807926965"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}

export default App;
