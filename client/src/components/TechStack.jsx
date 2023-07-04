import React from "react";
import useIntersection from "../utils/useIntersection";

const TechStack = () => {
  const [myRef, isVisible] = useIntersection();
  return (
    <div
      className="bg-[#161616] text-white pt-12 pb-16 relative overflow-hidden z-20"
      id="techstack"
    >
      {/* Ellipse - Background */}
      <img
        src="/img/icons/ellipse-27.png"
        alt=""
        className="absolute -top-72 left-0 rotate-180 w-96 select-none z-0 2xl:-top-96 xl:-top-96 lg:-top-96 md:-top-96 sm:-top-[24rem] xs:-top-[24rem] 2xl:left-0 xl:left-0 lg:left-0 md:left-0 sm:-left-24 xs:-left-24"
      />

      {/* Skills - Background Text */}
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute right-[-5.5rem] top-[1.3rem] 2xl:-right-[5.5rem] xl:-right-[5.5rem] lg:-right-[5.5rem] md:-right-[5.5rem] sm:-right-[9rem] xs:-right-[9rem]">
        SKILLS
      </span>

      <div className="absolute"></div>

      <h1
        className={`text-3xl font-semibold text-center pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:50px_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
        }`}
        ref={myRef}
      >
        TECH STACK
      </h1>
      <div className="grid grid-cols-6 pt-10 px-7 gap-10 justify-center items-center content-end 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10 xs:gap-10 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-4">
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/html.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/css.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/javascript.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/react.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/redux.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/tailwind.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/bootstrap.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/git.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/nodejs.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/expressjs.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/vscode.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
        <div className="flex justify-center z-10 transition-all">
          <img
            src="/img/icons/github.png"
            alt=""
            className="w-28 hover:scale-110 hover:transform hover:ease-in duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
