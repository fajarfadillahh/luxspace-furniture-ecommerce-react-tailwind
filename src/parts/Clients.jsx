import React from "react";

import PartnerImage1 from "../assets/images/content/partner - 1.jpg";
import PartnerImage2 from "../assets/images/content/partner - 2.jpg";
import PartnerImage3 from "../assets/images/content/partner - 3.jpg";
import PartnerImage4 from "../assets/images/content/partner - 4.jpg";

export default function Clients() {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        <div className="my-4 h-full w-full flex-auto px-4 md:my-0 md:w-auto md:flex-initial md:px-6">
          <img
            src={PartnerImage1}
            className="mx-auto"
            alt="Partner Image - 1"
          />
        </div>

        <div className="my-4 h-full w-full flex-auto px-4 md:my-0 md:w-auto md:flex-initial md:px-6">
          <img
            src={PartnerImage2}
            className="mx-auto"
            alt="Partner Image - 2"
          />
        </div>

        <div className="my-4 h-full w-full flex-auto px-4 md:my-0 md:w-auto md:flex-initial md:px-6">
          <img
            src={PartnerImage3}
            className="mx-auto"
            alt="Partner Image - 3"
          />
        </div>

        <div className="my-4 h-full w-full flex-auto px-4 md:my-0 md:w-auto md:flex-initial md:px-6">
          <img
            src={PartnerImage4}
            className="mx-auto"
            alt="Partner Image - 4"
          />
        </div>
      </div>
    </section>
  );
}
