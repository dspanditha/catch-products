import React from 'react'

import './productFilter.css'

const ProductFilter = ({ handleChangeMainFilter }) => (
  <select className='main-filter' onChange={e => handleChangeMainFilter(e)}>
    <option value='all'>Show all</option>
    <option value='low'>Price (low-high)</option>
    <option value='high'>Price (high-low)</option>
  </select>
)

export default ProductFilter
