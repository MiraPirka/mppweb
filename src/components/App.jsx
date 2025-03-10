import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
