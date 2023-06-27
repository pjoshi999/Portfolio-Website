import React from "react";
import useIntersection from "../utils/useIntersection";

const TechStack = () => {
  const [myRef, isVisible] = useIntersection();
  return (
    <div className="bg-[#161616] text-white pt-12 pb-16 relative overflow-hidden">
      {/* Ellipse - Background */}
      <img
        src="/img/icons/ellipse-27.png"
        alt=""
        className="absolute -top-72 left-0 rotate-180 w-96 select-none z-0"
      />

      {/* Skills - Background Text */}
      <span className="font['Poppins'] font-bold text-8xl text-[#272727] select-none absolute right-[-5.5rem] top-[1.3rem] z-40">
        SKILLS
      </span>

      <div className="absolute"></div>

      <h1
        className={`text-3xl font-semibold text-center pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:3%_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
        }`}
        ref={myRef}
      >
        TECH STACK
      </h1>
      <div className="grid grid-cols-6 pt-10 px-7 gap-10 justify-center items-center content-end ">
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
