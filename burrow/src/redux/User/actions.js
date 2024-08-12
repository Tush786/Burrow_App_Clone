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
} from "../User/actionType";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    authorization: "Bearer " + localStorage.getItem("Token"),
  },
});

// ==========================User Action Start From here ======================>

export const addUser = (user) => async (dispatch) => {
  try {
    const res = await api.post(`/user/signup`, user);
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

// <------------ Login User ---------------------->
export const LoginUser = (user) => async (dispatch) => {
  try {
    const res = await api.post(`/user/login`, user);
    const userObj = {
      userid: res.data.user._id,
      fullname: res.data.user.fullName,
      avatar: res.data.user.avatar,
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
    const res = await api.get(`/user/${_id}`);
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
  try {
    await api.patch(`/user/editUser/${id}`, user);
  } catch (err) {
    console.log(err);
  }
};

export const editAvatar = (avatar, id) => async () => {
  try {
    await api.patch(`/user/avatar/${id}`, avatar);
  } catch (err) {
    console.log(err);
  }
};

// Product API Requests
export const getproducts = (page) => async (dispatch) => {
  dispatch({ type: "PRODUCTS_LOADING" });
  try {
    const response = await fetch(
      `http://localhost:9090/productsapi/products?page=${page}&limit=6`
    );
    const data = await response.json();
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
    const products = await api.get(`/productsapi/product/${id}`);
    dispatch({
      type: GET_SINGLEPRODUCT,
      payload: products.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Address API ==============================>

export const getAddress = () => async (dispatch) => {
  try {
    const response = await api.get(`/address/get`);
    dispatch({
      type: GET_ADDRESS,
      payload: response.data.data[0].addressItems,
    });
  } catch (err) {
    console.error("Error fetching address:", err);
  }
};

// ============= Post Request ------------------>
export const addAddress = (user) => async (dispatch) => {
  try {
    const res = await api.post(`/address/add`, user);
    dispatch({
      type: ADD_ADDRESS,
      payload: res.status,
    });
  } catch (err) {
    console.log(err);
  }
};

// ======================== Edit Address =========================>

export const editAddress = (addressId, updatedAddressItem) => async () => {
  try {
    await api.put(`/address/edit/${addressId}`, updatedAddressItem);
  } catch (err) {
    console.log(err);
  }
};

export const activeAddress = (addressId) => async () => {
  try {
    await api.put(`/address/activeAddress/${addressId}`);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    await api.delete(`/address/delete/${addressId}`);
  } catch (err) {
    console.log(err);
  }
};

// Add to cart functionality ============>
export const addTocart = (product, quantity, owner, id) => async () => {
  const cartitem = {
    product,
    quantity,
  };

  try {
    await api.post(`/cart/create/${id}`, cartitem);
  } catch (err) {
    console.log(err);
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const response = await api.get(`/cart/get`);
    dispatch({
      type: GET_CART,
      payload: response.data[0].orderItems,
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
    await api.delete(`/cart/delete/${productId}`);
  } catch (err) {
    console.log(err);
  }
};
