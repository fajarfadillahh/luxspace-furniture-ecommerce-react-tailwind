import React from "react";
import { Link } from "react-router-dom";

import Header from "../parts/Header";
import PageErrorMessage from "../parts/PageErrorMessage";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function NotFound() {
  return (
    <>
      <Header theme="white" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
