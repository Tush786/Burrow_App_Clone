import axios from "axios";
import { GET_PRODUCT,GET_SINGLEPRODUCT, GET_USER, LOGIN_USER, POST_USER, RESET_USER } from "../User/actionType";

// ==========================User Action Start From here ======================>
    export const getUser = (id) => async (dispatch) => {
        // console.log(id)
        try {
          const user = await axios.get(`https://arba-backend-1-4267.onrender.com/user/${id}`);
      
          // // const userObj = {
          // //   userid:user.data.user_present._id,
          // //   username: user.data.user_present.userName,
          // //   fullname: user.data.user_present.fullName,
          // //   avatar:user.data.user_present.avatar
          // // };
          // localStorage.setItem("userdata", JSON.stringify(userObj));
          dispatch({
            type: GET_USER,
            payload: user.data[0],
          });
        } catch (err) {
          console.log(err);
        }
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
          // console.log(res.data);
          // console.log(res.data.token);
      
          const userObj = {
            userid:res.data.user_present._id,
            username: res.data.user_present.userName,
            fullname: res.data.user_present.fullName,
            avatar:res.data.user_present.avatar
          };
      
          // console.log(userObj)
          
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
      
      export const setUser = (_id) => async (dispatch) => {
        try {
          const res = await axios.get(`https://arba-backend-1-4267.onrender.com/user/${_id}`);
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
      
      export const editUser = (user,id) => async (dispatch) => {
        console.log(user,id)
        try {
         const resp= await axios.patch(`https://arba-backend-1-4267.onrender.com/user/editUser/${id}`, {
            ...user,
          });
          // console.log(resp)
          // dispatch({
          //   type: EDIT_USER,
          //   payload: user,
          // });
        } catch (err) {
          console.log(err);
        }
      };
      
      export const editAvatar = (avatar,id) => async (dispatch) => {
        console.log(avatar,id)
        try {
         const resp= await axios.patch(`https://arba-backend-1-4267.onrender.com/user/avatar/${id}`, avatar);
          // console.log(resp)
          // dispatch({
          //   type: EDIT_USER,
          //   payload: user,
          // });
        } catch (err) {
          console.log(err);
        }
      };
      


export const getproducts = (sort) => async (dispatch) => {
  try {
    const products = await axios.get(
      `http://localhost:9090/productsapi/products`
    );
    // console.log(products)
    dispatch({
      type: GET_PRODUCT,
      payload: products.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};


export const singleproduct = (id) => async (dispatch) => {
    try {
      const products = await axios.get(
        `http://localhost:9090/productsapi/product/${id}`
      );
      console.log(products)
      dispatch({
        type: GET_SINGLEPRODUCT,
        payload: products.data,
      });
    } catch (err) {
      console.log(err);
    }
  };