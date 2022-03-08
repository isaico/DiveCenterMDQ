import React from 'react';
import sdiLogo from "../../assets/sdilogo.png"
const ItemDetail = ({ item }) => {
  return (
    <div className=" mx-auto py-16 sm:py-24 lg:py-32 ">
      <div className=" bg-gradient-to-b from-cyan-200 to-white-500 relative ">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="w-full h-96 object-center object-cover blur  "
        />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10/12 bg-black/40 p-10 border-2">
          <h3 className="font-bold text-white text-3xl drop-shadow-lg p-2">
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
      <div className="max-w-[50%] mx-auto ">
        <div className="flex justify-center items-center my-5"></div>
        <div>
          <h3 className="text-xl my-10  font-semibold text-gray-600">
            {' '}
            Si tenes dudas, no esperes mas y escribinos en cualquiera de
            nuestras redes! estamos disponibles 24/7 para asesorarte!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
