import React from 'react'
import './Breadcrums.css'

const Breadscrums = (props) => {
    const {product} =props
  return (
    <div className="breadcrum">
      HOME  /  SHOP / {product.category} / {product.name}
    </div>
  )
}

export default Breadscrums