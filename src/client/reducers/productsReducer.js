import * as types from '../constants/actionTypes';

const initialState = {
  user_id: null,
  seller_id: null,
  productsList: [],
  sellersList: [],
  shoppingList: [],
  zip: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(types.GET_PRODUCTS):
    const fetchedList = action.payload[0];
    const zip = action.payload[1];

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
      // Update seller_id
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
