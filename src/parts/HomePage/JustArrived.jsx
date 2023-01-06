import React from "react";

import justImage1 from "../../assets/images/content/image just arrived - 1.jpg";
import justImage2 from "../../assets/images/content/image just arrived - 2.jpg";
import justImage3 from "../../assets/images/content/image just arrived - 3.jpg";
import justImage4 from "../../assets/images/content/image just arrived - 4.jpg";
import justImage5 from "../../assets/images/content/image just arrived - 5.jpg";

export default function JustArrived() {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="mb-4 flex justify-center text-center">
          <h3 className="text-2xl font-semibold capitalize">
            just arrived
            <br />
            the summer for you
          </h3>
        </div>
      </div>

      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>

        <div className="relative -mx-4 flex flex-row">
          <div className="card relative px-4">
            <div
              className="card-shadow overflow-x-hidden rounded-xl"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src={justImage1}
                className="h-full w-full object-cover object-center"
                alt="Summer Image 1"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold">Cangkir Mauttie</h5>
            <span className="">IDR 89.300.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className="card relative px-4">
            <div
              className="card-shadow overflow-x-hidden rounded-xl"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src={justImage2}
                className="h-full w-full object-cover object-center"
                alt="Summer Image 2"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold">Bangkyu Minimax</h5>
            <span className="">IDR 65.300.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className="card relative px-4">
            <div
              className="card-shadow overflow-x-hidden rounded-xl"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src={justImage3}
                className="h-full w-full object-cover object-center"
                alt="Summer Image 3"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold">Buku Sidu Edition</h5>
            <span className="">IDR 12.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className="card relative px-4">
            <div
              className="card-shadow overflow-x-hidden rounded-xl"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src={justImage4}
                className="h-full w-full object-cover object-center"
                alt="Summer Image 4"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold">Watch Notes X</h5>
            <span className="">IDR 75.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className="card relative px-4">
            <div
              className="card-shadow overflow-x-hidden rounded-xl"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src={justImage5}
                className="h-full w-full object-cover object-center"
                alt="Summer Image 5"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold">Racking Plants</h5>
            <span className="">IDR 2.400.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
