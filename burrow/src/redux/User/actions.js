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

// ==========================User Action Start From here ======================>
const token = localStorage.getItem("Token");
const config = {
  headers: {
    authorization: "Bearer " + token,
  },
};

export const addUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:9090/user/signup`, {
      ...user,
    });
    // console.log(res.status);
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
  console.log(user);
  try {
    const res = await axios.post(`http://localhost:9090/user/login`, {
      ...user,
    });
    console.log(res);
    // console.log(res.data.token);

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
    const res = await axios.get(`http://localhost:9090/user/${_id}`);
    // console.log(res);
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

export const editUser = (user, id) => async (dispatch) => {
  console.log(user, id);
  try {
    await axios.patch(
      `https://arba-backend-1-4267.onrender.com/user/editUser/${id}`,
      {
        ...user,
      }
    );
    // console.log(resp)
    // dispatch({
    //   type: EDIT_USER,
    //   payload: user,
    // });
  } catch (err) {
    console.log(err);
  }
};

export const editAvatar = (avatar, id) => async (dispatch) => {
  console.log(avatar, id);
  try {
    await axios.patch(
      `https://arba-backend-1-4267.onrender.com/user/avatar/${id}`,
      avatar
    );
    // console.log(resp)
    // dispatch({
    //   type: EDIT_USER,
    //   payload: user,
    // });
  } catch (err) {
    console.log(err);
  }
};

// export const getproducts = (sort) => async (dispatch) => {
//   try {
//     const products = await axios.get(
//       `http://localhost:9090/productsapi/products?page=${page}&limit=10`
//     );
//     // console.log(products)
//     dispatch({
//       type: GET_PRODUCT,
//       payload: products.data.products,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getproducts = (page) => async (dispatch) => {
  dispatch({ type: "PRODUCTS_LOADING" });
  try {
    const response = await fetch(
      `http://localhost:9090/productsapi/products?page=${page}&limit=6`
    );
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
    const products = await axios.get(
      `http://localhost:9090/productsapi/product/${id}`
    );
    console.log(products);
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
    const response = await axios.get(
      `http://localhost:9090/address/get`,
      config
    );
    console.log(response.data);
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
    const res = await axios.post(
      `http://localhost:9090/address/add`,
      user,
      config
    );
    // console.log(res.status);
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
    await axios.put(
      `http://localhost:9090/address/edit/${addressId}`,
      updatedAddressItem,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

export const activeAddress = (addressId) => async () => {
  try {
    await axios.put(
      `http://localhost:9090/address/activeAddress/${addressId}`,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    await axios.delete(
      `http://localhost:9090/address/delete/${addressId}`,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

// Add to cart functionality ============>
export const addTocart = (product, quantity, owner, id) => async (dispatch) => {
  const cartitem = {
    product,
    quantity,
  };

  try {
    await axios.post(
      `http://localhost:9090/cart/create/${id}`,
      cartitem,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

export const getCart = (owner) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:9090/cart/get`, config);
    console.log(response);
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

export const deleteCartItem = (owner, productId) => async (dispatch) => {
  try {
    await axios.delete(
      `http://localhost:9090/cart/delete/${productId}`,
      config
    );
  } catch (err) {
    console.log(err);
  }
};
