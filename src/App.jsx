import React, { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import Flat from "./pages/Flat";
import Reels from "./pages/Reels";
import Films from "./pages/Films";
import Art from "./pages/Art";
// import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Hero data={landingPageData.Header} />} />
        <Route path="/Flat" element={<Flat />} />
        <Route path="/Reels" element={<Reels />} />
        <Route path="/Films" element={<Films />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
      {/* <Nav />
      <Hero data={landingPageData.Header} /> */}
    </div>
  );
};

export default App;
