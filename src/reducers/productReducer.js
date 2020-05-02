import { LIST } from '../helpers/constants'

const initialState = {
  productList: [],
  pageData: [],
  errorMessage: ''
}

function productReducer (state = initialState, action) {
  switch (action.type) {
    case LIST.LIST_BEGIN:
      return {
        ...state
      }
    case LIST.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: JSON.parse(JSON.stringify(action.payload))
      }

    case LIST.UPDATE_PRODUCT_LIST:
      return {
        ...state,
        productList: JSON.parse(JSON.stringify(action.payload))
      }

    case LIST.SET_PAGE_DATA:
      return {
        ...state,
        pageData: JSON.parse(JSON.stringify(action.payload))
      }
    case LIST.SET_ERROR_PRODUCT_LIST:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default productReducer
