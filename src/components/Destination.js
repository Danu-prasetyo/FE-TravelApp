import React from 'react';
import Bali from '../assets/bali.jpg';
import Jakarta from '../assets/jakarta.jpg';
import Bandung from '../assets/bandung.jpg';
import Bogor from '../assets/bogor.jpg';
import Bekasi from '../assets/bekasi.jpg';

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center' title='destination' id='destination'>
      <h1>All-Inclusive Resort</h1>
      <p className='py-4'>On the Best Locations</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover rounded-sm col-span-2 md:col-span-3 row-span-2 hover:scale-[103%] transition duration-300 ease-in-out' src={Bali} alt='/' />
        <img className='w-full h-full object-cover rounded-sm hover:scale-[103%] transition duration-300 ease-in-out' src={Jakarta} alt='/' />
        <img className='w-full h-full object-cover rounded-sm hover:scale-[103%] transition duration-300 ease-in-out' src={Bekasi} alt='/' />
        <img className='w-full h-full object-cover rounded-sm hover:scale-[103%] transition duration-300 ease-in-out' src={Bandung} alt='/' />
        <img className='w-full h-full object-cover rounded-sm hover:scale-[103%] transition duration-300 ease-in-out' src={Bogor} alt='/' />
      </div>
    </div>
  );
};

export default Destination;
