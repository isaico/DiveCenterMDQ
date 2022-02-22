import React from 'react';
import {FaFacebook ,FaInstagram, FaWhatsapp} from "react-icons/fa"


//terminar modularizacion de iconos

const Footer = () => {
  return (
    <div className='bg-cyan-700 py-6 ' >
        
        <div className="  flex justify-center space-x-8 text-gray-100 pb-5">
            {/* <SocialIcon ></SocialIcon> */}
            <FaFacebook className='hover:text-red-400 cursor-pointer md:w-8 h-8 '/>
            <FaInstagram className='hover:text-red-400 cursor-pointer md:w-8 h-8 ' />
            <FaWhatsapp className='hover:text-red-400 cursor-pointer md:w-8 h-8 '/>

        </div>
        <div className="text-gray-100 ">
            
            <h3> &copy; 2022 Divecenter MDQ, Todos los derechos reservados </h3>
        </div>
    </div>
  );
}

export default Footer;
