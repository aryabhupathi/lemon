import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimony from "./components/Testimony";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimony />
      <About />
      <Footer />
    </>
  );
}
export default App;
