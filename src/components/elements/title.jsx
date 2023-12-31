import React from "react"

const Title = (props)=>{
    const {title,className} = props
    return (
        <>
        <h1 className={className}>{title}</h1>
        </>
    )
}
export default Title;