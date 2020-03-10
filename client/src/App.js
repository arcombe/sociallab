import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Create from './components/Create/Create';
import Share from './components/Share/Share';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div data-spy="scroll" data-target="#main-nav" data-offset="0">
        <Home />
        <Explore />
        <Create />
        <Share />
      </div>
      <Footer />
    </div>
  );
}

export default App;
