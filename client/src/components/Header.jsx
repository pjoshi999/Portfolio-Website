import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-black text-white justify-between items-center px-10 py-7 z-0 relative">
      <Link to="/">
        <div className="flex items-center">
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
      <div>
        <ul className="flex items-center font-['Syne'] transition duration-300 ease-in-out">
          <li className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li
            className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            ABOUT
          </li>
          <li
            className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            PROJECTS
          </li>
          <li
            className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1 cursor-pointer"
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
      <div>
        <ul className="transition duration-300 ease-in-out font-['Syne']">
          <li className="px-5 text-md tracking-widest rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
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
