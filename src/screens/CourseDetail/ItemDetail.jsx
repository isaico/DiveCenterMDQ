import React from 'react';
import sdiLogo from '../../assets/sdilogo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import DetailGrid from './DetailGrid';
const ItemDetail = ({ item }) => {
  return (
    <div className=" mx-auto py-16 sm:py-24 lg:py-32 ">
      <div className="  relative ">

       <Link to="/cursos">
          <AiOutlineArrowLeft className="md:w-10 h-10 absolute top-0 left-0 z-50 hover:cursor-pointer text-gray-200 ml-5 hover:scale-105 hover:text-red-500 transition-all ease-out duration-300">  
          </AiOutlineArrowLeft>
          
       </Link>
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="w-full h-96 object-center object-cover blur  "
        />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10/12 bg-black/40 p-10 border-2">
          <h3 className="font-bold text-white text-3xl drop-shadow-lg p-2">
           <span className='text-red-500'> {item.category} </span>
            {item.name}
          </h3>
          <h4 className="font-normal text-white text-xl drop-shadow-lg">
            {item.description}
          </h4>
        </div>
        <img
          src={sdiLogo}
          alt="sdi,tdi logos"
          className="w-auto  object-center  absolute bottom-0"
        />
      </div>
      <div className="w-10/12 mx-auto bg-white/50 mt-20">
        
      <DetailGrid item={item}/>
      </div>
    </div>
  );
};

export default ItemDetail;
