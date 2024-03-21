import React from "react";
import Gambar from "../elements/gambar";
import { Navigate } from "react-router-dom";

const Project = ()=>{


    return(
        <>
            <div  className="mt-10 lg:mt-44 lg:mx-auto  w-screen">
                <div data-aos="fade-right">
                <Gambar 
                    className='mb-10 float-right lg:mb-32 lg:w-11/12'
                    gambar='Frame 17.png'
                />
                </div>
            
                <div data-aos="fade-left" className="mx-auto text-center lg:mx-auto lg:text-center lg:mb-44 text-white w-screen">
                    <h1 className="text-4xl lg:text-8xl font-inter lg:mb-5">Comming Soon</h1>
                    <h2 className="text-xl lg:text-4xl font-inter lg:mb-20">Project Masih Prosses</h2>
                </div>

                <div className="w-screen mx-auto mt-10" >
                        <div className="flex w-3/4 mx-auto" style={{backgroundColor:'#f9cc41'}}>
                            <h2 className="flex-1 text-xl p-2 font-inter text-black align-middle lg:p-8 lg:text-4xl">Project Lainnya?</h2>
                            <button className='text-sm float-right text-white m-8 px-6 py-2 lg:py-0 lg:px-6  ' style={{backgroundColor:'#262533',}}><a href="https://github.com/Martinilham" >Kunjungi</a></button>
                        </div>

                </div>
            </div>
        </>
    )
}
export default Project;