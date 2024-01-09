import React from 'react'

function Button(props) {
  const {nama,className} = props
    return (
        <>
        <button className={className} data-aos="zoom-in" >{nama}</button>
        </>
    )
}
export default Button;
