import React from "react"

const Paragraf = (props)=>{
    const {paragraf,className} = props
    return (
        <>
        <p className={className}>
            {paragraf}
        </p>
        </>
    )
}
export default Paragraf;