import React from 'react'

import './productList.css'

const ProductList = ({ filterComponent, listComponent }) => (
  <div className='container-body'>
    <div className='container-header'>
      <h1>Women's Tops </h1>
      {filterComponent}
    </div>
    <div className='product-container'>{listComponent}</div>
  </div>
)

export default ProductList
