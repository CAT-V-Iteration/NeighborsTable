import * as types from '../constants/actionTypes';

const initialState = {
  productsList: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(types.GET_PRODUCTS):
      const fetchedList = action.payload;
    
      return{
        ...state, 
        productsList: fetchedList
      };
      
    case(types.ADD_PRODUCT): 
      const updatedList = action.payload;

      return {
        ...state,
        productsList: updatedList
      };

    default:
      return {
        ...state
      };
  };
};

export default productsReducer;
