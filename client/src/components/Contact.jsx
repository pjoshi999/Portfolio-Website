import React, { useState } from "react";
import useIntersection from "../utils/useIntersection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [myRef, isVisible] = useIntersection();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    let dataSend = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };
    // console.log(dataSend);
    const BASE_URL = "https://portfolio-plrx.onrender.com"; // Update the URL or endpoint

    const res = await fetch(BASE_URL + "/send", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(
      notify(),
      setName(""),
      setEmail(""),
      setSubject(""),
      setMessage("")
    );
  };

  const notify = () =>
    toast.success("Mail Sent Succesfully! Thank You for reaching out to me", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="bg-[#1D1D1D] text-white" id="contact">
      <h1
        className={`text-3xl font-semibold text-center pt-10 pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:100px_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
        ref={myRef}
      >
        Get in touch with me
      </h1>
      <div className="flex justify-center pt-10 pb-16 font-['Rubik'] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse 2xl:pb-16 xl:pb-16 lg:pb-16 md:pb-16 sm:pb-162rem]">
        <div className="bg-[#252525] h-96 w-96 flex flex-col justify-evenly rounded-s-3xl 2xl:h-96 xl:h-96 lg:h-[24rem] md:h-[24rem] sm:h-[12rem] 2xl:w-96 xl:w-80 lg:w-72 md:w-72 sm:w-screen 2xl:rounded-s-3xl xl:rounded-s-3xl lg:rounded-s-3xl md:rounded-none sm:rounded-none">
          {/* Line - Background */}
          <div className="flex items-center justify-end">
            <h1 className="text-xl font-medium tracking-widest 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg">
              CONTACT
            </h1>
            <img
              src="/img/icons/line.png"
              alt=""
              className="h-[0.17rem] w-full 2xl:w-52 xl:w-44 lg:w-32 md:w-28 sm:w-[8.8rem] 2xl:h-[0.17rem] xl:h-[0.17rem] lg:h-[0.16rem] md:h-[0.15rem] sm:h-[0.13rem]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-1/3 pl-[4.5rem] 2xl:pl-[4.5rem] xl:pl-[3rem] lg:pl-[1.5rem] md:pl-[1rem] sm:pl-0 2xl:h-1/3 xl:h-1/3 lg:h-1/3 md:h-1/3 sm:h-1/2 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center">
            <div className="flex items-center gap-4 2xl:gap-4 xl:gap-4 lg:gap-2 md:gap-2 sm:gap-2">
              <img
                src="/img/icons/phone.png"
                alt=""
                className="h-5 2xl:h-5 xl:h-5 lg:h-5 md:h-4 sm:h-[0.95rem]"
              />
              <Link to="tel:898038829">
                <span className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-[0.7rem]">
                  +91 8980388129
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4 2xl:gap-4 xl:gap-4 lg:gap-2 md:gap-2 sm:gap-2">
              <img
                src="/img/icons/mail.png"
                alt=""
                className="h-5 2xl:h-5 xl:h-5 lg:h-5 md:h-4 sm:h-[0.95rem]"
              />
              <Link
                to="mailto:joshi.priyanshu999@gmail.com"
                className="flex items-center"
              >
                <span className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-[0.7rem]">
                  joshi.priyanshu999@gmail.com
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4 2xl:gap-4 xl:gap-4 lg:gap-2 md:gap-2 sm:gap-2">
              <img
                src="/img/icons/location-marker.png"
                alt=""
                className="h-5 2xl:h-5 xl:h-5 lg:h-5 md:h-4 sm:h-[0.95rem]"
              />
              <span className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-[0.7rem]">
                Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>
          <div>
            <img
              src="/img/icons/line.png"
              alt=""
              className="h-[0.17rem] w-60 2xl:w-52 xl:w-46 lg:w-44 md:w-36 sm:w-44 2xl:h-[0.17rem] xl:h-[0.17rem] lg:h-[0.16rem] md:h-[0.15rem] sm:h-[0.13rem]"
            />
          </div>
        </div>
        {/* Form */}
        <div className="w-[40rem] h-96 bg-[#161616] rounded-e-3xl 2xl:h-96 xl:h-96 lg:h-[24rem] md:h-[24rem] sm:h-96 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] md:w-[40rem] sm:w-screen 2xl:rounded-e-3xl xl:rounded-e-3xl lg:rounded-e-3xl md:rounded-e-3xl sm:rounded-none">
          <form method="post" action="/send">
            <div className="grid grid-cols-2 w-[40rem] h-[20rem] py-5 gap-3 px-8 2xl:py-5 xl:py-6 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-2 sm:gap-3 2xl:h-[20rem] xl:h-[20rem] lg:h-[2rem] md:h-[16rem] sm:h-[10rem] 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] md:w-[40rem] sm:w-screen 2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-8">
              <div className="flex flex-col col-span-0 text-[#c1c1c1]">
                <label className="text-sm leading-6">Your name</label>
                <input
                  type="text"
                  className="bg-[#252525] rounded-md h-8 px-2 outline-1"
                  name="userName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col col-span-3 text-[#c1c1c1]">
                <label className="text-sm leading-6">Your Email</label>
                <input
                  type="email"
                  className="bg-[#252525] rounded-md h-8 px-2 outline-1"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col col-span-4 text-[#c1c1c1]">
                <label className="text-sm leading-6">Your subject</label>
                <input
                  type="text"
                  className="bg-[#252525] rounded-md h-8 px-2 outline-1"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex flex-col col-span-4 text-[#c1c1c1]">
                <label className="text-sm leading-6">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  className="bg-[#252525] rounded-md resize-none px-2 py-1 outline-1 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-1"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="w-[40rem] flex justify-end px-8 pt-1 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] md:w-[40rem] sm:w-screen sm:left-1/2 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-center">
              <button
                type="submit"
                className="flex items-center justify-end bg-[#13FF00] rounded-lg px-5 py-[0.35rem] 2xl:static xl:static lg:static md:static sm:relative sm:-bottom-[10.3rem]"
                onClick={handleSendEmail}
              >
                <img src="/img/icons/mail-open.png" alt="" className="h-5" />
                <span className="px-2 text-black font-bold">Send</span>
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
