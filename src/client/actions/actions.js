import * as types from '../constants/actionTypes';
import axios from 'axios'

export const getProducts = (zip) => {
  return (dispatch) => {
    axios.get(`/api/${zip}/products`)
    .then((res) => {
      dispatch({type: types.GET_PRODUCTS, payload: [ res.data, zip ] })
    })
    .catch(err => console.log('getProducts action error: ', err))
  }
}

// ADD PRODUCT ------------------------------------------------------
export const addProduct = (product, zip ) => {

  return (dispatch) => {
    axios.post('/api/products/new', { product, zip })
    .then((res) => {
      dispatch(addProductList(res.data))
    })
    .catch(err => console.log('addProduct action error: ', err))
  }
}
export const addProductList = (data) =>({
    type: types.ADD_PRODUCT,
    payload: data
})
// -----------------------------------------------------------------

// ADD SELLER ------------------------------------------------------
export const addSeller = (seller) => {

  return (dispatch) => {
    axios.post('/api/products/seller', {seller})
    .then((res) => {
      dispatch({type: types.ADD_SELLER, payload: res.data})
    })
    .catch(err => console.log('addSeller action error: ', err))
  }
}

export const getShoppingList = (userId) => {

  return (dispatch) => {
    axios.get('/shop', { userId })
    .then((res) => {
      // ideally res would be updated completed shoppingList 
      console.log('getShoppingList response: ', res)
      dispatch({type: types.ADD_SELLER, payload: res.data})
    })
    .catch(err => console.log('getShoppingList action error: ', err))
  }
}

export const addItem = (user_id, index) => {
  return (dispatch) => {
    axios.get('/additem', { user_id, index })
    .then((res) => {
      console.log('addItem response: ', res)
      dispatch({type: types.ADD_ITEM, payload: res.data})
    })
    .catch(err => console.log('addItem action error: ', err))
  }

}

// export const deleteItem = (userId, quantityId) => {

// }


export const addUser = (username, password) => {

}


export const login = (username, password) => {

}
