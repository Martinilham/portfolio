import React from "react";
import Gambar from '../elements/gambar'
import Label from "../elements/label";
import Paragraf from "../elements/paragraf";

const BuildItem = ()=>{

    const tools= [
        {logo:'reactjs.png'},
        {logo:'laravel.png'},
        {logo:'flutter.png'},
        {logo:'Frame 9.png'},
        {logo:'Frame 13.png'},
        {logo:'Frame 14.png'}
    ]

    return(
        <>
 
            <div className="container ml-4 mt-28 lg:ml-28 font-oswald lg:mt-32">
                <h3 className="lg:text-sm text-orange-300 lg:mb-3">Item</h3>
                <h1 className="text-3xl lg:text-6xl text-white">Build Itemku</h1>
                <hr className="mt-3 w-28 lg:w-32 lg:mt-10 " style={{color:'#f9cc41'}}/>
            
            <div data-aos="zoom-in-right" className=" container mt-10 lg:ml-28 flex lg:mt-10 lg:flex">
                {tools.map((e)=>(
                    <Gambar
                        className=' w-16 lg:w-32 lg:ml-6 '
                        gambar={e.logo}
                    />
                ))}
            </div>
            </div>
            
        
        </>
    )
}

export default BuildItem;