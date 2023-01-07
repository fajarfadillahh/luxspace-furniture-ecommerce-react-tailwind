import React from "react";

import SuggestionImg1 from "../../assets/images/content/chair-1.png";
import SuggestionImg2 from "../../assets/images/content/chair-2.png";
import SuggestionImg3 from "../../assets/images/content/chair-3.png";
import SuggestionImg4 from "../../assets/images/content/chair-4.png";

export default function Suggestions() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex-start mb-4 flex">
          <h3 className="text-2xl font-semibold capitalize">
            complete your room <br />
            with what we designed.
          </h3>
        </div>

        <div className="-mx-4 mb-4 flex flex-wrap overflow-x-auto">
          <div className="mb-4 w-full px-3 md:w-3/12">
            <div className="relative rounded-xl bg-white p-4 pb-8">
              <div className="card-shadow h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={SuggestionImg1}
                  className="h-full w-full object-cover object-center"
                  alt="Suggestion Image 1"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>

          <div className="mb-4 w-full px-3 md:w-3/12">
            <div className="relative rounded-xl bg-white p-4 pb-8">
              <div className="card-shadow h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={SuggestionImg2}
                  className="h-full w-full object-cover object-center"
                  alt="Suggestion Image 2"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>

          <div className="mb-4 w-full px-3 md:w-3/12">
            <div className="relative rounded-xl bg-white p-4 pb-8">
              <div className="card-shadow h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={SuggestionImg3}
                  className="h-full w-full object-cover object-center"
                  alt="Suggestion Image 3"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>

          <div className="mb-4 w-full px-3 md:w-3/12">
            <div className="relative rounded-xl bg-white p-4 pb-8">
              <div className="card-shadow h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={SuggestionImg4}
                  className="h-full w-full object-cover object-center"
                  alt="Suggestion Image 4"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
