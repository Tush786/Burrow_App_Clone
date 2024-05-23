import { GET_PRODUCT, GET_SINGLEPRODUCT } from "../User/actionType";



  const initialState = {
    user: {},
    products:[],
    singleproduct:{},
  };
                                                                                                                     
  export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCT:
        return { ...state, products: payload };
      case GET_SINGLEPRODUCT:
        return { ...state, singleproduct: payload };
      default:
        return state;
    }
  };
  