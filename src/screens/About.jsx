import React from "react";
import logo from "../assets/logo.jpg";
import AboutIcons from "../components/AboutIcons";

const About = () => {
  return (
    <div id="about" className="bg-cyan-100  ">
      <div className=" bg-cyan-800">
        <div className="flex justify-center py-10 items-center ">
          <img
            class=" mr-4 lg:h-20  w-auto sm:h-12 h-8"
            src={logo}
            alt="logo"
          />
          <h2 className="text-indigo-100 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl]">
            {" "}
            DiveCenter MDQ
          </h2>
        </div>
        <div className="flex justify-center w-full text-gray-200 ">
          <h3 className="w-1/2 my-16 text-2xl leading-10">
            <span className="text-indigo-200  font-semibold ">MDQ BUCEO</span>{" "}
            tiene todo lo que necesitas .. nos dedicamos exclusivamente a esta
            actividad y contamos con instalaciones propias 🤿 ( Nos estamos
            renovando para brindarte un mejor servicio )
          </h3>
        </div>
      </div>
        <div className="wave-bg w-full h-40"></div>

      <AboutIcons />
    </div>
  );
};

export default About;
