import React from 'react'

import './productCard.css'

const ProductCard = ({ details }) => (
  <div key={details.id} className='card-container'>
    <img src={details.imageUrl} />
    <div className='side-label'>
      {details.quantityAvailable && (
        <div className='label-green'>{details.quantityAvailable} </div>
      )}
      {details.salePrice && (
        <div className='label-red'>{details.salePrice}</div>
      )}
    </div>
    <div className='product-footer'>
      <span className='name-label'> {details.name}</span>
      <span className='price'>{details.retailPrice}</span>
    </div>
  </div>
)

export default ProductCard
