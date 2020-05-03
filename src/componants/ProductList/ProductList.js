import React from 'react'

import './productList.css'

const ProductList = ({ filterComponent, listComponent }) => (
  <div className='container-body'>
    <div className='container-header'>
      {filterComponent}
    </div>
    <div className='product-container'>{listComponent}</div>
  </div>
)

export default ProductList
