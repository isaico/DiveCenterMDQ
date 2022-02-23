import React from "react";

const PageHeadingText = (props) => {
  return (
    <>
      <h3 className="mx-3 text-2xl font-Poppins font-semibold text-gray-600"> {props.text} </h3>
    </>
  );
};

export default PageHeadingText;
