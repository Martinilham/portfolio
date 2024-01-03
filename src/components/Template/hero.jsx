import React from 'react'
import profil from '../image/profilIMG.png'
import Label from '../elements/label';
import Description from '../organism/description';
import Button from '../elements/button';
import Image from '../elements/gambar';
import Navbar from '../organism/navbar';

function Hero() {

  const tombol=[
    {nama:'Hubungi Saya'},
    {nama:'Download CV'}
  ]

  return (
    <>
    <Navbar/>
      <div className='mx-auto flex  flex-col text-center  -mt-44 lg:flex lg:text-left lg:flex-row lg:rotate-0  lg:mt-11'>
        <div className='flex-1 w-14 lg:ml-14 lg:-mt-7 mx-auto lg:mx-0 rotate-90 lg:rotate-0 lg:flex-auto'>
          <Image
            className=' w-10 lg:w-14'
            gambar='textporfolio.png'
          />
        </div>
        <div className='flex flex-col-reverse lg:flex lg:ml-6 lg:flex-row'>
        <div className='flex-1 lg:flex-auto  lg:mt-16'>
        <Description>
          <Label
            className='text-md lg:text-2xl text-white mt-4  lg:mt-0 font-hammer'
            label='HI,KENALIN AKU'
          />
          <Description.Judul
            className='text-4xl lg:text-6xl text-white font-hammer'
            title='ACHMAD ILHAM MARTIN'
          />
          <hr className='hidden lg:block'/>
          <Description.Isi 
            className='text-2xl w-1/2 mx-auto lg:w-full lg:mx-0 lg:text-4xl mt-3 text-gray-300 font-potrait'
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
        <div className='flex-1 lg:flex-auto '>
          <Image
          className=' w-6/12 -mt-40 lg:w-full lg:-mt-4 mx-auto'
          gambar='profilIMG.png'
          alt='ini gambar'
          />
        </div>
        </div>
      </div>
    </>
  )
}
export default Hero;