import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Lore from "./pages/Lore";
import Commandes from "./pages/Commandes";
import Faq from "./pages/Faq";
import Reseaux from "./pages/Reseaux";
import Vote from "./pages/Vote"
import Galerie from "./pages/Galerie";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reglement" element={<Rules />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/commandes-ig" element={<Commandes />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/reseaux" element={<Reseaux />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
