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
        "Backend Developer",
        "Full Stack Developer",
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
        className="absolute top-[-10.5rem] -z-10 bg-black object-cover bg-repeat-y h-[68.5rem] w-screen select-none 2xl:h-[69.5rem] xl:h-[60.5rem] lg:h-[60.5rem] md:h-[60.5rem] sm:h-[75.5rem] xs:h-[75.5rem]"
      />
      <div className="flex text-white h-screen overflow-hidden 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-row 2xl:h-[40.5rem] xl:h-[42rem] lg:h-[40rem] md:h-[37rem] sm:h-[58rem] xs:h-[48rem] sm:w-screen xs:w-screen 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-0 xs:py-0">
        {/* Only for small devices */}
        <div className="pt-0 absolute overflow-hidden 2xl:hidden xl:hidden lg:hidden md:h-[30rem] sm:h-[26rem] sm:-pt-24 xs:h-[22rem]">
          <img
            src="/img/user-black2.png"
            alt=""
            className="2xl:hidden -z-10 xl:hidden lg:hidden md:block sm:block xs:block 2xl:top-0 xl:top-0 lg:top-0 md:top-[-19rem] sm:top-[-10rem] xs:top-[-10rem] 2xl:right-[15rem] xl:right-[12rem] lg:right-[10rem] md:right-[4.5rem] sm:right-[3rem] xs:right-[3rem] 2xl:scale-100 xl:scale-100 lg:scale-100 md:scale-[2.5] sm:scale-125 xs:scale-125 2xl:skew-x-2 xl:skew-x-2 lg:skew-x-2 md:skew-x-2 sm:skew-x-2 xs:skew-x-2"
          />
          <img
            src="/img/icons/hero-bg2.png"
            alt=""
            className="absolute top-36 bg-[#ff3171] rounded-full -rotate-12 -z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block 2xl:top-36 xl:top-36 lg:top-36 md:top-36 sm:top-40 xs:top-40 2xl:right-[15rem] xl:right-[12rem] lg:right-[10rem] md:right-[4.5rem] sm:right-[0.1rem] xs:right-[0.1rem] 2xl:scale-100 xl:scale-100 lg:scale-100 md:scale-[125] sm:scale-[1.2] xs:scale-[1.1]"
          />
          <img
            src="/img/icons/ellipse-1.png"
            alt=""
            className="absolute rounded-full top-16 left-4 h-[25rem] w-[21rem] 2xl:hidden xl:hidden lg:hidden md:hidden md:w-96 sm:hidden xs:hidden 2xl:-top-18 xl:-top-4 lg:top-[4rem] md:top-[18rem] sm:top-0 xs:top-0 2xl:right-[15rem] xl:right-[12rem] lg:right-[10rem] md:right-[4.5rem] sm:right-[3rem] xs:right-[3rem] 2xl:scale-100 xl:scale-100 lg:scale-100 md:scale-[2.5] sm:scale-100 xs:scale-100"
          />
          <img
            src="/img/icons/ellipse-2.png"
            alt=""
            className="absolute rounded-full top-9 h-[30rem] w-[25rem] 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden 2xl:-top-18 xl:-top-4 lg:top-[4rem] md:top-[18rem] sm:top-[5rem] xs:top-[rem] 2xl:right-[15rem] xl:right-[12rem] lg:right-[10rem] md:right-[4.5rem] sm:right-[3rem] xs:right-[3rem] 2xl:scale-100 xl:scale-100 lg:scale-100 md:scale-[2.5] sm:scale-100 xs:scale-100"
          />
        </div>

        <div className="2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-56 xs:py-[8.5rem] sm:pb-[17rem] xs:pb-[17rem] z-20">
          <div className="flex flex-col pt-40 pb-[18.3rem] px-28 2xl:px-28 xl:px-28 lg:px-28 md:px-28 sm:px-8 xs:px-5 2xl:pt-40 xl:pt-40 lg:pt-32 md:pt-48 sm:pt-60 sm:pb-[20rem] xs:pt-[14.7rem] xs:pb-[20rem]">
            <h1 className="text-[#13FF00] text-3xl font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-2xl">
              PRIYANSHU JOSHI
            </h1>
            <div className="bg-[#13FF00] w-[25rem] h-[0.3rem] ml-24 2xl:w-[25rem] xl:w-[25rem] lg:w-[25rem] md:w-[25rem] sm:w-[20rem] xs:w-[20rem]"></div>
            <div className="py-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-4 xs:py-4">
              <span className="text-2xl font-['Rubik'] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                I'm a{" "}
              </span>
              <span
                ref={el}
                className="text-4xl text-[#ff3171] px-1 font-medium font-['Syle'] 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-2xl 2xl:font-medium xl:font-medium lg:font-medium md:font-medium sm:font-medium xs:font-semibold"
              />
              <span className="text-4xl 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-10 sm:pr-36 xs:pr-56 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-2xl">
                |
              </span>
            </div>
            <div className="w-[31.45rem] font-['Rubik'] 2xl:w-[31.45rem] xl:w-[31.45rem] lg:w-[31.45rem] md:w-[31.45rem] sm:w-[31.45rem] xs:w-[31.45rem] 2xl:pr-0 xl:pr-0 lg:pr-14 md:pr-10 sm:pr-44 xs:pr-52">
              Front-end developer focused on creating Web applications. I really
              like different projects that solve real problems.
            </div>
            <div className="flex gap-14 my-8 2xl:gap-16 xl:gap-16 lg:gap-16 md:gap-16 sm:gap-11 xs:gap-6">
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
            <div className="flex gap-10 my-11 items-center 2xl:my-11 xl:my-11 lg:my-11 md:my-5 sm:my-2 xs:my-2 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-5 xs:px-2 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-8 xs:gap-8">
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
            <div className="flex my-14 items-center relative left-[39rem] 2xl:left-[39rem] xl:left-[37rem] lg:left-[32rem] md:left-[23.5rem] sm:left-[100rem] xs:left-[100rem] 2xl:-top-[1.5rem] xl:-top-[1.5rem] lg:-top-[1.5rem] md:-top-[1.5rem] sm:-top-[5.5rem] xs:-top-[5.5rem]">
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
        <div className="bg-[#3a3a3a] py-10 h-[40rem] w-[68rem] rotate-[-27.176deg] relative top-[-15rem] overflow-hidden px-5 select-none 2xl:visible xl:visible: lg:visible md:visible sm:invisible xs:invisible 2xl:h-[40rem] xl:h-[40rem] lg:h-[40rem] md:h-[60rem] sm:h-[70rem] xs:h-[70rem] 2xl:w-[68rem] xl:w-[68rem] lg:w-[68rem] md:w-[68rem] sm:w-[70rem] xs:w-70rem 2xl:py-10 xl:py-10 lg:py-10 md:py-10 sm:py-0 xs:py-0 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-5 xs:px-5">
          <img
            src="/img/user-black2.png"
            alt=""
            className="relative -top-18 right-[16rem] rotate-[27.176deg] z-10 2xl:-top-18 xl:-top-4 lg:top-[4rem] md:top-[18rem] sm:top-0 xs:top-0 2xl:right-[15rem] xl:right-[12rem] lg:right-[10rem] md:right-[4.5rem] sm:right-[3rem] xs:right-[3rem] 2xl:scale-100 xl:scale-100 lg:scale-100 md:scale-[2.5] sm:scale-100 xs:scale-100"
          />
          <img
            src="/img/icons/ellipse-1.png"
            alt=""
            className="h-[37rem] w-[30rem] absolute right-[22rem] top-[16rem] z-0 rotate-[27.176deg] 2xl:top-[16rem] xl:top-[16rem] lg:top-[19rem] md:top-[19rem] sm:top-0 xs:top-0 2xl:right-[26.5rem] xl:right-[23.5rem] lg:right-[19.5rem] md:right-[19.5rem] sm:right-[12rem] xs:right-[12rem]"
          />
          <img
            src="/img/icons/ellipse-2.png"
            alt=""
            className="h-[45rem] w-[35rem] absolute right-[20.5rem] top-[13rem] rotate-[27.176deg] 2xl:top-[13rem] xl:top-[13rem] lg:top-[16rem] md:top-0 sm:top-0 xs:top-0 2xl:right-[24.5rem] xl:right-[21.5rem] lg:right-[17.5rem] md:right-[12rem] sm:right-[12rem] xs:right-[12rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
