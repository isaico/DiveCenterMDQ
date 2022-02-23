import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import {GoLocation} from "react-icons/go"
import PageHeading from "../components/PageHeading/PageHeading";
import Mapa from "../components/PageHeading/Mapa";

const Contact = () => {
  return (
    <div className="max-w-7xl  mx-auto py-16 sm:py-24 lg:py-32 ">
      <div className="max-w-[50%] mx-auto">
        <div className="flex justify-center items-center my-5">
          <PageHeading text="Contacto" icon={FaTelegramPlane} />
        </div>
        <div>
          <h3 className="text-xl my-10  font-semibold text-gray-600">
            {" "}
            Si tenes dudas, no esperes mas y escribinos en cualquiera de
            nuestras redes! estamos disponibles 24/7 para asesorarte!
          </h3>
          <div className="flex justify-between mx-auto">
            <div className="contact-btn">
              <a href="#">
                {" "}
                <FaFacebook className="md:w-10 md:h-10 " />
              </a>
            </div>
            <div className="contact-btn">
              <a href="#">
                <FaInstagram className="md:w-10 md:h-10" />
              </a>
            </div>
            <div className="contact-btn">
              <a href="#">
                {" "}
                <FaWhatsapp className="md:w-10 md:h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-wrap my-5 ">
          <h3 className="text-xl  text-gray-800 font-medium">
            Informacion
          </h3>
          <div className="flex flex-col w-full my-10" id="contact-info">
            <div className="contact-col bg-slate-300">
              <div className="contact-col-title">Dirección</div>
              <div className="contact-col-title">Calle asdasd423</div>
            </div>
            <div className="contact-col bg-slate-100">
              <div className="contact-col-title">Teléfono</div>
              <div className="contact-col-title">223-1111111</div>
            </div>
            <div className="contact-col bg-slate-300">
              <div className="contact-col-title">E-mail</div>
              <div className="contact-col-title">asdasd@asdasd.com</div>
            </div>
            {/*  */}
          </div>
          <div className="drop-shadow-lg">
              <h3 className=" text-xl mb-5 text-gray-800 font-medium">
                Ubicacion
              </h3>
              <Mapa />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
