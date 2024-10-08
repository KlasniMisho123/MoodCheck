import React from 'react';

function Loading() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center '>
      LOADING...
      <i className="fa-solid text-slate-800 fa-spinner animate-spin text-4xl sm:text-5xl"></i>
    </div>
  );
}

export default Loading;
