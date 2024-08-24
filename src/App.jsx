import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Atracoes from "./pages/Atracoes/Atracoes";
import Pagamento from "./pages/Pagamento/Pagamento";




function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atracoes" element={<Atracoes />} />
            <Route path="/pagamento" element={<Pagamento />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
