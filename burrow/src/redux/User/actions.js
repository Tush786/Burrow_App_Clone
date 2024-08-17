import axios from "axios";
import {
  GET_PRODUCT,
  GET_SINGLEPRODUCT,
  LOGIN_USER,
  POST_USER,
  RESET_USER,
  GET_ADDRESS,
  ADD_ADDRESS,
  GET_CART,
  GET_CART_LENGTH,
  GET_CART_ID,
  GET_ORDER_DATA,
  ORDER_COFM_STATUS
} from "../User/actionType";
import Cookies from 'js-cookie';

// Define the base URL for Axios
const BASE_URL = 'http://localhost:9090';  // Update with your actual base URL

// Get token and set config for requests
const token = Cookies.get('token');
const config = {
  headers: {
    authorization: "Bearer " + token,
  },
};

// Create an Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ========================== User Actions =========================>

export const addUser = (user) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/user/signup', user);
    dispatch({
      type: POST_USER,
      payload: res.status,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: RESET_USER,
      payload: err.response.status,
    });
  }
};

export const LoginUser = (user) => async (dispatch) => {
  console.log(user);
  try {
    const res = await axiosInstance.post('/user/login', user);
    console.log(res);
    Cookies.set('token', res.data.token, { expires: 7 });
    const userObject = res.data.user;
    Cookies.set('userInfo', JSON.stringify(userObject), { expires: 7 });

    dispatch({
      type: LOGIN_USER,
      payload: {
        currUser: res.data.user_present,
        statuscode: res.status,
        token: res.data.token,
      },
    });
  } catch (err) {
    dispatch({
      type: RESET_USER,
      payload: err.status,
    });
  }
};

export const getUser = (_id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/user/${_id}`);
    dispatch({
      type: LOGIN_USER,
      payload: { currUser: res.data[0], statuscode: res.status },
    });
  } catch (err) {
    dispatch({
      type: RESET_USER,
      payload: err.response.status,
    });
  }
};

export const editUser = (user, id) => async () => {
  console.log(user, id);
  try {
    await axiosInstance.patch(`/user/editUser/${id}`, user);
  } catch (err) {
    console.log(err);
  }
};

export const editFullname = (fullName, id) => async () => {
  try {
    await axiosInstance.patch(`/user/editfullname/${id}`, { fullName });
  } catch (err) {
    console.log(err);
  }
};

export const editEmail = (email, id) => async () => {
  try {
    await axiosInstance.patch(`/user/editemail/${id}`, { email });
  } catch (err) {
    console.log(err);
  }
};

export const editPhoneNo = (phonenumber, id) => async () => {
  try {
    await axiosInstance.patch(`/user/editphoneno/${id}`, { phonenumber });
  } catch (err) {
    console.log(err);
  }
};

export const editAvatar = (avatar, id) => async (dispatch) => {
  console.log(avatar, id);
  try {
    await axiosInstance.patch(`/user/avatar/${id}`, { avatar });
  } catch (err) {
    console.log(err);
  }
};
// ========================== Product Actions =========================>

  export const getproducts = (page, searchParam) => async (dispatch) => {
    dispatch({ type: "PRODUCTS_LOADING" });
    try {
      const data = await axiosInstance.get(`/productsapi/products?page=${page}&searchParam=${searchParam}`);
      // console.log(data.data.products)
      dispatch({
        type: GET_PRODUCT,
        payload: {
          products: data.data.products,
          currentPage: data.data.currentPage,
          totalPages: data.data.totalPages,
        },
      });
    } catch (error) {
      dispatch({ type: "PRODUCTS_ERROR", error });
    }
  };

export const singleproduct = (id) => async (dispatch) => {
  try {
    const products = await axiosInstance.get(`/productsapi/product/${id}`);
    dispatch({
      type: GET_SINGLEPRODUCT,
      payload: products.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// ========================== Address Actions =========================>

export const getAddress = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/address/get', config);
    dispatch({
      type: GET_ADDRESS,
      payload: response.data.data[0].addressItems,
    });
  } catch (err) {
    console.error("Error fetching address:", err);
  }
};

export const addAddress = (user) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/address/add', user, config);
    dispatch({
      type: ADD_ADDRESS,
      payload: res.status,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editAddress = (addressId, updatedAddressItem) => async () => {
  try {
    await axiosInstance.put(`/address/edit/${addressId}`, updatedAddressItem, config);
  } catch (err) {
    console.log(err);
  }
};

export const activeAddress = (addressId) => async () => {

  try {
    await axiosInstance.put(`/address/activeAddress/${addressId}`,{status:true} ,config);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddress = (addressId) => async () => {
  try {
    await axiosInstance.delete(`/address/delete/${addressId}`, config);
  } catch (err) {
    console.log(err);
  }
};

// ========================== Cart Actions =========================>

export const addTocart = (product, quantity, id) => async () => {
  const cartitem = {
    product,
    quantity,
  };

  try {
    await axiosInstance.post(`/cart/create/${id}`, cartitem, config);
  } catch (err) {
    console.log(err);
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/cart/get', config);
    dispatch({
      type: GET_CART,
      payload: response.data[0].orderItems
    });
    dispatch({
      type: GET_CART_ID,
      payload: response.data[0]._id
    });
    dispatch({
      type: GET_CART_LENGTH,
      payload: response.data[0].orderItems.length,
    });
  } catch (error) {
    dispatch({ type: "PRODUCTS_ERROR", error });
  }
};

export const deleteCartItem = (productId) => async () => {
  try {
    await axiosInstance.delete(`/cart/delete/${productId}`, config);
  } catch (err) {
    console.log(err);
  }
};

export const deleteCartItemAfterOrder = (cartID) => async (dispatch) => {
  try {
  const requests=  await axiosInstance.delete(`/cart/deletecart/${cartID}`, config);
  console.log(requests.status)
  dispatch({
    type:ORDER_COFM_STATUS,
    payload:requests.status
  })
  } catch (err) {
    console.log(err);
  }
};

// Order =====================>
  export const addOrder = (products, totalAmount, shippingAddress, paymentMethod, notes) => async () => {
    const order ={products, shippingAddress,totalAmount, paymentMethod, notes}
    try {
      await axiosInstance.post(`/order/create`,order, config);
    } catch (err) {
      console.log(err);
    }
  };

  export const getOrderData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/order/get', config);
    dispatch({
      type: GET_ORDER_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "PRODUCTS_ERROR", error });
  }
};

export const orderStatus = (orderId,Status) => async () => {
  const status={
    status:Status
  }
  try {
    await axiosInstance.put(`/order/update-status/${orderId}`,status, config);
  } catch (err) {
    console.log(err);
  }
};

export const orderConfirmMail = (owner) => async () => {
  try {
    await axiosInstance.post(`/order/paymentSuccess`, config);
  } catch (err) {
    console.log(err);
  }
};