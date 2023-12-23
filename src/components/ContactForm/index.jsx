"use client";
import Image from "next/image";
import aboutIllustration from "../../assets/illustrations/about.svg";
import { motion as m } from "framer-motion";
import ConForm from "./ConForm";

const Brands = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
  };
  return (
    <section id="contactUs" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <m.h2
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="text-3xl font-bold xll:text-7xl leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Contact Us
          </m.h2>
          <m.p
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="text-xl mt-2 xll:text-5xl leading-tight text-dark-green sm:text-3xl lg:text-2xl"
          >
            Submit the form below to get in touch with us
          </m.p>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center items-center">
          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            variants={variants}
            className=" order-2 flex-[1]"
          >
            <Image className="h-full" src={aboutIllustration} alt="" />
          </m.div>

          <div className=" w-full flex-[2]">
            <ConForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
