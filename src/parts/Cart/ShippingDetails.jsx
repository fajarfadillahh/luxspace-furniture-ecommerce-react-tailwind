import React from "react";

import CourierImg1 from "../../assets/images/content/courier/courier-1.png";
import CourierImg2 from "../../assets/images/content/courier/courier-2.png";

import PaymentImg1 from "../../assets/images/content/payment/midtrans - payment.png";
import PaymentImg2 from "../../assets/images/content/payment/mastercard - payment.png";
import PaymentImg3 from "../../assets/images/content/payment/bitcoin - payment.png";
import PaymentImg4 from "../../assets/images/content/payment/american express - payment.png";

export default function ShippingDetails() {
  return (
    <div className="w-full px-4 md:w-4/12" id="shipping-detail">
      <div className="bg-gray-100 px-4 py-6 md:rounded-3xl md:p-8">
        <form action="success.html">
          <div className="flex-start mb-6 flex">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="mb-4 flex flex-col">
            <label for="complete-name" className="mb-2 text-sm">
              Complete Name
            </label>
            <input
              data-input
              type="text"
              name=""
              id="complete-name"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your name"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label for="email-address" className="mb-2 text-sm">
              Email Address
            </label>
            <input
              data-input
              type="text"
              name=""
              id="email-address"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your email address"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label for="address" className="mb-2 text-sm">
              Address
            </label>
            <input
              data-input
              type="text"
              name=""
              id="address"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label for="phone-number" className="mb-2 text-sm">
              Phone Number
            </label>
            <input
              data-input
              type="tel"
              name=""
              id="phone-number"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label className="mb-2 text-sm">Choose Courier</label>
            <div className="-mx-2 flex flex-wrap">
              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="fedex"
                  data-name="courier"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={CourierImg1}
                    className="max-h-full object-contain"
                    alt="FedEx courier logo"
                  />
                </button>
              </div>

              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="dhl"
                  data-name="courier"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={CourierImg2}
                    className="max-h-full object-contain"
                    alt="DHL courier logo"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col">
            <label className="mb-2 text-sm">Choose Payment</label>
            <div className="-mx-2 flex flex-wrap">
              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="midtrans"
                  data-name="payment"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={PaymentImg1}
                    className="max-h-full object-contain"
                    alt="Midtrans payment logo"
                  />
                </button>
              </div>

              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="mastercard"
                  data-name="payment"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={PaymentImg2}
                    className="max-h-full object-contain"
                    alt="Mastercard payment logo"
                  />
                </button>
              </div>

              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="bitcoin"
                  data-name="payment"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={PaymentImg3}
                    className="max-h-full object-contain"
                    alt="Bitcoin payment logo"
                  />
                </button>
              </div>

              <div className="mb-4 h-24 w-6/12 px-2">
                <button
                  data-value="american-express"
                  data-name="payment"
                  type="button"
                  className="flex h-full w-full items-center justify-center rounded-xl border border-gray-200 bg-white focus:border-red-200 focus:outline-none"
                >
                  <img
                    src={PaymentImg4}
                    className="max-h-full object-contain"
                    alt="Amerika Express payment logo"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled
              className="w-full rounded-full bg-pink-400 px-6 py-3 text-lg text-black transition-all duration-200 focus:bg-black focus:text-pink-400 focus:outline-none"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
