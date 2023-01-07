import React from "react";
import { Link } from "react-router-dom";

export default function PageErrorMessage({
  title = "404 NOT FOUND",
  body = "Looks like this page not found",
}) {
  return (
    <section className="py-4 md:py-16">
      <div className="container mx-auto min-h-screen px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center md:w-4/12">
            <h2 className="mb-6 text-3xl font-semibold">{title}</h2>
            <p className="mb-12 text-lg">{body}</p>
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
  );
}
