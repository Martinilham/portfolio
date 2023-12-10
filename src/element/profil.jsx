import React from 'react'
import Contact from './contact';

function Profil() {
    
  return (
    <div className='container flex w-full items-center  flex-col md:border-none md:flex-row -mb-20 border-b-orange-400 border-b-2'>
        <div className='flex-1'>
            <img className='' src={require('../image/profil2.png')} alt="" />
        </div>
        <div className='flex-1 md:-ml-10 md: md:-mt-20 '>
            <h3 className='text-2xl'>Halooo, Saya!!</h3>
            <h1 className='text-3xl mt-2 md:text-5xl'>Achmad Ilham Martin</h1>
            <p className='text-left mt-5  md:mr-14 md:mt-2 md:text-left'>
                sabar sek website e sek di gae kang...
            </p>
            <div className='inline-flex mt-5 md:border-b-orange-400 border-b-2'>
                <Contact />
            </div >

        </div>
       
    </div>
  )
}



export default Profil;