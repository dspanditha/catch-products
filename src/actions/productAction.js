import { LIST } from '../helpers/constants'

const buildListBegin = () => ({
  type: LIST.LIST_BEGIN
})

const setProductList = payload => ({
  type: LIST.SET_PRODUCT_LIST,
  payload: payload
})

const updateProductList = payload => ({
  type: LIST.UPDATE_PRODUCT_LIST,
  payload: payload
})
export const setPageData = payload => ({
  type: LIST.SET_PAGE_DATA,
  payload: payload
})

export const setErrorProductList = payload => ({
  type: LIST.SET_ERROR_PRODUCT_LIST,
  payload: payload
})

/**
 * set products  list
 * @param {*} productList
 */

export function setList (productList) {
  return dispatch => {
    dispatch(buildListBegin())
    dispatch(setProductList(productList))
  }
}

/**
 * update product list with new values
 * @param {*} productList
 */
export function updateList (productList) {
  return dispatch => {
    dispatch(buildListBegin())
    dispatch(updateProductList(productList))
  }
}
