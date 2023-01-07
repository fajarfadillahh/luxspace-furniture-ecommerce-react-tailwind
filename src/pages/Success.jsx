import React from "react";
import { Link } from "react-router-dom";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import SuccessImg from "../assets/images/content/success-image.png";

export default function Success() {
  return (
    <>
      <Header theme="white" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/success", name: "Success Checkout" },
        ]}
      />

      <section className="py-4 md:py-16">
        <div className="container mx-auto min-h-screen px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full text-center md:w-4/12">
              <img src={SuccessImg} alt="Success Image" />
              <h2 className="mb-6 text-3xl font-semibold">
                Ah yess it's success!
              </h2>
              <p className="mb-12 text-lg">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <Link
                to="/"
                className="w-full rounded-full bg-red-200 py-3 px-8 text-lg text-gray-900 transition duration-200 focus:text-black focus:outline-none"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
