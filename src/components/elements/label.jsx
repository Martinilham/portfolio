import React from 'react'

export default function Label(props) {
  const {label,className} = props
  return (
    <>
        <h1 className={className}>
          {label}
        </h1>
    </>
  )
}
