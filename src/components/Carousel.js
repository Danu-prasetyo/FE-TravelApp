import React, { useState } from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZG9uZXNpYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZG9uZXNpYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=60',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>{index === slide && <img className='w-full rounded-md' src={item.url} alt='/' />}</div>
      ))}
    </div>
  );
};

export default Carousel;
