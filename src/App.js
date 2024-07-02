import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Lightbox from "./components/Lightbox";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> {/* Routes is the new Switch component in react-router-dom v6 */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/lightbox" element={<Lightbox />} />
        <Route path="/contact" element={<Contact />} /> 
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
