import { GET_PRODUCT, GET_SINGLEPRODUCT, GET_USER, LOGIN_USER } from "../User/actionType";

const initialState = {
  user: {},
  products: [],
  singleproduct: {},
  statuscode: "",
  token: "",
  currentPage: 1,
  totalPages: 0,
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
    default:
      return state;
  }
};
