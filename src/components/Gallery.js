import React from 'react';
import Bali from '../assets/bali.jpg';
import Jakarta from '../assets/jakarta.jpg';
import Bandung from '../assets/bandung.jpg';
import Bogor from '../assets/bogor.jpg';
import Bekasi from '../assets/bekasi.jpg';
import Depok from '../assets/depok.jpg';
import GalleryCard from './GalleryCard';

const Gallery = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4' title='view' id='view'>
      <GalleryCard bg={Jakarta} text='Jakarta' />
      <GalleryCard bg={Bekasi} text='Bekasi' />
      <GalleryCard bg={Bogor} text='Bogor' />
      <GalleryCard bg={Bandung} text='Bandung' />
      <GalleryCard bg={Depok} text='Depok' />
      <GalleryCard bg={Bali} text='Bali' />
    </div>
  );
};

export default Gallery;
