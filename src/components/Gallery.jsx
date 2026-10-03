import React from "react";
import { Link } from "react-router";
import galleryImageOne from "../assets/hero_section/1.jpg";
import galleryImageTwo from "../assets/hero_section/2.jpg";
import galleryImageThree from "../assets/hero_section/3.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: galleryImageOne, alt: "PrimeStone construction photo 1" },
    { src: galleryImageTwo, alt: "PrimeStone construction photo 2" },
    { src: galleryImageThree, alt: "PrimeStone construction photo 3" },
  ];
  return (
    <section
      id="project-gallery"
      aria-labelledby="gallery-heading"
      className="bg-[#f5f0e8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a96548]">
              Project gallery
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#030f27] sm:text-4xl"
            >
              Concrete for work that matters.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#59616b] sm:text-base">
              A closer look at the construction scenes and materials connected
              to the work we support.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 self-start border-b border-[#c97d5a] pb-1 text-sm font-semibold text-[#030f27] transition-colors hover:text-[#a96548] sm:self-auto"
          >
            Discuss your project <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <figure className="group relative min-h-64 overflow-hidden bg-[#d7d1c8] md:col-span-7 md:row-span-2 md:min-h-128">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#030f27]/80 to-transparent px-5 pb-5 pt-16 text-sm font-medium text-white sm:px-7 sm:pb-7">
              Construction in focus
            </figcaption>
          </figure>

          {galleryImages.slice(1).map((image, index) => (
            <figure
              key={image.src}
              className="group relative min-h-56 overflow-hidden bg-[#d7d1c8] md:col-span-5 md:min-h-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#030f27]/80 to-transparent px-5 pb-5 pt-14 text-sm font-medium text-white">
                {index === 0 ? "Building materials" : "Work on site"}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
