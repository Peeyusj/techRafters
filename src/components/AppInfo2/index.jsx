const AppInfo2 = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute bottom-0 right-0 transform translate-y-1/2 lg:bottom-auto lg:top-0 xl:-translate-x-20 2xl:-translate-x-40">
        <svg
          className="filter blur-3xl"
          style={{ filter: "blur(64px)" }}
          width="644"
          height="411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M180.781 217.613C85.977 122.809-63.572 134.004 31.232 39.2c94.804-94.804 495.712 1.312 590.516 96.116 94.804 94.804-152.396 152.395-247.2 247.199s-98.963-70.098-193.767-164.902Z"
            fill="url(#b)"
          />
          <defs>
            <linearGradient
              id="b"
              x1="663.883"
              y1="177.451"
              x2="295.437"
              y2="472.757"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-cyan-500)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-purple-500)" }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50 bg-blend-multiply"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24">
          <div className="pt-12 sm:pt-16 lg:py-36">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Become an early adopter of our app.
            </h2>
            <p className="mt-4 text-lg font-normal text-white sm:mt-6 sm:text-xl">
              Keep control on your projects. Don't make the mistakes again &
              again.
            </p>

            <p className="mt-8 text-lg font-normal text-white sm:text-xl sm:mt-12">
              Join Landingfolio to:
            </p>
            <ul className="mt-5 space-y-2">
              <li className="flex items-start text-lg font-normal text-gray-300">
                <span className="mr-3 text-lg"> 💸 </span>
                Get 10 Web & Mobile UI Inspirations Every Week
              </li>

              <li className="flex items-start text-lg font-normal text-gray-300">
                <span className="mr-3 text-lg"> 🎁 </span>
                Exclusive Discount on Design Resources
              </li>

              <li className="flex items-start text-lg font-normal text-gray-300">
                <span className="mr-3 text-lg"> ⌛️ </span>3 Random Subscribers
                will Get Featured on Emails
              </li>
            </ul>

            <div className="flex flex-col items-center justify-center mt-8 space-y-5 md:mt-12 sm:flex-row sm:space-y-0 sm:space-x-5 sm:justify-start">
              <a
                href="#"
                title=""
                className="relative flex transition-all duration-200 transform hover:-translate-y-1"
                role="button"
              >
                <div className="absolute rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 -inset-px"></div>
                <img
                  className="relative w-auto rounded-xl h-14 md:h-12 lg:h-16"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/2/app-store-button.svg"
                  alt=""
                />
              </a>

              <a
                href="#"
                title=""
                className="relative flex transition-all duration-200 transform hover:-translate-y-1"
                role="button"
              >
                <div className="absolute rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 -inset-px"></div>
                <img
                  className="relative w-auto rounded-xl h-14 md:h-12 lg:h-16"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/2/play-store-button.svg"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="self-end mt-12 lg:mt-0">
            <img
              className="w-full max-w-sm mx-auto transform xl:translate-y-16 lg:max-w-none"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cta/4/phone-in-hand-mockup.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo2;
