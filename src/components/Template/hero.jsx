import React from 'react'
import profil from '../image/profilIMG.png'
import Label from '../elements/label';
import Description from '../organism/description';
import Button from '../elements/button';
import Image from '../elements/image';
import Navbar from '../organism/navbar';

function Hero() {

  const tombol=[
    {nama:'Hubungi Saya'},
    {nama:'Download CV'}
  ]

  return (
    <>
    <Navbar/>
      <div className='flex mt-11'>
        <div className='flex-auto w-14 ml-14'>
          <Image

            gambar='textporfolio.png'
          />
        </div>
        <div className='flex-auto ml-8 mt-16'>
        <Description>
          <Label
            className='text-2xl text-white font-hammer'
            label='HI,KENALIN AKU'
          />
          <Description.Judul
            className='text-6xl text-white font-hammer'
            title='ACHMAD ILHAM MARTIN'
          />
          <hr />
          <Description.Isi 
            className='text-4xl mt-3 text-gray-300 font-potrait'
            paragraf='Web Developer dan Android Developer'
          />

          {tombol.map((e)=>(
            <Button 
            className='border-2 mr-3 rounded-sm hover:bg-white hover:text-black mt-10 text-white text-xs px-3 py-2'
            nama={e.nama}
          />
          ))}

        </Description>
        </div>
        <div className='flex-auto'>
          <Image
          className='ml-16 -mt-4'
          gambar='profilIMG.png'
          alt='ini gambar'
          />
        </div>
      </div>
    </>
  )
}
export default Hero;