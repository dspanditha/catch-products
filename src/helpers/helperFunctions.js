import axios from 'axios'

import { ERROR_MESSAGE } from './constants'

/**
 * filter products based on sale or exclusive
 * @param {*} isSale
 * @param {*} products
 */
export const filterByPrice = (isLow, products) => {
  if (isLow) return products.sort((a, b) => a.salePrice - b.salePrice)
  return products.sort((a, b) => b.salePrice - a.salePrice)
}

/**
 * set all filter indexes
 * @param {*} products
 */
export const setAllFilterIndex = products => {
  return products.map((product, index) => {
    product.filterIndex = index
    return product
  })
}

/**
 * set product by original index
 * @param {*} products 
 */
export const setFilterbyIndex = products => {
  console.log('products ', products)

  return products.sort((a, b) => a.filterIndex - b.filterIndex)
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
      setList(setAllFilterIndex(result.data.results))
      setPageData(result.data.metadata)
    })
    .catch(error => {
      setErrorProductList(ERROR_MESSAGE)
      console.error(error)
    })
}

/**
 * convert cents to dollars
 * @param {*} amount
 */
export const convertToDollars = amount => {
  const price = amount / 100
  return '$' + price
}
