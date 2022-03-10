import React from 'react';

const GridText = ({ h3, h4 }) => {
  return (
    < >
      <h3 className='text-2xl m-2 font-semibold  text-sky-600 p-1 underline decoration-wavy underline-offset-4 decoration-1'>{h3}</h3>
      <h4 className='text-l py-4'>{h4}</h4>
    </>
  );
};

export default GridText;
