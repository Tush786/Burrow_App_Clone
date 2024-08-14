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
  GET_ORDER_DATA
} from "../User/actionType";

// Define the base URL for Axios
const BASE_URL = 'http://localhost:9090';  // Update with your actual base URL

// Get token and set config for requests
const token = localStorage.getItem("Token");
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

    const userObj = {
      userid: res.data.user._id,
      fullname: res.data.user.fullName,
      avatar: res.data.user.avatar,
      email: res.data.user.email,
    };

    localStorage.setItem("userdata", JSON.stringify(userObj));
    localStorage.setItem("Token", res.data.token);

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
      const response = await fetch(`${BASE_URL}/productsapi/products?page=${page}&limit=6&searchParam=${searchParam}`);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: GET_PRODUCT,
        payload: {
          products: data.products,
          currentPage: data.currentPage,
          totalPages: data.totalPages,
        },
      });
    } catch (error) {
      dispatch({ type: "PRODUCTS_ERROR", error });
    }
  };

export const singleproduct = (id) => async (dispatch) => {
  try {
    const products = await axiosInstance.get(`/productsapi/product/${id}`);
    console.log(products);
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
    await axiosInstance.put(`/address/activeAddress/${addressId}`, config);
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
    console.log(response.data[0]._id)
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

export const deleteCartItemAfterOrder = (cartID) => async () => {
  try {
    await axiosInstance.delete(`/cart/deletecart/${cartID}`, config);
  } catch (err) {
    console.log(err);
  }
};

// Order =====================>
  export const addOrder = (products, totalAmount, shippingAddress, paymentMethod, notes) => async () => {
    const order ={products,totalAmount, shippingAddress, paymentMethod, notes}
    try {
      await axiosInstance.post(`/order/create`,order, config);
    } catch (err) {
      console.log(err);
    }
  };

  export const getOrderData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/order/get', config);
    console.log(response.data)
    dispatch({
      type: GET_ORDER_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "PRODUCTS_ERROR", error });
  }
};