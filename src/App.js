import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes'; // Import AnimatedRoutes



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;