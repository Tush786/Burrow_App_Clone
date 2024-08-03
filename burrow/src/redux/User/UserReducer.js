import { GET_PRODUCT, GET_SINGLEPRODUCT, GET_USER, LOGIN_USER,GET_ADDRESS } from "../User/actionType";

const initialState = {
  user: {},
  products: [],
  singleproduct: {},
  statuscode: "",
  token: "",
  currentPage: 1,
  totalPages: 0,
  addressData:[]
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: [...state.products, ...payload.products],
        currentPage: payload.currentPage,
        totalPages: payload.totalPages,
      };
    case GET_SINGLEPRODUCT:
      return { ...state, singleproduct: payload };
    case LOGIN_USER:
      console.log(payload);
      return { ...state, user: payload.currUser, statuscode: payload.statuscode, token: payload.token };
    case GET_ADDRESS:
      console.log(payload);
      return { ...state, addressData: payload };
    default:
      return state;
  }
};
