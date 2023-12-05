import React from 'react'
import Profil from '../element/profil';

function Hero() {
  return (
    <div className='container mx-auto relative -top-10'>
        <Profil>
            <Profil.Deskripsi/>
            <Profil.ImgProfil/>
        </Profil>
    </div>
  )
}
export default Hero;