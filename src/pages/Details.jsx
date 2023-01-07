import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";

import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Details() {
  return (
    <>
      <Header theme="white" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/87352", name: "Office Room" },
          { url: "/categories/87352/products/28741", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
