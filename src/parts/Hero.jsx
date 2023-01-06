import React from "react";

import ImageHero from "../assets/images/content/image-hero.jpg";

export default function Hero() {
  return (
    <section className="hero flex items-center">
      <div className="hero-caption absolute inset-0 z-20 flex w-full flex-col justify-center text-center md:relative md:w-1/2">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          The Room <br />
          You've Dreaming
        </h1>
        <h2 className="my-6 px-8 text-base tracking-wide md:px-0 md:text-lg">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="mt-4 inline-block flex-none rounded-full bg-pink-400 px-8 py-3 text-black transition duration-150 hover:bg-black hover:text-pink-400"
          >
            Explore Now
          </a>
        </div>
      </div>

      <div className="inset-0 w-full md:relative md:w-1/2">
        <div className="hero-image relative">
          <div className="overlay inset-0 z-10 bg-black opacity-30"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta modal-trigger z-30 focus:outline-none"
              data-content='<div className="w-screen pb-56 md:w-88 relative z-50">
              <div className="absolute w-full h-full">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MHjycTZ101o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-center md:relative"
            src={ImageHero}
            alt="House with sofa and some plants"
          />
        </div>
      </div>
    </section>
  );
}
