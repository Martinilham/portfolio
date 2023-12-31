import React from 'react'

import Title from '../elements/title'
import Paragraf from '../elements/paragraf'

function Description({children}) {
  return (
    <>
        {children}
    </>
  )
}

const Judul = (props)=> {
    const {title,className}=props
    return (
        <>
        <Title
        className={className}
        title={title}
        />
        </>
    )
}

const Isi = (props)=>{
    const {paragraf,className}=props
    return (
        <>
        <Paragraf
            className={className}
            paragraf={paragraf}
        />

        </>
    )
}


Description.Judul = Judul;
Description.Isi = Isi;
export default Description