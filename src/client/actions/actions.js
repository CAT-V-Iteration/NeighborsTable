import * as types from '../constants/actionTypes';
import axios from 'axios'

export const getProducts = (zip) => {
  return (dispatch) => {
    axios.get(`/api/${zip}/products`)
    .then((res) => {
      dispatch({type: types.GET_PRODUCTS, payload: [ res.data, zip ] })
    })
    .catch(err => console.log(err))
  }
}


export const addProduct = (product) => {

  return (dispatch) => {
    axios.post('/api/products/new', {product})
    .then((res) => {
      dispatch(addProductList(res.data))
    })
    .catch(err => console.log(err))
  }
}


export const addProductList = (data) =>({
    type: types.ADD_PRODUCT,
    payload: data
})


export const addSeller = (seller) => {

  return (dispatch) => {
    axios.post('/api/products/seller', {seller})
    .then((res) => {
      dispatch({type: types.ADD_SELLER, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}
