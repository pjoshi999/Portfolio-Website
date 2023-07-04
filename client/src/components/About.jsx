import React from "react";
import useIntersection from "../utils/useIntersection";

const About = () => {
  const [myRef, isVisible] = useIntersection();
  return (
    <div
      className="relative bg-[#161616] text-white overflow-hidden z-10"
      id="about"
    >
      <h1
        className={`text-3xl font-semibold text-center pt-16 pb-[0.35rem] z-50 rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:50px_3px] 2xl:pt-16 xl:pt-14 lg:pt-12 md:pt-12 sm:pt-12 xs:pt-12 ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
        }`}
        ref={myRef}
      >
        ABOUT ME
      </h1>

      {/* About - Background Text */}
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute right-[-5.5rem] top-[1.3rem] -z-10 2xl:text-8xl 2xl:right-[-5.5rem] xl:text-8xl xl:right-[-5.5rem] lg:text-[5.8rem] lg:right-[-4.5rem] md:text-[5.5rem] md:right-[-4.5rem] sm:text-[5.5rem] sm:right-[-9.1rem] xs:text-[5.5rem] xs:right-[-9.1rem]">
        ABOUT
      </span>

      <div
        className={`pt-7 pb-[5.5rem] px-96 text-lg text-[#8F8F8F] font-['Rubik'] 2xl:px-96 xl:px-[21rem] lg:px-48 md:px-32 sm:px-8 xs:px-8 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center sm:text-base xs:text-center ${
          isVisible
            ? "translate-y-0 ease-in-out duration-700 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        ref={myRef}
      >
        <p>
          My name is <span className="text-[#13FF00]">Priyanshu Joshi</span>,
          I'm <span className="text-[#13FF00]">20</span> years old and I am a
          passionate{" "}
          <span className="text-[#13FF00]"> Frontend Developer </span>
          with a focus on creating remarkable user experiences.
        </p>
        <p>
          My commitment to staying current with industry trends and best
          practices ensures that I deliver frontend solutions that are at the
          forefront of <span className="text-[#13FF00]">innovation</span>. I am
          passionately curious and driven by a desire to constantly improve and
          provide exceptional user experience.
        </p>
        <br />
        <p>
          Feel free to explore my{" "}
          <span className="text-[#13FF00]">portfolio</span> and witness the{" "}
          <span className="text-[#13FF00]">projects</span> where I have combined
          my technical expertise with a creative touch to create impactful
          experiences. I look forward to connecting and discussing opportunities
          to collaborate on exciting projects.
        </p>
      </div>

      {/* Dots - Background */}
      <div className="absolute bottom-10 left-[-1rem] 2xl:left-[-1rem] xl:left-[-1rem] lg:left-[-1rem] md:left-[-4.5rem] sm:left-[-4.5rem] xs:left-[-4.5rem]">
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
      </div>
    </div>
  );
};

export default About;
