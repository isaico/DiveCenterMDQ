import React, { useState } from "react";
import CoursesList from "./CoursesList";
import callouts from "../../helpers/dataCourses";
import PageHeading from "../../components/PageHeading/PageHeading";
import { BiBook } from "react-icons/bi";

const CoursesContainer = () => {
  // const [course, setCourses] = useState([])
  // setCourses(callouts)
  console.log(callouts);
  return (
    <div className="bg-gray-100">
        <div  className="max-w-7xl mx-auto">
          <div
            id="coursesList"
            className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"
          >
            <PageHeading text="Cursos" icon={BiBook} />
            <CoursesList courses={callouts} />
          </div>
        </div>
      
    </div>
  );
};

export default CoursesContainer;
