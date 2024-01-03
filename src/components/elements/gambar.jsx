import React from 'react'

function Gambar(props) {
    const {className,gambar,alt}=props
  return (
    <>
        <img className={className} src={require(`../image/${gambar}`)} alt={alt}></img>
    </>
  )
}
export default Gambar;