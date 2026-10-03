import React from "react";
// import sixInchImage from "./src/assets/hero_section/products/6inch.png";
// import nineInchImage from "./src/assets/hero_section/products/9inch.png";
import { Link } from "react-router";
import sixxinch from '../assets/products/sixinch.png'
import nineinch from '../assets/products/nineinch.png'



const products = [
  {
    id: "six-inch",
    image: sixxinch,
    imageAlt: "PrimeStone concrete block production and construction work",
    category: "Standard Construction",
    name: "6-inch concrete blocks",
    heading: "Dependable everyday strength",
    description:
      "A practical choice for walls and a wide range of building projects. Ask us about availability and quantities.",
  },
  {
    id: "nine-inch",
    image: nineinch,
    imageAlt: "Concrete building materials for robust construction",
    category: "Heavy-Duty Construction",
    name: "9-inch concrete blocks",
    heading: "Built for substantial walls",
    description:
      "Explore a heavier block option for projects that call for added wall thickness. Contact us to discuss your requirements.",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="bg-[#f5f0e8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a96548]">
              Our products
            </p>
            <h2
              id="products-heading"
              className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#030f27] sm:text-4xl"
            >
              A solid start for every build.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#4d5662] sm:text-base">
              Choose dependable concrete blocks for your project, backed by a
              team ready to help with enquiries and supply.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 self-start border-b border-[#c97d5a] pb-1 text-sm font-semibold text-[#030f27] transition-colors hover:text-[#a96548] sm:self-auto"
          >
            Talk to our team <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden border border-[#ded7ce] bg-white"
            >
              <div className="relative flex justify-center  bg-[#d7d1c8]">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-117.5 w-[50%] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 bg-[#030f27]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {product.category}
                </span>
              </div>
              <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a96548]">
                    {product.name}
                  </p>
                  <h3 className="mt-2 font-[Montserrat] text-2xl font-bold text-[#030f27]">
                    {product.heading}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[#59616b]">
                    {product.description}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center bg-[#030f27] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#a96548]"
                >
                  Request a quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 bg-[#030f27] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d69a7f]">
              Delivery available
            </p>
            <h3 className="mt-2 font-[Montserrat] text-xl font-bold sm:text-2xl">
              Need blocks brought to your site?
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Contact our team with your location and quantity to discuss
              delivery arrangements for your project.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center border border-white/35 px-5 text-sm font-semibold text-white transition-colors hover:border-[#c97d5a] hover:bg-[#c97d5a]"
          >
            Ask about delivery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;