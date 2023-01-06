import React from "react";
import { Link } from "react-router-dom";

import CatalogImage1 from "../../assets/images/content/image-catalog-1.jpg";
import CatalogImage2 from "../../assets/images/content/image-catalog-2.jpg";
import CatalogImage3 from "../../assets/images/content/image-catalog-3.jpg";
import CatalogImage4 from "../../assets/images/content/image-catalog-4.jpg";

export default function BrowseRoom() {
  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex-start mb-4 flex">
          <h3 className="text-2xl font-semibold capitalize">
            browse the room <br />
            that we designed for you
          </h3>
        </div>

        <div className="grid grid-cols-9 grid-rows-2 gap-4">
          <div
            className="card relative col-span-9 row-span-1 md:col-span-4"
            style={{ height: "180px" }}
          >
            <div className="card-shadow rounded-xl">
              <img
                src={CatalogImage1}
                className="overlay h-full w-full overflow-hidden rounded-xl object-cover"
                alt="Image Catalog 1"
              />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex flex-col justify-center pl-48 md:pl-72">
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18.309 items</span>
            </div>
            <Link to="/categories/87352" className="stretched-link">
              {/* <!-- fake children --> */}
            </Link>
          </div>

          <div className="card relative col-span-9 row-span-1 md:col-span-2 md:row-span-2">
            <div className="card-shadow rounded-xl">
              <img
                src={CatalogImage3}
                className="overlay h-full w-full overflow-hidden rounded-xl object-cover"
                alt="Image Catalog 2"
              />
            </div>
            <div className="overlay inset-0 flex flex-col justify-center pl-48 pt-0 md:bottom-auto md:items-center md:pl-0 md:pt-12">
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            <Link to="/categories/87352" className="stretched-link">
              {/* <!-- fake children --> */}
            </Link>
          </div>

          <div className="card relative col-span-9 row-span-1 md:col-span-3 md:row-span-2">
            <div className="card-shadow rounded-xl">
              <img
                src={CatalogImage4}
                className="overlay h-full w-full overflow-hidden rounded-xl object-cover"
                alt="Image Catalog 3"
              />
            </div>
            <div className="overlay inset-0 flex flex-col justify-center pl-48 pt-0 md:bottom-auto md:items-center md:pl-0 md:pt-12">
              <h5 className="text-lg font-semibold">Bed Room</h5>
              <span className="">22.094 items</span>
            </div>
            <Link to="/categories/87352" className="stretched-link">
              {/* <!-- fake children --> */}
            </Link>
          </div>

          <div className="card relative col-span-9 row-span-1 md:col-span-4">
            <div className="card-shadow rounded-xl">
              <img
                src={CatalogImage2}
                className="overlay h-full w-full overflow-hidden rounded-xl object-cover"
                alt="Image Catalog 4"
              />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex flex-col justify-center pl-48 md:pl-72">
              <h5 className="text-lg font-semibold">Children Room</h5>
              <span className="">807 items</span>
            </div>
            <Link to="/categories/87352" className="stretched-link">
              {/* <!-- fake children --> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
