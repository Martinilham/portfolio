import React from "react";
import Gambar from "../elements/gambar";
import Button from "../elements/button";

const Project = ()=>{
    return(
        <>
            <div className="mt-44 mx-auto  w-screen">
                <Gambar
                    className='float-right mb-32 w-11/12'
                    gambar='Frame 17.png'
                />
            
                <div className="mx-auto text-center mb-44 text-white w-screen">
                    <h1 className="text-8xl font-inter mb-5W">Comming Soon</h1>
                    <h2 className="text-4xl font-inter mb-20">Project Masih Prosses</h2>
                </div>

                <div className="w-screen mx-auto" >
                        <div className="flex w-3/4 mx-auto" style={{backgroundColor:'#f9cc41'}}>
                            <h2 className="flex-1 font-inter text-black align-middle p-8 text-4xl">Project Lainnya?</h2>
                            <button className=' float-right text-white m-8 px-8 ' style={{backgroundColor:'#262533'}}>Kunjungi</button>
                        </div>

                </div>
            </div>
        </>
    )
}
export default Project;