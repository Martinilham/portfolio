import React from 'react'


function Profil(props) {
    const {children} = props
  return (
    <div className='container flex w-full h-full items-center  flex-col-reverse md:flex-row -mb-20 border-b-orange-400 border-2'>
    {children}
    </div>
  )
}

const ImgProfil =()=>{
    return(
        
            <div className=''>
                    <img className='' src={require('../image/profil2.png')} alt="" />
            </div>
        
    )
}
const Deskripsi = ()=>{
    return(
        <div className='ml-10 '>
            <h3 className='text-2xl'>Halooo, Saya!!</h3>
            <h1 className='text-3xl mt-2 md:text-5xl'>Achmad Ilham Martin</h1>
            <p className='text-center mt-5  md:mr-14 md:mt-5 md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis reprehenderit maiores iste amet minima laboriosam 
                earum animi explicabo ullam, rem ut quis accusamus, esse deleniti 
                ex recusandae, suscipit veniam rerum!
            </p>
        </div>
    )
}

Profil.ImgProfil=ImgProfil;
Profil.Deskripsi=Deskripsi;
export default Profil;