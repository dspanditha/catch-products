import React from 'react'

import './productFilter.css'

/**
 * build the option list for the filters
 * @param {*} sizes
 */
const buildOptions = sizes =>
  sizes.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ))

const ProductFilter = ({ handleChangeMainFilter, sizes }) => (
  <select className='main-filter' onChange={e => handleChangeMainFilter(e)}>
    <option value='all'>Show all</option>
    <option value='sale'>Filter by sale</option>
    <option value='exclusive'>Filter by exclusive</option>
    <optgroup label='Filter by size'>{buildOptions(sizes)}</optgroup>
  </select>
)

export default ProductFilter
