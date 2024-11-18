import React from 'react';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
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
import BookWithExperts from './Components/BookWithExperts'; // Import new component
import GetQuote from './Components/GetQuote'; // Import new component

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Conditionally render the Header only if not on specific routes */}
      {location.pathname !== '/greenergy-mobility' && 
       location.pathname !== '/greentech-solutions' &&
       location.pathname !== '/greenergy-builders' && 
       location.pathname !== '/greenergy-agritech' &&
       location.pathname !== '/greenergy-industrial' &&
       location.pathname !== '/about' &&
       location.pathname !== '/contact' && 
       location.pathname !== '/book-with-experts' && 
       location.pathname !== '/get-quote' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greenergy-mobility" element={<GreenergyMobility />} />
        <Route path="/greentech-solutions" element={<GreentechSolutions />} />
        <Route path="/greenergy-builders" element={<GreenergyBuilders />} />
        <Route path="/greenergy-agritech" element={<GreenergyAgritech />} />
        <Route path="/greenergy-industrial" element={<GreenergyIndustrial />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/book-with-experts" element={<BookWithExperts />} /> {/* New Route */}
          <Route path="/get-quote" element={<GetQuote />} /> {/* New Route */}
      </Routes>

      {/* Conditionally render the Footer only if not on specific routes */}
      {location.pathname !== '/greenergy-mobility' && 
       location.pathname !== '/greentech-solutions' &&
       location.pathname !== '/greenergy-builders' &&
       location.pathname !== '/greenergy-agritech' &&
       location.pathname !== '/greenergy-industrial' &&
       location.pathname !== '/about' && 
       location.pathname !== '/contact' && 
       location.pathname !== '/book-with-experts' && 
       location.pathname !== '/get-quote' && <Footer />}
    </div>
  );
}

export default App;
