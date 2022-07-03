import React from 'react';

const GalleryCard = (props) => {
  return (
    <div className='relative hover:scale-[104%] transition duration-300 ease-in-out'>
      <img src={props.bg} alt='/' className='w-full h-full object-cover rounded-md' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-md'>
        <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>{props.text}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
