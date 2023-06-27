import React from "react";
import useIntersection from "../utils/useIntersection";

const Education = () => {
  const [myRef, isVisible] = useIntersection();

  return (
    <div className="relative overflow-hidden bg-[#1D1D1D]">
      <img
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
        alt=""
        className="absolute top-[-15rem] -z-10 bg-black object-cover bg-repeat-y h-[60.6rem] w-screen select-none"
      />

      {/* Dots - Background */}
      <div className="absolute top-40 right-[15rem]">
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
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute left-[-14.5rem] bottom-[1.3rem] z-40">
        ABOUT ME
      </span>

      <div
        className={`flex justify-evenly ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-3/4 opacity-0"
        }`}
        ref={myRef}
      >
        <div className="text-white">
          <h1 className="text-3xl font-semibold pt-12">Education</h1>
          <div className="pb-5">
            <div className="my-5">
              <h1 className="text-sm font-medium leading-8">
                August 2020-May-2024
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Information Technology
              </h1>
              <h2 className="leading-8">
                Swarnim Startup and Innovation University
              </h2>
            </div>
            <div className="my-10">
              <h1 className="text-sm font-medium leading-8">
                August 2019-May-2020
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Higher Secondary
              </h1>
              <h2 className="leading-8">The Aditya Birla Public School</h2>
            </div>
            <div className="my-10">
              <h1 className="text-sm font-medium leading-8">
                August 2017-May-2018
              </h1>
              <h1 className="text-[#13FF00] text-2xl font-semibold leading-8">
                Secondary
              </h1>
              <h2 className="leading-8">The Aditya Birla Public School</h2>
            </div>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-3xl font-semibold pt-12">Jobs</h1>

          <div className="pb-10">
            <div className="my-5">
              <h1 className="text-sm font-medium leading-8">
                May 2023-August-2023
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
