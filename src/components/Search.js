import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16' title='book' id='book'>
      <div>
        <div className='border rounded-md border-sky-700 text-center'>
          <p>GET ADDITIONAL 10% OFF</p>
          <p className='py-4'>6 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option> Jakarta</option>
              <option> Bekasi</option>
              <option> Bogor</option>
              <option> Bandung</option>
              <option> Bandung</option>
              <option> Bali</option>
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-In</label>
            <input type='date' className='border rounded-md p-2' />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input type='date' className='border rounded-md p-2' />
          </div>
          <div>
            <button className='w-full my-4'>Rates & Availabilities</button>
          </div>
        </form>
      </div>
      <div className='lg:col-span-2 flex flex-col justify-evenly ml-2'>
        <div>
          <h2 className='text-center lg:text-left'>LUXURY INCLUDED VACATION COUPLES OR FAMILY</h2>
          <p className='py-4 text-justify'>
            Come experience the wonderfull of Indonesia all-inclusive vacation for couples or family at 4-Stars/5-Stars Resort. Our luxury resorts, set along the most gorgeous and exquisite View in
            Saint Jakarta, Bandung, Bekasi, Bogor, Depok, Bali, and many more, feature unlimited gourmet dining, unique bars serving premium liquors and wines, including complimentary green fees at
            our golf resorts. If you planning a wedding, DANUCATION is the leader in Indonesia destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-1 pl-4 text-center lg:text-left'>LEADING SERVICES</h3>
              <p className='py-1 pl-4 text-center lg:text-left'>ALL-INCLUSIVE COMPANY FOR 12 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-1 pl-4 text-center lg:text-left'>BEST EXPERIENCE</h3>
              <p className='py-1 pl-4 text-center lg:text-left'>ONE OF THE BEST DESTINATION IN THE WORLD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
