import axios from 'axios'

import { ERROR_MESSAGE } from './constants'

/**
 * filter products based on size
 * @param {*} productSize
 * @param {*} products
 */
export const filterSizes = (productSize, products) => {
  let updatedList = []
  updatedList = products.filter(product => {
    !product.size.some(sizes => sizes === productSize)
      ? (product.filtered = false)
      : (product.filtered = true)

    return product
  })
  return updatedList
}

/**
 * filter products based on sale or exclusive
 * @param {*} isSale
 * @param {*} products
 */
export const filterExclusiveAndSale = (isSale, products) => {
  if (isSale)
    return products.filter(product => {
      !product.isSale ? (product.filtered = false) : (product.filtered = true)
      return product
    })

  return products.filter(product => {
    !product.isExclusive
      ? (product.filtered = false)
      : (product.filtered = true)
    return product
  })
}

/**
 * set all filters to true
 * @param {*} products
 */
export const setAllFiltersTrue = products => {
  return products.map(product => {
    product.filtered = true
    return product
  })
}

/**
 * fetch api content & set products & errors
 * @param {*} url
 * @param {*} setErrorProductList
 * @param {*} setList
 */
export const fetchApi = (url, setErrorProductList, setList, setPageData) => {
  axios
    .get(url)
    .then(result => {
      if (result.status != 200) {
        setErrorProductList(ERROR_MESSAGE)
        throw new Error(`API ${apiUrl} is unavailable`)
      }

      console.log(result.data)
      setErrorProductList('')
      setList(setAllFiltersTrue(result.data.results))
      setPageData(result.data.metadata)
    })
    .catch(error => {
      setErrorProductList(ERROR_MESSAGE)
      console.error(error)
    })
}
