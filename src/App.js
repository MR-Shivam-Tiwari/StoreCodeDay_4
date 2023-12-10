import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProductExplore from './Components/ExplorePage/ProductExplore';
import TravelExplore from './Components/ExplorePage/TravelExplore';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product-guide-page" element={<ProductExplore />} />
        <Route path="/travel-guide-page" element={<TravelExplore />} />
      </Routes>
    </Router>
  );
};

export default App;
