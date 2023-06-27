import React, { useEffect } from "react";
import Typed from "typed.js";
import Resume from "../assets/resume/Priyanshu_Joshi.pdf";

const Body = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Student",
        "Front-end Developer",
        "Programmer",
      ],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
      backDelay: 1000,
      showCursor: false,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <img
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
        alt=""
        className="absolute top-[-10.5rem] -z-10 bg-black object-cover bg-repeat-y h-[60.6rem] w-screen select-none"
      />
      <div className="flex text-white h-[38.6rem] overflow-hidden ">
        <div className="">
          <div className="pt-40 pb-[18.3rem] px-28">
            <h1 className="text-[#13FF00] text-3xl font-semibold">
              PRIYANSHU JOSHI
            </h1>
            <div className="bg-[#13FF00] w-[25rem] h-[0.3rem] mx-24"></div>
            <div className="py-4">
              <span className="text-2xl font-['Rubik']">I'm a </span>
              <span ref={el} className="text-4xl font-medium font-['Syle']" />
              <span className="text-4xl">|</span>
            </div>
            <div className="w-[31.45rem] font-['Rubik']">
              Front-end developer focused on creating Web and Mobile
              applications. I really like different projects that solve real
              problems.
            </div>
            <div className="flex gap-16 my-8">
              <a href={Resume} download="Priyanshu Joshi.pdf">
                <div className="flex items-center py-5 h-6">
                  <img
                    src="/img/icons/download.png"
                    alt=""
                    className="h-6 select-none"
                  />
                  <span className="px-2 font-['Rubik']">Download CV</span>
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1xO16NCyOMUVc5urIxyUT1djEpt66ewMy/view?usp=sharing"
                download="Priyanshu Joshi"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#13FF00] flex items-center h-6 py-5 px-2 rounded-lg">
                  <img
                    src="/img/icons/arrow-circle-down.png"
                    alt=""
                    className="h-6 select-none"
                  />
                  <span className="text-black font-bold px-2">Portfolio</span>
                </button>
              </a>
            </div>
            <div className="flex gap-10 my-11 items-center">
              <a
                href="https://www.instagram.com/_p.joshi98_/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/icons/brand-instagram.png"
                  alt="INSTAGRAM"
                  className="h-[29px] select-none"
                />
              </a>
              <a
                href="https://github.com/pjoshi999"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/icons/brand-github.png"
                  alt="GITHUB"
                  className="h-[29px] select-none"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshujoshi98/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/icons/brand-linked-in.png"
                  alt="LINKEDIN"
                  className="h-[23px] select-none"
                />
              </a>
              <a
                href="https://twitter.com/p_joshi98"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/icons/brand-twitter.png"
                  alt="TWITTER"
                  className="h-[25px] select-none"
                />
              </a>
              <a
                href="mailto:joshi.priyanshu999@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/icons/mail.png"
                  alt="TWITTER"
                  className="h-[25px] select-none"
                />
              </a>
            </div>
            <div className="flex my-24 items-center relative left-[39rem]">
              <span className="font-['Syne'] font-semibold tracking-widest">
                SCROLL
              </span>
              <img
                src="/img/icons/arrow-down.png"
                alt=""
                className="h-6 animate-bounce select-none"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#3a3a3a] py-10 h-[40rem] w-[68rem] rotate-[-27.176deg] relative top-[-15rem] overflow-hidden px-5 select-none">
          <img
            src="/img/user-black2.png"
            alt=""
            className=" relative -top-18 right-[12rem] rotate-[27.176deg] z-10"
          />
          <img
            src="/img/icons/ellipse-1.png"
            alt=""
            className="h-[37rem] w-[30rem] absolute right-[22rem] top-[16rem] z-0 rotate-[27.176deg]"
          />
          <img
            src="/img/icons/ellipse-2.png"
            alt=""
            className="h-[45rem] w-[35rem] absolute right-[20.5rem] top-[13rem] rotate-[27.176deg]"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
