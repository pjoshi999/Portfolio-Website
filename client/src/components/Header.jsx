import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionItem = ({ title, path, setHideMenuItems }) => {
  return (
    <div className="group flex flex-col py-4 text-white">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => (
          setHideMenuItems(!setHideMenuItems),
          document.getElementById(path).scrollIntoView({ behavior: "smooth" })
        )}
      >
        <buttom className="text-[14px] tracking-wide">{title}</buttom>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
          // onClick={onToggle}
          className={`h-2 w-3 transition-all duration-500`}
        />
      </div>
      {/* <div
        className={`overflow-hidden max-h-0 items-center opacity-0 transition-all ${
          isOpen ? "visible opacity-100 max-h-screen duration-1000" : ""
        }`}
      >
        <ul className="py-3">
          {items.map((item, index) => (
            <li className="text-[14px] flex items-center py-2" key={index}>
              <img
                src={item?.src}
                alt={`Item ${index + 1}`}
                width="18"
                height="18"
                className=""
              />
              <Link href={item?.path} className="pl-5 tracking-wide">
                {item?.text}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

const Header = () => {
  const [hideMenuItems, setHideMenuItems] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const accordionData = [
    {
      title: "HOME",
      path: "header",
    },
    {
      title: "ABOUT",
      path: "about",
    },
    {
      title: "EDUCATION",
      path: "education",
    },
    {
      title: "TECH STACK",
      path: "techstack",
    },
    {
      title: "PROJECTS",
      path: "projects",
    },
    {
      title: "CONTACT",
      path: "contact",
    },
  ];

  return (
    <div
      className="flex bg-black text-white justify-between items-center px-10 py-7 relative 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-5 xs:px-3 2xl:py-7 xl:py-7 lg:py-7 md:py-7 sm:py-7 xs:py-4"
      id="header"
    >
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
          <span className="px-4 text-xl font-['Montserrat'] tracking-widest 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl xs:text-lg">
            PORTFOLIO
          </span>
        </div>
      </Link>

      {/* For Smaller device */}
      <div
        className={`relative flex items-center gap-3 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex xs:flex`}
      >
        {hideMenuItems ? (
          <div className="">
            <button
              className="fixed left-[5.4vw] top-7 z-50"
              onClick={() => setHideMenuItems(!hideMenuItems)}
            >
              <img
                src="/img/Logo.png"
                alt="Logo"
                className="w-10 h-10 select-none"
              />
            </button>
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-10 z-50"
              onClick={() => setHideMenuItems(!hideMenuItems)}
            >
              <img
                src="/img/icons/cross.svg"
                width="22"
                height="22"
                alt="Exit"
              />
            </button>
          </div>
        ) : (
          <>
            <img
              src="/img/icons/hamburger.svg"
              width="22"
              height="22"
              alt="Hamburger"
              className=""
              onClick={() => setHideMenuItems(!hideMenuItems)}
            />
          </>
        )}
        <div
          className={`top-0 right-0 w-screen bg-gradient-to-br from-black/[0.9] from-[100%] to-white/[0.1] py-20 px-5 text-center text-white fixed z-40 h-[75%] rounded-b-3xl ease-in-out duration-300 ${
            hideMenuItems ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="py-8">
            {accordionData.map((accordion, index) => (
              <div key={index}>
                <AccordionItem
                  title={accordion?.title}
                  path={accordion?.path}
                  setHideMenuItems={setHideMenuItems}
                />
                <hr />
              </div>
            ))}
          </div>
        </div>
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
