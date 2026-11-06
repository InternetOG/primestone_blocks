import React from "react";
import { FaArrowRight, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    label: "Call us",
    value: "(+234) 815 354 4441",
    href: "tel:+2348153544441",
    icon: FaPhone,
  },
  {
    label: "Mobile",
    value: "(+234) 912 815 9045",
    href: "tel:+2349128159045",
    icon: FaPhone,
  },
  {
    label: "Email us",
    value: "primestoneblocks@gmail.com",
    href: "mailto:primestoneblocks@gmail.com",
    icon: MdEmail,
  },
];

const fieldClassName =
  "mt-2 min-h-12 w-full border border-[#d9d0c5] bg-white px-4 py-3 text-sm text-[#030f27] outline-none transition placeholder:text-[#7b818a] focus:border-[#c97d5a] focus:ring-2 focus:ring-[#c97d5a]/20";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Block enquiry from ${formData.get("name")}`;
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Block type: ${formData.get("blockType")}`,
      `Quantity: ${formData.get("quantity") || "Not provided"}`,
      `Delivery location: ${formData.get("location") || "Not provided"}`,
      "",
      "Project details:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:primestoneblocks@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#030f27] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d69a7f]">
            Contact Primestone
          </p>
          <h1 className="mt-3 max-w-3xl font-[Montserrat] text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
            Let’s talk about your project.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Ask us about 6-inch or 9-inch blocks, quantities, and delivery to
            your site. We’re here to help you plan your order.
          </p>
        </div>
      </section>

      <section
        aria-label="Contact details and project enquiry form"
        className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8 lg:py-20"
      >
        <aside>
          <h2 className="font-[Montserrat] text-2xl font-bold text-[#030f27] sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#59616b] sm:text-base">
            Reach out directly, or send us a few details about what you need
            using the enquiry form.
          </p>

          <div className="mt-7 space-y-3">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 border border-[#ded7ce] bg-white p-4 transition-colors hover:border-[#c97d5a]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f5f0e8] text-[#a96548]">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#737983]">
                    {label}
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-[#030f27] sm:text-base">
                    {value}
                  </span>
                </span>
              </a>
            ))}

            <div className="flex items-center gap-4 border border-[#ded7ce] bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f5f0e8] text-[#a96548]">
                <FaLocationDot aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#737983]">
                  Find us
                </span>
                <span className="mt-1 block text-sm font-semibold text-[#030f27] sm:text-base">
                  Lekki, Lagos, Nigeria
                </span>
              </span>
            </div>
          </div>
        </aside>

        <div className="bg-white p-5 shadow-lg shadow-[#030f27]/5 sm:p-8 lg:p-10">
          <h2 className="font-[Montserrat] text-2xl font-bold text-[#030f27] sm:text-3xl">
            Send a project enquiry
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#59616b]">
            Share what you’re looking for and we’ll be better prepared to help.
          </p>

          <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Your name <span className="text-[#a96548]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  className={fieldClassName}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Email address <span className="text-[#a96548]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClassName}
                  required
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(+234)"
                  className={fieldClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-block-type"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Block type <span className="text-[#a96548]">*</span>
                </label>
                <select
                  id="contact-block-type"
                  name="blockType"
                  defaultValue=""
                  className={fieldClassName}
                  required
                >
                  <option value="" disabled>
                    Select a block type
                  </option>
                  <option>6-inch blocks</option>
                  <option>9-inch blocks</option>
                  <option>Both / not sure yet</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-quantity"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Estimated quantity
                </label>
                <input
                  id="contact-quantity"
                  name="quantity"
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 500 blocks"
                  className={fieldClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-location"
                  className="text-sm font-semibold text-[#030f27]"
                >
                  Delivery location
                </label>
                <input
                  id="contact-location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Area or site address"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-[#030f27]"
              >
                Tell us about your project{" "}
                <span className="text-[#a96548]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="What would you like help with?"
                className={`${fieldClassName} resize-y`}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c97d5a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#b76f4e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c97d5a]"
            >
              Send enquiry <FaArrowRight aria-hidden="true" />
            </button>
            <p className="text-xs leading-5 text-[#737983]">
              Submitting opens your email app with your enquiry ready to send.
            </p>
          </form>
        </div>
      </section>

      <section
        aria-labelledby="map-heading"
        className="bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a96548]">
                Location
              </p>
              <h2
                id="map-heading"
                className="mt-2 font-[Montserrat] text-2xl font-bold text-[#030f27] sm:text-3xl"
              >
                Find us on the map
              </h2>
            </div>
            {/* <p className="max-w-lg text-sm leading-6 text-[#737983]">
              Temporary map preview: Epe, Lagos. Replace this with the
              confirmed business address before publishing.
            </p> */}
          </div>

          <div className="aspect-[16/7] min-h-72 overflow-hidden bg-[#e5ddd2]">
            <iframe
              title="Google Maps preview of Epe, Lagos"
              src="https://www.google.com/maps?q=Epe%2C+Lagos%2C+Nigeria&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
