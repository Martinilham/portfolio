import React from 'react'

function Button(props) {
  const {nama,className} = props
    return (
        <>
        <button className={className}>{nama}</button>
        </>
    )
}
export default Button;
