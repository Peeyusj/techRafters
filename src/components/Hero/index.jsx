"use client";
import heroIllustration from "@/assets/illustrations/Team-goals-bro.svg";
import Image from "next/image";
import { motion as m } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Hero = () => {
  return (
    <section  className="overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse sm:px-10 lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
        <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
          <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
            <div className="flex flex-col justify-between flex-1 h-full">
              {/* <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                  Take control <br />
                  on your daily expenses
                </h1>
                <p className="mt-6 text-base text-black sm:text-xl">
                  Our A.I helps you to predict your expenses based on your
                  previous activity and shares how you should manage your money.
                </p>
                <p className="mt-6 text-base text-black sm:text-xl">
                  Our A.I helps you to predict your expenses based on your
                  previous activity and shares how you should manage your money.
                </p>
              </div> */}
              <div>
                <m.h2
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  variants={variants}
                  className="text-4xl font-bold  text-gray-900 sm:text-4xl xl:text-5xl font-pj"
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
                  className=" text-lg sm:text-xl font-medium text-gray-900 mt-7 font-pj"
                >
                  Our Service helps you to get Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel id repellat libero harum
                </m.p>
                <m.p
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  variants={variants}
                  className="mt-5 text-xl sm:text-2xl font-semibold text-primary-green"
                >
                  Our Service helps you to get Lorem ipsum dolor sit amet helps
                  you to get
                </m.p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-16 sm:pb-0 w-full overflow-hidden lg:w-5/12 lg:order-1">
          <div className="lg:absolute lg:bottom-52 lg:right-0">
            <m.div
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={variants}
              className=" order-2"
            >
              <Image className="h-full" src={heroIllustration} alt="" />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
