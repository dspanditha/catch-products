import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  setErrorProductList,
  setList,
  setPageData
} from '../actions/productAction'

import { ProductCard, ProductList } from '../componants/index'
import ProductFilterContainer from './ProductFilterContainer'

import { fetchApi } from '../helpers/helperFunctions'

const ProductListContainer = ({
  errorMessage,
  productList,
  setErrorProductList,
  setList,
  setPageData
}) => {
  const apiUrl =
    'http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json'

  useEffect(() => {
    fetchApi(apiUrl, setErrorProductList, setList, setPageData)
  }, [setList])


  const productListComponent = productList
    .map(item => <ProductCard details={item} key={item.id} />)

  const productFilterComponent = (
    <ProductFilterContainer products={productList} />
  )

  if (errorMessage) return <div className='label-warning'>{errorMessage}</div>

  return (
    <ProductList
      filterComponent={productFilterComponent}
      listComponent={productListComponent}
    />
  )
}

const mapStateToProps = state => state.productStore

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setErrorProductList,
      setList,
      setPageData
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer)
