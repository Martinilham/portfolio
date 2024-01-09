import React from "react"

const Paragraf = (props)=>{
    const {paragraf,className} = props
    return (
        <>
        <p className={className} data-aos="fade-left">
            {paragraf}
        </p>
        </>
    )
}
export default Paragraf;