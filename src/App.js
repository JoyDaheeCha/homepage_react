import React from "react";
import "./App.css";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Products from "./Components/Products";
import News from "./Components/News";
import Channel from "./Components/Channel";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Products />
      <News />
      <Channel />
      <Footer />
    </div>
  );
}

export default App;
