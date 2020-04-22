import * as types from '../constants/actionTypes';

const initialState = {
  productsList: [],
  sellersList: [],
  zip: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(types.GET_PRODUCTS):
      const fetchedList = action.payload[0];
      const zip = action.payload[1];
      // console.log('productsReducer.js - MADE IT TO GET_PRODUCTS')
      console.log('fetchedList', fetchedList)
      console.log('zip', zip)
      return{
        ...state, 
        productsList: fetchedList,
        zip,
      };
      
    case(types.ADD_PRODUCT): 
      const updatedList = action.payload;

      return {
        ...state,
        productsList: updatedList
      };
    case(types.ADD_SELLER):
      const sellersList = action.payload;
      console.log('payload?? ', action.payload)
      return {
        ...state,
        sellersList,
      }
    default:
      return {
        ...state
      };
  };
};

export default productsReducer;
