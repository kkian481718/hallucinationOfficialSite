import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./page/Navbar";
import Footer from "./page/Footer";
import LandingPage from "./page/LandingPage";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
