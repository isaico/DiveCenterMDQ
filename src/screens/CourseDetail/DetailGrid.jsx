import React from 'react';
import GridText from './GridText';
import {BsCheckAll} from 'react-icons/bs'

const DetailGrid = ({ item }) => {
  return (
    <div className=" grid gap-6 grid-cols-8 auto-rows-min  ">
      <div className="bg-gray-200 col-start-1 col-end-9 p-4 drop-shadow-lg rounded-xl content-center">
        <GridText h3={'Descripcion'} h4={item.detailDesc}></GridText>
      </div>
      <div className="col-start-1 col-end-5 row-span-2 rounded-xl drop-shadow-lg  md:place-self-center lg:place-self-auto   ">
        <img
          src={item.detailImage}
          className="object-cover object-center h-full  rounded-xl"
          alt={item.detailImageAlt}
        />
      </div>

      <div className="bg-sky-100 col-start-5 col-end-9  p-4  rounded-xl border-gray-400 drop-shadow-lg ">
        <GridText h3={'A quien esta Orientado?'} h4={item.detailOrientacion} />
      </div>
      <div className="bg-sky-100 col-start-5 col-end-9  p-4  rounded-xl border-gray-400 drop-shadow-lg ">
        <GridText
          h3={'Pre-Requisitos'}
          h4={
            'El estudiante debe poseer los siguientes pre-requisitos para adentrarse en este curso:'
          }
        />
        <ul className="list-none">
          {item.detailReqList?.map((value, index) => (
            <li
              className="bg-slate-300 p-3 flex rounded-md items-center  my-1 text-left"
              key={index}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200  col-span-full p-4 border-2 rounded-xl  drop-shadow-lg ">
        <GridText h3={'Lo que se espera aprender'} h4={item.detailExpected} />
        <div className="grid grid-cols-6 gap-4 my-6">
          {item.detailSkillArr?.map((value, index) => (
            <div
              className="bg-slate-300 rounded-md p-3 flex items-center justify-center drop-shadow-sm "
              key={index}
            >
              <BsCheckAll className='w-10 min-h-10'/><p className="font-medium italic"> {value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailGrid;
