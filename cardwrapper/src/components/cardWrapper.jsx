import React from 'react'
import '../index.css'

// using cardwrapper is bascially to create a card as a container to its children components,

function cardWrapper({children}){
  return <div className='card-wrapper'>{children} </div>
}

export default cardWrapper;