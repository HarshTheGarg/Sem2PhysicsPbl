// Import react and Hooks
import React, { useEffect, useState } from "react";

// Import Components
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// Import style
import "../assets/style.css"

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};

export default App;
