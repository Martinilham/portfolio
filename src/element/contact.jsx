import React from 'react'

const Contact = () =>{

    const medsos = 
       [{
        nama:"whatsapp.png"
        },{
        nama:"instagram.png"
        },{
        nama:"twitter.png"
        }]
    
    return (
        <>
        {medsos.map((data)=>(
            <img className='w-8 mr-3 mb-4' src={require(`../image/${data.nama}`)} alt="" />
        ))}
        </>
    )
}

export default Contact;