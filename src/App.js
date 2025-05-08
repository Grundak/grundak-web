import './App.css';
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      {/* Horní lišta */}
      <Header />

      {/* Sekce Intro */}
      <Intro />

      {/* Sekce Služby */}
      <section id="services" className="section">
        <h2>Služby</h2>
        <p>Nabízím tvorbu moderních webových stránek, optimalizaci a údržbu.</p>
      </section>

      {/* Sekce Portfolio */}
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <p>Zde budou ukázky mých projektů.</p>
      </section>

      {/* Sekce Kontakt */}
      <section id="contact" className="section">
        <h2>Kontakt</h2>
        <p>Kontaktujte mě pomocí formuláře níže.</p>
      </section>

      {/* Patička */}
      <footer className="App-footer">
        <p>&copy; 2025 Webový vývojář. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}

export default App;