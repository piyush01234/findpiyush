import React from "react";
import { aboutDescription, cardData, projectsCardData, skills } from "./data/data";
import { FaArrowRight } from "react-icons/fa6";
const Projects = () => {
  return (
    <div>
      <div className=" h-fit py-6 text-center bg-[#f5f5f5] ">
        <h2 className="text-4xl w-fit py-2 mx-auto text-purple-700 border-b-4 rounded-sm border-purple-700 ">
        Projects{" "}
        </h2>

        <div className="drop-shadow-xl flex flex-wrap justify-center gap-6 mt-6">
          {projectsCardData.map((item,index) => {
            return (
              <div key={index} className="relative w-[30rem] h-72 max-sm:w-[70vw] rounded-xl   bg-white  text-purple-700 my-6">
                {/* <div className=" absolute top-0 w-full h-full  hover:-z-10 hover:scale-90"  style={{ backgroundImage:`url(${item.img})`, backgroundSize:"cover" }} >
               
               </div> */}
               <img src={item.img} className="rounded-lg absolute hover:top-10  w-full h-full  " alt="" />
               <div className="rounded-lg flex-col  text-transparent hover:text-purple-900 hover:scale-y-105   hover:flex  justify-center items-center  !hover:hidden  hover:bg-white absolute top-0 w-full h-full z-10  " >
               <p className="  font-semibold text-2xl">{item.title}</p>
                {/* <p className="text-lg mt-2">{item.description}</p> */}
                <button
                onClick={()=>{window.open(item.link)}}
                className=" bg-transparent border-transparent active:drop-shadow-xl hover:border-purple-700  hover:bg-purple-700 hover:text-white myBtn mt-4 rounded-md  px-4 text-lg py-1   border-2"
              >
               Learn More
                <span>
                  <FaArrowRight className="   inline ml-1" />
                </span>
              </button>
               </div>
               </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
