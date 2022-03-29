import React from 'react';
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import PageHeading from '../components/PageHeading/PageHeading';
import Mapa from '../components/PageHeading/Mapa';

const Contact = () => {
  return (
    <div className=" mx-auto py-16 sm:py-24 lg:py-32 sea-bg">
      <div className="max-w-[50%] mx-auto ">
        <div className="flex justify-center items-center my-5">
          <PageHeading text="Contacto" icon={FaTelegramPlane} />
        </div>
        <div>
          <h3 className="text-xl my-10 pb-5 font-semibold text-gray-600">
            {' '}
            Si tenes dudas, no esperes mas y escribinos en cualquiera de
            nuestras redes! estamos disponibles 24/7 para asesorarte!
          </h3>
          <h3 className="contact-section-heading">Nuestras Redes</h3>
          <div className="flex justify-evenly mx-auto ">
            <div className="contact-btn">
              <a href="#">
                {' '}
                <FaFacebook className="md:w-12 md:h-12 text-sky-500" />
              </a>
            </div>
            <div className="contact-btn">
              <a href="#">
                <FaInstagram className="md:w-12 md:h-12 text-pink-500" />
              </a>
            </div>
            <div className="contact-btn">
              <a href="#">
                {' '}
                <FaWhatsapp className="md:w-12 md:h-12 text-teal-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-wrap my-5 ">
          <h3 className="contact-section-heading">Informacion</h3>
          <div className="flex flex-col w-full" id="contact-info">
            <div className="contact-col bg-cyan-800 text-gray-200">
              <div className="contact-col-title flex items-center">
                {' '}
                <GoLocation className="mr-2" />
                Dirección
              </div>
              <div className="contact-col-title">Calle asdasd423</div>
            </div>
            <div className="contact-col bg-slate-100">
              <div className="contact-col-title flex items-center">
                <BsTelephone className="mr-2" />
                Teléfono
              </div>
              <div className="contact-col-title">223-1111111</div>
            </div>
            <div className="contact-col bg-cyan-800 text-gray-200">
              <div className="contact-col-title flex items-center">
                <GoMail className=" mr-2" />
                E-mail
              </div>
              <div className="contact-col-title">asdasd@asdasd.com</div>
            </div>
            {/*  */}
          </div>
          <div className="drop-shadow-lg">
            <h3 className="contact-section-heading">Ubicacion</h3>
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
