import React, { useEffect } from 'react'
import Image from '../elements/gambar';
import Description from '../organism/description';
import Button from '../elements/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tentangku() {
  const kontak= [
    {link:'',logo:'instagram.png'},
    {link:'',logo:'twitter.png'},
    {link:'',logo:'whatsapp.png'}
  ]

  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[])

  return (
    <div className='flex flex-col  container bg-inherit -mt-20 mb-0 lg:flex-row'>
      <div className='flex-1 mr-4 mt-1' data-aos="zoom-in-left">
      <Image
          className=' w-5/12 mx-auto -mt-7 lg:ml-16 lg:w-10/12 lg:mt-8'
          gambar='profil2.png'
        />
      </div>

      <div className='flex-1 mt-2 text-center lg:text-left lg:mt-32 text-white font-potrait '>
      <Description>
            <Description.Judul
                
                className='text-sm hidden lg:text-left  font-hammer text-amber-300'
                title='-Tentangku'
            />
            <Description.Judul
                className='text-2xl lg:text-4xl lg:mt-6 lg:mb-4 lg:text-left font-oswald text-white'
                title='Deskripsi Singkat Tentang Diriku'
            />
            <hr className='hidden' />
            <Description.Isi
                className='text-md mt-2 px-6 lg:px-0 lg:text-lg lg:mt-4'
                paragraf='Perkenalkan aku Achmad Ilham martin. 
                Yang biasa Di Paggil Ilham, Lahir di kediri Pada 
                tanggal 04 April 2003 aku sekarang menempuh pendidikan 
                di Politeknik Negeri Madiun aku berkeinginan Menjadi 
                seorang Fulstuck web developer, untuk saat ini pemrograman 
                yang aku ingin pelajari yaitu yang berkaitan dengan javascript'
            />
            <div className=' mx-auto lg:flex mt-20'>
              <Button 
                className='ml-7 lg:mx-0 border-2 mr-10 rounded-sm hover:bg-white hover:text-black font-hammer text-white text-xs px-3 py-2'
                nama='Tentangku'
              />
              
              {kontak.map((e)=>(
                <a href='/' className='mr-4 hidden'>
                <Image
                  className='w-8'
                  gambar={e.logo}
                />
              </a>
            ))}
            </div>
        </Description>
      </div>
        
    </div>
  )
}
export default Tentangku;