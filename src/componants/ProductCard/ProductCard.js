import React from 'react'

import { convertToDollars } from '../../helpers/helperFunctions'

import './productCard.css'

const ProductCard = ({ details }) => (
  <div key={details.id} className='card-container'>
    <img src={details.imageUrl} />
    <div className='side-label'>
      {!details.quantityAvailable && <div className='label-red'>SOLD OUT</div>}
    </div>
    <div className='product-footer'>
      <span className='name-label'> {details.name}</span>
      <span>
        <s>{convertToDollars(details.retailPrice)}</s>
      </span>
      <span className='price'>{convertToDollars(details.salePrice)}</span>
    </div>
  </div>
)

export default ProductCard
