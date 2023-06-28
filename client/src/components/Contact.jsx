import React, { useState } from "react";
import useIntersection from "../utils/useIntersection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const port = process.env.PORT || 8000;

    const res = await fetch(`http://www.localhost:${port}/send`, {
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
        className={`text-3xl font-semibold text-center pt-10 pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:7%_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-2/3 opacity-0"
        }`}
        ref={myRef}
      >
        Get in touch with me
      </h1>
      <div className="flex justify-center pt-10 pb-20 font-['Rubik']">
        <div className="bg-[#252525] h-[24rem] w-96 flex flex-col justify-evenly rounded-s-3xl">
          <div className="flex items-center justify-end">
            <h1 className="text-xl font-medium tracking-widest">CONTACT</h1>
            <img
              src="/img/icons/line.png"
              alt=""
              className="h-[0.17rem] w-52"
            />
          </div>
          <div className="flex flex-col justify-between h-1/3 pl-[4.5rem]">
            <div className="flex items-center gap-4">
              <img src="/img/icons/phone.png" alt="" className="h-5" />
              <span className="">+91 8980388129</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/img/icons/mail.png" alt="" className="h-5" />
              <span className="">joshi.priyanshu999@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/img/icons/location-marker.png"
                alt=""
                className="h-5"
              />
              <span className="">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div>
            <img
              src="/img/icons/line.png"
              alt=""
              className="h-[0.17rem] w-60"
            />
          </div>
        </div>
        <div className="w-[40rem] h-[24rem] bg-[#161616] rounded-e-3xl ">
          <form>
            <div className="grid grid-cols-2 w-[40rem] h-[20rem]  py-5 gap-3 px-8">
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
                  className="bg-[#252525] rounded-md resize-none px-2 outline-1 py-1"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="w-[40rem] flex justify-end px-8 pt-1">
              <button
                type="submit"
                className="flex items-center justify-end bg-[#13FF00] rounded-lg px-5 py-[0.35rem]"
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
