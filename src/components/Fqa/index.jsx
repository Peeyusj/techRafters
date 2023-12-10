"use client";

import React, { useState } from "react";

const Fqa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ${
                index === activeIndex ? "border-b-0 rounded-b-none" : "rounded"
              }`}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 ${
                    index === activeIndex && "rotate-180"
                  } text-gray-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 ${
                  index !== activeIndex && "hidden"
                }`}
              >
                <p>
                  {faq.answer}{" "}
                  {faq.link && (
                    <a
                      href={faq.link}
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      {faq.linkText}
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "How to create an account?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    link: "#",
    linkText: "aliqua dolor",
  },
  {
    question: "How can I make payment using Paypal?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    link: "#",
    linkText: "aliqua dolor",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    link: "#",
    linkText: "aliqua dolor",
  },
  {
    question: "How can I reach to support?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    link: "#",
    linkText: "aliqua dolor",
  },
];

export default Fqa;
