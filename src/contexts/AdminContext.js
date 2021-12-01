import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../helpers/const";

export const adminContext = React.createContext();

const INIT_STATE = {
  products: null,
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    case "CLEAR_STATE":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // !CREATE
  const addProduct = async (product) => {
    try {
      const response = await axios.post(API, product);
      getProduct();
    } catch (e) {
      console.log(e);
    }
  };

  // !READ
  const getProduct = async () => {
    try {
      let response = await axios(API);
      let action = {
        type: "GET_PRODUCT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  // !UPDATE
  const getProductToedit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedProduct = async (editedProduct) => {
    try {
      let response = await axios.patch(
        `${API}/${editedProduct.id}`,
        editedProduct
      );
      getProduct();
    } catch (e) {
      console.log(e);
    }
  };

  const clearState = () => {
    let action = {
      type: "CLEAR_STATE",
      payload: null,
    };
    dispatch(action);
  };

  // !DELETE
  const deleteProduct = async (id) => {
    try {
      let response = await axios.delete(`${API}/${id}`);
      getProduct();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <adminContext.Provider
      value={{
        addProduct: addProduct,
        getProduct: getProduct,
        getProductToedit: getProductToedit,
        saveEditedProduct: saveEditedProduct,
        deleteProduct: deleteProduct,
        clearState: clearState,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
