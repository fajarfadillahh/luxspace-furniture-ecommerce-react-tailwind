import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/HomePage/JustArrived";

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <JustArrived />
    </>
  );
}
