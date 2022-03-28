import React from "react";
import logo from "../assets/logo.png";
import AboutIcons from "../components/AboutIcons";

const About = () => {
  return (
    <div id="about" className=" pt-16 bg-gray-100">
       <div className="wave-bg w-full h-40 rotate-180"></div>
      <div className=" bg-cyan-800">
        <div className="flex justify-center py-10 items-center ">
          <img
            class=" mr-4 lg:h-20  w-auto sm:h-12 h-8"
            src={logo}
            alt="logo"
          />
          <h2 className="text-indigo-100 font-Poppins text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl]">
            {" "}
            DiveCenter MDQ
          </h2>
        </div>
        <div className="flex justify-center w-full text-gray-200 ">
          <h3 className="w-2/3 my-16 text-3xl leading-10">
            <span className="text-indigo-200  font-semibold text-2xl">MDQ BUCEO</span>{" "}
            tiene todo lo que necesitas .. "nos dedicamos exclusivamente a esta
            actividad y contamos con instalaciones propias 🤿" <br/>( Nos estamos
            renovando para brindarte un mejor servicio )
          </h3>
        </div>
      </div>
        <div className="wave-bg w-full h-40"></div>
       

      <AboutIcons />
        <div className=" w-2/3 mx-auto  text-gray-500 ">
          <h3 className=" py-16 text-2xl leading-10"> En {" "}
            <span className="text-indigo-300  font-semibold text-2xl">DIVECENTERMDQ</span> 
            , contamos con la tecnologia mas avanzada en equipamientos y trajes para que obtengas la mejor capacitacion posible!!...y no solo eso,
            vas a poder obtener certificaciones de  <spa className="text-indigo-300  font-semibold text-2xl">nivel internacional!!</spa>
          </h3>
        </div>
    </div>
  );
};

export default About;
