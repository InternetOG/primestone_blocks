import React from "react";
import suko from "../assets/about/suko_blur.png";
import leye from "../assets/about/leye.png";

const leaders = [
  {
    name: "Olasunkanmi Kufile",
    title: "Founder & Managing Director",
    description:
      "Steers Primestone Blocks’ overall strategy, growth, and commitment to high-standard manufacturing across Lagos.",
    image: suko,
    imageAlt: "Portrait of Olasunkanmi Kufile",
  },
  {
    name: "Omoleye Osadare",
    title: "Head of Production & Quality Control",
    description:
      "Oversees batch testing, raw material selection, and plant operations to ensure every block meets structural standards.",
    image: null,
    imageAlt: "Portrait of Omoleye Osadare",
  },
  // {
  //   name: "Amina Bello",
  //   title: "Operations & Logistics Manager",
  //   description:
  //     "Coordinates site deliveries, order scheduling, and customer support for seamless project execution.",
  //   image: null,
  //   imageAlt: "Portrait of Amina Bello",
  // },
];

const TeamSection = () => {
  return (
    <section
      id="meet-the-team"
      aria-labelledby="team-heading"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a96548]">
            Meet the team
          </p>
          <h2
            id="team-heading"
            className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#030f27] sm:text-4xl"
          >
            Meet the people behind Primestone.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#59616b] sm:text-base">
            From production to on-site delivery, we’re here to help make your
            project run smoothly.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden border border-[#ded7ce] bg-[#f5f0e8]"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#e5ddd2]">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="font-[Montserrat] text-5xl font-bold tracking-wide text-[#a96548]/70"
                  >
                    {leader.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
              </div>

              <div className="border-t-2 border-[#c97d5a] p-5 sm:p-6">
                <h3 className="font-[Montserrat] text-xl font-bold text-[#030f27]">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-5 text-[#a96548]">
                  {leader.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#59616b]">
                  {leader.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
