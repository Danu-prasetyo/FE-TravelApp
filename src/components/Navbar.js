import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h2 className={logo ? 'hidden' : 'block cursor-pointer'}>
          <Link className='cursor-pointer' activeClass='active' to='home' spy={true} smooth={true} duration={1000}>
            DANUCATION
          </Link>
        </h2>
      </div>
      <ul className='hidden md:flex md:ml-[-150px]'>
        <li>
          <Link className='cursor-pointer' activeClass='active' to='home' spy={true} smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer' activeClass='active' to='destination' spy={true} smooth={true} duration={1000}>
            Destination
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer' activeClass='active' to='book' spy={true} smooth={true} duration={1000}>
            Book
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer' activeClass='active' to='view' spy={true} smooth={true} duration={1000}>
            View
          </Link>
        </li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger Menu icon */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiMenu size={20} />}
      </div>

      {/* Dropdown Menu */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-6 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>DANUCATION</h1>
          <li className='border-b border-slate-300'>
            <Link activeClass='active' to='home' spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='border-b border-slate-300'>
            <Link activeClass='active' to='destination' spy={true} smooth={true} duration={500}>
              Destination
            </Link>
          </li>
          <li className='border-b border-slate-300'>
            <Link activeClass='active' to='book' spy={true} smooth={true} duration={500}>
              Book
            </Link>
          </li>
          <li className='border-b border-slate-300'>
            <Link activeClass='active' to='view' spy={true} smooth={true} duration={500}>
              View
            </Link>
          </li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button className=''>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
