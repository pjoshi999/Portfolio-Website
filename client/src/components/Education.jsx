import React from "react";
import useIntersection from "../utils/useIntersection";

const Education = () => {
  const [myRef, isVisible] = useIntersection();

  return (
    <div className="relative overflow-hidden bg-[#1D1D1D]" id="education">
      <img
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
        alt=""
        className="absolute top-[-15rem] -z-10 bg-black object-cover bg-repeat-y h-[60.6rem] w-screen select-none"
      />

      {/* Dots - Background */}
      <div className="absolute top-40 right-[15rem] rotate-45 2xl:right-[15rem] xl:right-[15rem] lg:right-[15rem] md:right-[15rem] sm:right-[7rem] xs:right-[7rem]">
        <div className="flex gap-5 absolute bottom-0">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>

        <div className="flex gap-5 absolute bottom-[3rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>
        <div className="flex gap-5 absolute bottom-[3rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>

        <div className="flex gap-5 absolute bottom-[6rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>
        <div className="flex gap-5 absolute bottom-[6rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>
        <div className="flex gap-5 absolute bottom-[6rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>

        <div className="flex gap-5 absolute bottom-[9rem]">
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
          <button className="h-8 w-8 text-lg rounded-full bg-[#ffffff1a] text-[#272727] z-40 select-none cursor-default"></button>
        </div>
      </div>

      {/* About - Background Text */}
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute left-[-14.5rem] bottom-[1.3rem] 2xl:bottom-[1.3rem] xl:bottom-[1.3rem] lg:bottom-[1.3rem] md:bottom-[1.3rem] sm:bottom-[2.3rem] xs:bottom-[2.3rem]">
        ABOUT ME
      </span>

      <div
        className={`flex justify-evenly 2xl:justify-evenly 2xl:flex xl:justify-evenly xl:flex xl:gap-52 lg:gap-20 lg:flex md:gap-20 md:flex sm:block xs:block ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        ref={myRef}
      >
        <div className="text-white">
          <h1 className="text-3xl font-semibold pt-12 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
            Education
          </h1>
          <div className="pb-5">
            <div className="my-5 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                August 2020 - May 2024
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Information Technology
              </h1>
              <h2 className="leading-8">
                Swarnim Startup and Innovation University
              </h2>
            </div>
            <div className="my-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                August 2019 - May 2020
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Higher Secondary
              </h1>
              <h2 className="leading-8">The Aditya Birla Public School</h2>
            </div>
            <div className="my-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                August 2017 - May 2018
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Secondary
              </h1>
              <h2 className="leading-8">The Aditya Birla Public School</h2>
            </div>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-3xl font-semibold pt-12 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-12 sm:pt-0 xs:pt-0">
            Jobs
          </h1>
          <div className="pb-10 2xl:pb-10 xl:pb-10 lg:pb-10 md:pb-10 sm:pb-6 xs:pb-6">
            <div className="my-5 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                January 2024 - Present
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8 break-words lg:w-80 w-[80%] m-auto">
                Software Engineer
              </h1>
              <h2 className="leading-8 text-base">Kuvaka Tech</h2>
            </div>
            <div className="my-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                October 2023 - December 2023
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                SDE Intern
              </h1>
              <h2 className="leading-8 text-base">Kuvaka Tech</h2>
            </div>
            <div className="my-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                September 2023 - October 2023
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Full Stack Developer Intern
              </h1>
              <h2 className="leading-8 text-base">Alhansat Solutions</h2>
            </div>
            <div className="my-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center xs:text-center">
              <h1 className="text-sm font-medium leading-8">
                May 2023 - August 2023
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Contributor
              </h1>
              <h2 className="leading-8 text-base">
                GirlScript Summer of Code'23
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
