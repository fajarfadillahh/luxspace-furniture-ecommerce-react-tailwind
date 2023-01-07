import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Homepage/Hero";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import JustArrived from "../parts/Homepage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function Home() {
  useScrollAnchor();
  useModalDOM();

  return (
    <>
      <Header theme="black" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
