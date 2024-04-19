import React, { useState } from "react";
import { LiaAutoprefixer } from "react-icons/lia";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { BsLinkedin } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import {  toast } from "react-toastify";
const Contact = () => {
  const [form, setForm] = useState({
    to_name: "Piyush Munjal",
    from_name: "",
    message: "",
    email_id: "",
  });
  const [errors, setErrors] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    // toast.info("hello",{position: "top-right",
    // autoClose: 5000,
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
    // theme: "colored",
    // transition: Bounce,});
    const err = {};
    if (
      form.email_id == "" &&
      !String(form.email_id)
        .toLowerCase()
        .match(
          /^(([^<div>()[\]\\.,;:\s@"]+(\.[^<div>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      err.email = "Please enter a valid e-mail.";
    }
    if (form.from_name?.length < 3) {
      err.name = "Please enter a valid name.";
    }
    if (form.message?.length < 10) {
      err.message = "Please enter a valid message with atleast 10 characters.";
    }
    setErrors(err);
    console.log();
    if (JSON.stringify(err) == "{}") {
      toast.promise(
        emailjs
          .send("service_qd5nrgt", "template_4ekdwgj", form, {
            publicKey: "GgXw8LzvO3KDmriMY",
          })
          .then(
            (response) => {
              // toast.success("Message sent succesfully");
              setForm({
                to_name: "Piyush Munjal",
                from_name: "",
                message: "",
                email_id: "",
              });
            },
            (err) => {
              // toast.warn("Some error in sending the message");
              console.log("FAILED...", err);
            }
          ),
        {
          pending: "Please wait",
          success: " Message sent succesfully👌",
          error: "Some error in sending the message 🤯",
        }
      );
    }
  };
  return (
    <div className="h-[90vh]">
      <div className=" flex flex-col gap-6 h-full text-center bg-purple-700 py-20 ">
        <div>
          <h2 className="text-4xl w-fit  mx-auto text-white border-b-4 rounded-sm border-white ">
            Contact{" "}
          </h2>
          <p className="text-white text-xl my-4">Have a question?</p>
        </div>

        <form
          className=" w-1/2 flex max-sm:w-full px-4 mb-10  gap-4 flex-col justify-center items-center mx-auto"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div className="flex flex-col w-full justify-start ">
            <input
              className="w-full py-2 px-4"
              placeholder="Name"
              type="text"
              value={form.from_name}
              onChange={(e) => {
                setForm({ ...form, from_name: e.target.value });
              }}
            />
            {errors?.name && (
              <p className="text-white border-b-red-600 border-b-2 w-fit text-left ">
                {errors?.name}
              </p>
            )}
          </div>
          <div className=" flex flex-col w-full justify-start">
            <input
              className="w-full py-2 px-4"
              placeholder="Enter email"
              type="email"
              value={form.email_id}
              onChange={(e) => {
                setForm({ ...form, email_id: e.target.value });
              }}
            />
            {errors?.email && (
              <p className="text-white border-b-red-600 border-b-2 w-fit text-left ">
                {errors?.email}
              </p>
            )}
          </div>
          <div className=" flex flex-col w-full justify-start">
            <textarea
              className="w-full py-2 px-4"
              placeholder="Your Message"
              type="text"
              name="message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
              }}
            />
            {errors?.message && (
              <p className="text-white border-b-red-600 border-b-2 w-fit text-left ">
                {errors?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="hover:bg-white  active:drop-shadow-xl hover:text-purple-900 active:bg-purple-700 active:text-white active:outline-purple-700 active:border-white myBtn mt-4 rounded-md   text-xl py-1 px-6 outline-purple-700 text-center      text-white  border-2"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-purple-900  relative ">
        <div className=" w-16 h-16 flex  justify-center rounded-md absolute -top-10 -translate-x-10 left-1/2 ">
          <LiaAutoprefixer
            className="w-full h-full fill-gray-300 cursor-pointer hover:fill-purple-400"
            onClick={() => {
              window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
              });
            }}
          />
        </div>
        <div className=" flex justify-center items-center py-10 ">
          <a
            href="https://www.linkedin.com/in/piyush-munjal31/"
            className="p-4 "
          >
            <BsLinkedin  className="fill-white  mx-2" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/piyush7435/"
            className="p-4 "
          >
            {/* <SlSocialInstagram className="fill-white mx-2" /> */}
            {/* <PiInstagramLogoFill  className="fill-white  mx-2" /> */}
            <ImInstagram   className="fill-white  mx-2"/>
          </a>
          <a
            target="_blank"
            href="https://github.com/piyush01234"
            className="p-4 "
          >
            <FaGithub className="fill-white mx-2" />
          </a>
        </div>

        <div className="text-[#f5f5f5] ">
          PIYUSH MUNJAL <span className="text-gray-300">©2023</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
