import React from "react";

const Course = ({courseProps}) => {
    console.log(courseProps)
  return (
    <div key={courseProps.id} className="group relative ">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden   group-hover:grayscale-[70%] group-hover:blur-[1px] sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img 
          src={courseProps.imageSrc}
          alt={courseProps.imageAlt}
          className="w-full h-full object-center object-cover group-hover:scale-105 transition-all ease-in "
        />
      </div>
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
