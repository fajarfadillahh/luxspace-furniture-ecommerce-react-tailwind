import React from "react";

import ChairImg1 from "../../assets/images/content/suggestion image-1.jpg";
import ChairImg2 from "../../assets/images/content/suggestion image-2.jpg";
import ChairImg3 from "../../assets/images/content/suggestion image-3.jpg";

export default function ShoppingCart() {
  return (
    <div className="mb-4 w-full px-4 md:mb-0 md:w-8/12" id="shopping-cart">
      <div className="flex-start mb-4 mt-8 flex border-b border-gray-200 pb-3 md:border-b-0">
        <h3 className="text-2xl capitalize">shopping cart</h3>
      </div>

      <div className="mb-4 hidden border-b border-gray-200 md:block">
        <div className="flex-start -mx-4 flex items-center pb-2">
          <div className="flex-none px-4">
            <div className="" style={{ width: "90px" }}>
              <h6>Photo</h6>
            </div>
          </div>

          <div className="w-5/12 px-4">
            <div className="">
              <h6>Product</h6>
            </div>
          </div>

          <div className="w-5/12 px-4">
            <div className="">
              <h6>Price</h6>
            </div>
          </div>

          <div className="w-2/12 px-4">
            <div className="text-center">
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>

      <p id="cart-empty" className="hidden py-8 text-center">
        Ooopppp..... Cart is empty
        <a href="details.html" className="underline">
          Shop Now
        </a>
      </p>

      <div
        className="flex-start -mx-4 mb-4 flex flex-wrap items-center"
        data-row="1"
      >
        <div className="flex-none px-4">
          <div className="" style={{ width: "90px", height: "90px" }}>
            <img
              src={ChairImg1}
              className="h-full w-full rounded-xl object-cover"
              alt="Image Chair 1"
            />
          </div>
        </div>

        <div iv className="w-auto flex-1 px-4 md:w-5/12">
          <div className="">
            <h6 className="text-lg font-semibold leading-8 md:text-xl">
              Saman Kakka
            </h6>
            <span className="text-sm capitalize md:text-lg">office room</span>
            <h6 className="block text-base font-semibold md:hidden md:text-lg">
              IDR 28.000.000
            </h6>
          </div>
        </div>

        <div className="hidden w-auto flex-none px-4 md:block md:w-5/12 md:flex-1">
          <div className="">
            <h6 className="text-lg font-semibold">IDR 28.000.000</h6>
          </div>
        </div>

        <div className="w-2/12 px-4">
          <div className="text-center">
            <button
              data-delete-item="1"
              className="border-none px-3 py-1 text-red-600 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex-start -mx-4 mb-4 flex flex-wrap items-center"
        data-row="2"
      >
        <div className="flex-none px-4">
          <div className="" style={{ width: "90px", height: "90px" }}>
            <img
              src={ChairImg2}
              className="h-full w-full rounded-xl object-cover"
              alt="Image Chair 2"
            />
          </div>
        </div>

        <div className="w-auto flex-1 px-4 md:w-5/12">
          <div className="">
            <h6 className="text-lg font-semibold leading-8 md:text-xl">
              Green Seat
            </h6>
            <span className="text-sm capitalize md:text-lg">office room</span>
            <h6 className="block text-base font-semibold md:hidden md:text-lg">
              IDR 12.500.000
            </h6>
          </div>
        </div>

        <div className="hidden w-auto flex-none px-4 md:block md:w-5/12 md:flex-1">
          <div className="">
            <h6 className="text-lg font-semibold">IDR 12.500.000</h6>
          </div>
        </div>

        <div className="w-2/12 px-4">
          <div className="text-center">
            <button
              data-delete-item="2"
              className="border-none px-3 py-1 text-red-600 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex-start -mx-4 mb-4 flex flex-wrap items-center"
        data-row="3"
      >
        <div className="flex-none px-4">
          <div className="" style={{ width: "90px", height: "90px" }}>
            <img
              src={ChairImg3}
              className="h-full w-full rounded-xl object-cover"
              alt="Image Chair 3"
            />
          </div>
        </div>

        <div className="w-auto flex-1 px-4 md:w-5/12">
          <div className="">
            <h6 className="text-lg font-semibold leading-8 md:text-xl">
              Pacific
            </h6>
            <span className="text-sm capitalize md:text-lg">office room</span>
            <h6 className="block text-base font-semibold md:hidden md:text-lg">
              IDR 88.800.000
            </h6>
          </div>
        </div>

        <div className="hidden w-auto flex-none px-4 md:block md:w-5/12 md:flex-1">
          <div className="">
            <h6 className="text-lg font-semibold">IDR 88.800.000</h6>
          </div>
        </div>

        <div className="w-2/12 px-4">
          <div className="text-center">
            <button
              data-delete-item="3"
              className="border-none px-3 py-1 text-red-600 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
