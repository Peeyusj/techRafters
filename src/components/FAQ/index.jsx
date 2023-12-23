"use client";
import React, { useState } from "react";
import { motion as m } from "framer-motion";

// third party
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown } from "react-feather";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // custom styles for animation
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <section id="faq" className="py-10 bg-creameBg sm:py-16 lg:py-24 xll:py-60">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className=" mx-auto text-center">
          <m.h2
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="text-3xl font-bold xll:text-7xl leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </m.h2>
        </div>

        <div className="max-w-3xl xll:scale-[1.5] xll:mt-32 mx-auto mt-8 space-y-4 md:mt-16">
          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="relative inline-flex mt-10 group "
          >
            {/* <div className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44beff27] via-[#ff44ec1f] to-[#ff665e21] rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Accordion
                open={open === 1}
                icon={<ChevronDown id={1} />}
                className="relative transition-all py-2 bg-white duration-200  rounded-lg"
                animate={customAnimation}
              >
                <AccordionHeader
                  className="flex px-5 text-left text-base sm:text-lg font-semibold text-black"
                  onClick={() => handleOpen(1)}
                >
                  What is TechRafters?{" "}
                </AccordionHeader>
                <AccordionBody className="px-4 pb-5 sm:px-6 sm:pb-6 font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  pariatur perferendis modi? Est suscipit pariatur iure, culpa
                  corrupti minima temporibus, ullam harum aliquam obcaecati illo
                  veritatis illum tempora ex eaque?
                </AccordionBody>
              </Accordion>
            </div>
          </m.div>
          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="relative inline-flex mt-10 group"
          >
            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Accordion
                open={open === 2}
                icon={<ChevronDown id={1} />}
                className="relative transition-all bg-white duration-200 py-2  rounded-lg"
                animate={customAnimation}
              >
                <AccordionHeader
                  className="flex px-5 text-left text-base sm:text-lg font-semibold text-black"
                  onClick={() => handleOpen(2)}
                >
                  Is TechRafters free to use?
                </AccordionHeader>
                <AccordionBody className="px-4 pb-5 sm:px-6 sm:pb-6  font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  minus distinctio numquam. Nemo ut consequuntur voluptate earum
                  numquam, vitae, amet magni odio esse at libero facere saepe
                  vero illum nisi!
                </AccordionBody>
              </Accordion>
            </div>
          </m.div>
          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="relative inline-flex lg:w-[770px] mt-10 group"
          >
            <div className="transition-all w-full duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Accordion
                open={open === 6}
                icon={<ChevronDown id={1} />}
                className="relative transition-all bg-white duration-200 py-2 rounded-lg"
                animate={customAnimation}
              >
                <AccordionHeader
                  className="flex px-5 text-left text-base sm:text-lg font-semibold text-black"
                  onClick={() => handleOpen(6)}
                >
                  How does TechRafters personalize my portfolio/projects?
                </AccordionHeader>
                <AccordionBody className="px-4 pb-5 sm:px-6 sm:pb-6 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi ea blanditiis libero quod in! Tenetur impedit,
                  perferendis ipsa velit eaque debitis sit commodi nihil ut
                  explicabo quas veritatis quo quia!
                </AccordionBody>
              </Accordion>
            </div>
          </m.div>
          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="relative inline-flex lg:w-[770px] mt-10 group"
          >
            <div className="transition-all w-full duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Accordion
                open={open === 4}
                icon={<ChevronDown id={1} />}
                className="relative transition-all bg-white duration-200 py-2 rounded-lg"
                animate={customAnimation}
              >
                <AccordionHeader
                  className="flex px-5 text-left text-base sm:text-lg font-semibold text-black"
                  onClick={() => handleOpen(4)}
                >
                  Does TechRafters offer customer support?{" "}
                </AccordionHeader>
                <AccordionBody className="px-4 pb-5 sm:px-6 sm:pb-6 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores iste neque repellat incidunt. Dolorum reiciendis
                  itaque ab quidem laborum illum, nesciunt necessitatibus.
                  Laudantium cumque, illo cum minima adipisci voluptates modi.
                </AccordionBody>
              </Accordion>
            </div>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={variants}
            className="relative inline-flex lg:w-[770px] mt-10 group"
          >
            <div className="transition-all w-full duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg">
              <Accordion
                open={open === 7}
                icon={<ChevronDown id={1} />}
                className="relative transition-all bg-white duration-200 py-2 rounded-lg"
                animate={customAnimation}
              >
                <AccordionHeader
                  className="flex px-5 text-left text-base sm:text-lg font-semibold text-black"
                  onClick={() => handleOpen(7)}
                >
                  Can I connect with experts to get info about of free projects?
                </AccordionHeader>
                <AccordionBody className="px-4 pb-5 sm:px-6 sm:pb-6 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptatibus maiores in repellendus non? Distinctio
                  pariatur magni cupiditate corporis ut, numquam vitae eligendi
                  delectus, explicabo autem sit odio doloribus dolor!
                </AccordionBody>
              </Accordion>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
