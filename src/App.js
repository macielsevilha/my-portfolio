import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderLayout from './components/layout-app/Header';
import Home from './pages/Home';
import Sobre from './pages/sobre';

function App() {
  return (
    <div className="App">
      <section className='Header-layout'>
        <HeaderLayout />
      </section>
      <section className='Main-layout'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Home />} />
          <Route path="/projetos" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </Router>
      </section>

    
    </div>
  );
}

export default App;
