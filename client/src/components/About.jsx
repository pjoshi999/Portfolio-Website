import React from "react";
import useIntersection from "../utils/useIntersection";

const About = () => {
  const [myRef, isVisible] = useIntersection();
  return (
    <div
      className="relative bg-[#161616] text-white overflow-hidden"
      id="about"
    >
      <h1
        className={`text-3xl font-semibold text-center pt-20 pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:3%_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
        }`}
        ref={myRef}
      >
        ABOUT ME
      </h1>

      {/* About - Background Text */}
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute right-[-5.5rem] top-[1.3rem] z-40">
        ABOUT
      </span>

      <div
        className={`pt-7 pb-[5.5rem] px-96 text-lg text-[#8F8F8F] font-['Rubik'] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
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
      <div className="absolute bottom-10 left-[-1rem]">
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
