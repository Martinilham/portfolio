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
 
            <div className="container ml-28 font-oswald mt-32">
                <h3 className="text-sm text-orange-300 mb-3">Item</h3>
                <h1 className="text-6xl text-white">Build Itemku</h1>
                <hr className="w-32 mt-10 " style={{color:'#f9cc41'}}/>
            
            <div className="container ml-28 flex mt-10">
                {tools.map((e)=>(
                    <Gambar
                        className=' w-32 ml-6 '
                        gambar={e.logo}
                    />
                ))}
            </div>
            </div>
            
        
        </>
    )
}

export default BuildItem;