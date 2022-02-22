import React from "react";
import { FaTelegramPlane } from "react-icons/fa"; 
import PageHeading from "../components/PageHeading/PageHeading";
import Mapa from "../components/PageHeading/Mapa";
const Contact = () => {
  return (
    <div className="max-w-7xl  mx-auto py-16 sm:py-24 lg:py-32 ">
      <div className="flex justify-center items-center my-5">
        <PageHeading text="Contact" icon={FaTelegramPlane}/>
      </div>
      <div className="flex">
        <div>
          <h3>Ubicacion</h3>
          <Mapa/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
