import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateList } from '../actions/productAction'

import { ProductFilter } from '../componants/index'

import { filterByPrice, setFilterbyIndex } from '../helpers/helperFunctions'

const ProductFilterContainer = ({ products, updateList }) => {
  const handleChangeMainFilter = event => {
    let filteredList = []

    switch (event.target.value) {
      case 'low':
        filteredList = filterByPrice(true, products)
        break
      case 'high':
        filteredList = filterByPrice(false, products)
        break
      case 'all':
        filteredList = setFilterbyIndex(products)
        break
    }

    updateList(filteredList)
  }

  return <ProductFilter handleChangeMainFilter={handleChangeMainFilter} />
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
