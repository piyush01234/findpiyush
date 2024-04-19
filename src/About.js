import React from "react";
import img from "./asset/images/imagepiyush.png";
import { aboutDescription, cardData, skills } from "./data/data";
const About = () => {
  return (
    <div>
      <div className="aboutDiv min-h-[100vh] text-center bg-purple-500">
        <h2 className="text-4xl w-fit py-2 mx-auto text-white border-b-4 rounded-sm border-white ">
          About{" "}
        </h2>
        <div className="flex max-sm:flex-col max-sm:items-center   mt-10">
          <div className="  border-none outline-none flex flex-col gap-4 w-1/2 max-sm:w-full items-center ml-2  justify-center">
            <img
              className=" drop-shadow-2xl border-none outline-none imgclip "
              alt=""
            />
            <div>
              <p className=" text-purple-900 drop-shadow-xl font-bold text-2xl">
                Who's this guy?{" "}
              </p>
              <p className="px-10  my-4 drop-shadow-xl text-center text-xl text-white">
                {aboutDescription}
              </p>
            </div>
          </div>

          <div className="skills flex flex-col  max-sm:w-full gap-2 w-1/2 flex-wrap justify-center ">
            {skills.map((item, index) => (
              <p
                key={index}
                className="w-full text-left rounded-sm    py-0  bg-white   my-1 text-purple-700"
              >
                {" "}
                <span className="text-center px-4 py-1 w-32  hover:scale-110 inline-block bg-purple-700 text-white">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex max-lg:flex-wrap justify-center gap-6 mt-6">
          {cardData.map((item,index) => {
            return (
              <div key={index} className="w-72 max-sm:w-[70vw] rounded-md   bg-white  text-purple-700 my-6">
                <img src={item.img} alt="" className="w-full h-48"  />
                <p className=" text-purple-900 drop-shadow-xl font-semibold text-2xl">{item.title}</p>
                <p className="text-lg mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
