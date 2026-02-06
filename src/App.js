import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Founder from './pages/Founder';
import TamilarStartup from './pages/TamilarStartup'; // Re-import
import Album from './pages/Album';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if not a hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Founder />} />
          <Route path="/tamilar-startup" element={<TamilarStartup />} />
          <Route path="/album" element={<Album />} />
          <Route path="/old-home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
