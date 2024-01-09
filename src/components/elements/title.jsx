import React from "react"

const Title = (props)=>{
    const {title,className} = props
    return (
        <>
        <h1 className={className} data-aos="fade-left">{title}</h1>
        </>
    )
}
export default Title;