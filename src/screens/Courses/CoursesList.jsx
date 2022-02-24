import React from "react";
import Course from "./Course";

const CoursesList = (props) => {
  return (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
      {props.courses.map((course) => (
        <Course key={props.courses.id}courseProps={course} />
      ))}
    </div>
  );
};

export default CoursesList;
