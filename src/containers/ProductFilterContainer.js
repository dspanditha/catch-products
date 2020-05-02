import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateList } from '../actions/productAction'

import { ProductFilter } from '../componants/index'

import {
  filterExclusiveAndSale,
  filterSizes,
  setAllFiltersTrue
} from '../helpers/helperFunctions'

const ProductFilterContainer = ({ sizesList, products, updateList }) => {
  const handleChangeMainFilter = event => {
    let filteredList = []

    switch (event.target.value) {
      case 'sale':
        filteredList = filterExclusiveAndSale(true, products)
        break
      case 'exclusive':
        filteredList = filterExclusiveAndSale(false, products)
        break
      case 'all':
        filteredList = setAllFiltersTrue(products)
        break
      default:
        filteredList = filterSizes(event.target.value, products)
        break
    }

    updateList(filteredList)
  }

  return (
    <ProductFilter
      handleChangeMainFilter={handleChangeMainFilter}
      sizes={sizesList}
    />
  )
}

const mapStateToProps = state => state.productStore

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateList
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilterContainer)
