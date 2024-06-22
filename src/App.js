import React, { useState } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Lightbox from "./components/Lightbox";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Gallery':
        return <Gallery />;
      case 'Lightbox':
        return <Lightbox />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
