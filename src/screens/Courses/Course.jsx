import React from "react";

const Course = ({ courseProps }) => {
    console.log(courseProps);
    return (
        <div key={courseProps.id} className="group relative  ">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:grayscale-[70%]  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1  ">
                <img
                    src={courseProps.imageSrc}
                    alt={courseProps.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:scale-105 group-hover:blur-[1px]  transition-all ease-in "
                />
            </div>
                <span
                    href="#"
                    className="text-white bg-gray-800 font-bold text-lg cursor-pointer  absolute top-1/3 left-1/2  -translate-x-1/2 py-2 px-4 rounded-full font-Poppins opacity-0 group-hover:cursor-pointer group-hover:opacity-100 group-hover:transition-all ease duration-300 hover:bg-cyan-700 z-50"
                >
                    Saber mas
                </span>
            <h3 className="mt-6 text-sm text-gray-500">
                <a href={courseProps.href}>
                    <span className="absolute inset-0" />
                    {courseProps.description}
                </a>
            </h3>
            <h3 className="text-base font-semibold text-gray-900">
                <span className="pr-1 text-red-500">
                    {courseProps.category}
                </span>
                {courseProps.name}
            </h3>
        </div>
    );
};

export default Course;
