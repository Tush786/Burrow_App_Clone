import { GET_PRODUCT, GET_SINGLEPRODUCT, LOGIN_USER,GET_ADDRESS,GET_CART,GET_CART_LENGTH,GET_CART_ID, GET_ORDER_DATA, PAGES, TOTAL_PRICE, ORDER_COFM_STATUS} from "../User/actionType";

const initialState = {
  user: {},
  products: [],
  singleproduct: [],
  statuscode: "",
  token: "",
  currentPage: 1,
  totalPages: 0,
  addressData:[],
  cart:[],
  cartTotalQty:null,
  cartID:"",
  orderData:[],
  Page:1,
  TotalPrice:0,
  Order_Confirm_Status:null,
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
      return { ...state, user: payload.currUser, statuscode: payload.statuscode, token: payload.token };
    case GET_ADDRESS:
      return { ...state, addressData: payload };
    case GET_CART:
      return { ...state, cart: payload };
    case GET_CART_LENGTH:
      return { ...state, cartTotalQty: payload };
    case GET_CART_ID:
      return { ...state, cartID: payload };
    case GET_ORDER_DATA:
      return { ...state, orderData: payload };
    case PAGES:
      return { ...state, Page: payload };
    case TOTAL_PRICE:
      return { ...state,TotalPrice: payload };
    case ORDER_COFM_STATUS:
      return { ...state,Order_Confirm_Status: payload };
    default:
      return state;
  }
};
