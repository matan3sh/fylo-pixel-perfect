import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Team from './components/Pages/Team';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Team />
      <Footer />
    </>
  );
}

export default App;
