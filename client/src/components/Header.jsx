import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hideMenuItems, setHideMenuItems] = useState(false);

  return (
    <div className="flex bg-black text-white overflow-hidden justify-between items-center px-10 py-7 relative">
      <Link to="/">
        <div
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/img/Logo.png"
            alt="Logo"
            className="w-10 h-10 select-none"
          />
          <span className="px-4 text-xl font-['Montserrat'] tracking-widest">
            PORTFOLIO
          </span>
        </div>
      </Link>

      {/* For Smaller device */}
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block">
        <img
          src="/img/icons/hamburger.png"
          alt=""
          className="h-8 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block"
          onClick={() => setHideMenuItems(!hideMenuItems)}
        />
        {hideMenuItems && (
          <div className="bg-white text-black absolute right-0 py-3 my-2 w-screen z-40 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block">
            <ul>
              <li className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center">
                <Link to="/">HOME</Link>
              </li>
              <li
                className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center"
                onClick={() => (
                  setHideMenuItems(!setHideMenuItems),
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                )}
              >
                <Link to="/">ABOUT</Link>
              </li>
              <li
                className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center"
                onClick={() => (
                  setHideMenuItems(!setHideMenuItems),
                  document
                    .getElementById("education")
                    .scrollIntoView({ behavior: "smooth" })
                )}
              >
                <Link to="/">EDUCATION</Link>
              </li>
              <li
                className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center"
                onClick={() => (
                  setHideMenuItems(!setHideMenuItems),
                  document
                    .getElementById("techstack")
                    .scrollIntoView({ behavior: "smooth" })
                )}
              >
                <Link to="/">TECH STACK</Link>
              </li>
              <li
                className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center"
                onClick={() => (
                  setHideMenuItems(!setHideMenuItems),
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                )}
              >
                <Link to="/">PROJECTS</Link>
              </li>
              <li
                className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-3 cursor-pointer flex justify-center items-center"
                onClick={() => (
                  setHideMenuItems(!setHideMenuItems),
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                )}
              >
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
        {/* For Bigger device */}
        <div className="2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
          <ul className="flex items-center font-['Syne'] transition duration-300 ease-in-out">
            <li className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
              <Link to="/">HOME</Link>
            </li>
            <li
              className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer 2xl:block xl:block lg:block md:block sm:hidden xs:hidden"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              ABOUT
            </li>
            <li
              className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer 2xl:block xl:block lg:block md:block sm:hidden xs:hidden"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              PROJECTS
            </li>
            <li
              className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer 2xl:block xl:block lg:block md:block sm:hidden xs:hidden"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              CONTACT
            </li>
          </ul>
        </div>
      </div>
      <div className="2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
        <ul className="transition duration-300 ease-in-out font-['Syne']">
          <li className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#ff3171] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
            <Link
              to="https://drive.google.com/file/d/1xO16NCyOMUVc5urIxyUT1djEpt66ewMy/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
