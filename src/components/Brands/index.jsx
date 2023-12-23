"use client";
import Image from "next/image";
import aboutIllustration from "../../assets/illustrations/about.svg";
import { motion as m } from "framer-motion";

const Brands = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
  };
  return (
    <section id="about" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-[49px] font-medium pb-5 sm:pb-1 text-gray-900">
            Who We Are?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-20 justify-center items-center">
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

          <div className=" flex-[1.5]">
            <m.h2
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              variants={variants}
              className="text-3xl font-bold  text-primary-green sm:text-4xl xl:text-5xl"
            >
              Give a push <br />
              to your career
            </m.h2>
            <m.p
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={variants}
              className="text-3l font-medium text-gray-900 mt-7"
            >
              Our Service helps you to get Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vel id repellat libero harum
              consectetur adipisicing el
         

            </m.p>
            <m.p
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={variants}
              className="text-3l font-medium text-gray-900 mt-7"
            >
              Our Service helps you to get Lorem ipsum dolor sit amet helps you
              to get Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vel id repellat libero harum
            </m.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
