import React from 'react'
import Image from '../elements/image';
import Description from '../organism/description';
import Button from '../elements/button';

function Tentangku() {
  const kontak= [
    {link:'',logo:'instagram.png'},
    {link:'',logo:'twitter.png'},
    {link:'',logo:'whatsapp.png'}
  ]

  return (
    <div className='flex bg-inherit -mt-20 mb-0'>
      <div className='flex-1 mr-4 mt-1'>
      <Image
          className='ml-16 w-10/12 mt-8'
          gambar='profil2.png'
        />
      </div>

      <div className='flex-1 mt-32 text-white font-potrait '>
      <Description>
            <Description.Judul
                className='text-sm text-left font-hammer text-amber-300'
                title='Tentangku'
            />
            <Description.Judul
                className='text-4xl mt-6 mb-4 text-left font-oswald text-white'
                title='Deskripsi Singkat Tentang Diriku'
            />
            <hr />
            <Description.Isi
                className='text-lg mt-4'
                paragraf='Perkenalkan aku Achmad Ilham martin. 
                Yang biasa Di Paggil Ilham, Lahir di kediri Pada 
                tanggal 04 April 2003 aku sekarang menempuh pendidikan 
                di Politeknik Negeri Madiun aku berkeinginan Menjadi 
                seorang Fulstuck web developer, untuk saat ini pemrograman 
                yang aku ingin pelajari yaitu yang berkaitan dengan javascript'
            />
            <div className='flex mt-20'>
              <Button 
                className='border-2 mr-10 rounded-sm hover:bg-white hover:text-black font-hammer text-white text-xs px-3 py-2'
                nama='Tentangku'
              />
              {kontak.map((e)=>(
                <a href='/' className='mr-4 '>
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