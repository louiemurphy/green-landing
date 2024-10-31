import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';  // Import useLocation hook
import Header from './Components/Header';
import Footer from './Components/Footer';
import GreenergyMobility from './Components/GreenergyMobility';
import GreentechSolutions from './Components/GreentechSolutions';
import GreenergyBuilders from './Components/GreenergyBuilders';
import GreenergyAgritech from './Components/GreenergyAgritech';
import GreenergyIndustrial from './Components/GreenergyIndustrial';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  const location = useLocation();  // Hook to get the current route

  return (
    <div className="App">
      {/* Conditionally render the Header only if not on specific routes */}
      {location.pathname !== '/greenergy-mobility' && 
       location.pathname !== '/greentech-solutions' &&
       location.pathname !== '/greenergy-builders' && 
       location.pathname !== '/greenergy-agritech' &&
       location.pathname !== '/greenergy-industrial' &&
       location.pathname !== '/about' &&
       location.pathname !== '/contact' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Greenergy Solar is removed because it's an external link */}
        <Route path="/greenergy-mobility" element={<GreenergyMobility />} />
        <Route path="/greentech-solutions" element={<GreentechSolutions />} />
        <Route path="/greenergy-builders" element={<GreenergyBuilders />} />
        <Route path="/greenergy-agritech" element={<GreenergyAgritech />} />
        <Route path="/greenergy-industrial" element={<GreenergyIndustrial />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Conditionally render the Footer only if not on specific routes */}
      {location.pathname !== '/greenergy-mobility' && 
       location.pathname !== '/greentech-solutions' &&
       location.pathname !== '/greenergy-builders' &&
       location.pathname !== '/greenergy-agritech' &&
       location.pathname !== '/greenergy-industrial' &&
       location.pathname !== '/about' && 
       location.pathname !== '/contact' && <Footer />}
    </div>
  );
}

export default App;