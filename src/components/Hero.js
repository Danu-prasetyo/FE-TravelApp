import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import IndoVid from '../assets/indonesia.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative' title='home' id='home'>
      <video className='w-full h-full object-cover' src={IndoVid} autoPlay loop muted />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute justify-center text-center text-white p-4 top-0 w-full h-full flex flex-col'>
        <h1>Premium Class Travel</h1>
        <h2 className='py-4'>Best Tourist Destinations in Indonesia</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type='text' placeholder=' Search Destinations' />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
