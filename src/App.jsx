/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    if (e.target.innerHTML === "Add to cart") {
      setCount(count + 1);
      e.target.innerHTML = "Remove";
      e.target.classList.add("opacity-50");
      e.target.classList.remove("opacity-100");
    } else if (e.target.innerHTML === "Remove") {
      setCount(count - 1);
      e.target.innerHTML = "Add to cart";
      e.target.classList.add("opacity-100");
      e.target.classList.remove("opacity-50");
    }
  };





  return (
    <>
      <NavBar
        count={count}
        setCount={setCount}
      />

      <Header />
      <Section
        handleCount={handleCount}

      />
      <Footer />

    </>
  );
}
export default App;