import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 pt-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>
            <Link className='cursor-pointer' activeClass='active' to='home' spy={true} smooth={true} duration={1000}>
              DANUCATION
            </Link>
          </h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <a href='https://www.youtube.com/channel/UC1KUO-C5lFWyMq2ZRcL41Mw' target='blank'>
              <FaYoutube className='icon' />
            </a>
            <FaPinterest className='icon' />
            <a href='https://instagram.com/danugans_' target='blank'>
              <FaInstagram className='icon' />
            </a>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
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
        </div>
      </div>

      <div>
        <p className='text-center mt-14 pb-2'>
          Made with ❤️ by{' '}
          <span className='hover:text-blue-700'>
            <a href='https://instagram.com/danugans_' target='blank'>
              Danu Prasetyo
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
