import React from 'react';
import {FaFacebook ,FaInstagram, FaWhatsapp} from "react-icons/fa"
import SocialIcon from '../components/SocialIcon';

//terminar modularizacion de iconos

const Footer = () => {
  return (
    <div >
        <div className="">

        </div>
        <div className="  flex justify-center space-x-8 text-gray-500 mt-5 pb-5">
            {/* <SocialIcon ></SocialIcon> */}
            <FaFacebook className='hover:text-red-500 cursor-pointer md:w-8 h-8 '/>
            <FaInstagram className='hover:text-red-500 cursor-pointer md:w-8 h-8 ' />
            <FaWhatsapp className='hover:text-red-500 cursor-pointer md:w-8 h-8 '/>

        </div>
        <div className="text-gray-500 mb-5">
            
            <h3> &copy; 2022 Divecenter MDQ, Todos los derechos reservados </h3>
        </div>
    </div>
  );
}

export default Footer;
