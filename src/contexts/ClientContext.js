import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { API } from "../helpers/const";

export const clientContext = React.createContext();

const INIT_STATE = {
  products: null,
  productDetails: null,
  productsCountInCart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cart: null,
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "GET_DETAILS":
      return { ...state, productDetails: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCountInCart: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ClientContextProvider = (props) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const getProduct = async () => {
    try {
      let filter = window.location.search;
      let response = await axios(`${API}${filter}`);
      let action = {
        type: "GET_PRODUCT",
        payload: response.data,
      };
      dispatch(action);
      reserCurrentPage();
    } catch (e) {
      console.log(e);
    }
  };

  // ! детали

  const getDetails = async (id) => {
    try {
      let response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_DETAILS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  // !пагинация

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    if (state.products) {
      const data = state.products;
      setPosts(data);
    }
  }, [state.products]);

  const numberOfLastPost = currentPage * postPerPage;
  const numberOfFirstPost = numberOfLastPost - postPerPage;
  const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost);
  const totalPosts = posts.length;

  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };

  function reserCurrentPage() {
    setCurrentPage(1);
  }

  // ! корзина

  const addAndDeleteProduct = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let product1 = {
      product: product,
      count: 1,
      subPrice: 0,
    };

    product1.subPrice = calcSubPrice(product1);
    let checkArr = cart.products.filter((item) => {
      return item.id === product.id;
    });
    if (checkArr.length === 0) {
      cart.products.push(product);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.id !== product.id;
      });
    }
    console.log(checkArr);
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let checkArr = cart.products.filter((item) => {
      return item.id === id;
    });
    if (checkArr.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProduct = (count, id) => {
    if (count < 1) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.map((item) => {
      if (item.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
  return (
    <clientContext.Provider
      value={{
        getProduct: getProduct,
        getDetails: getDetails,
        handlePage: handlePage,
        addAndDeleteProduct: addAndDeleteProduct,
        checkProductInCart: checkProductInCart,
        getCart: getCart,
        changeCountProduct: changeCountProduct,
        currentPage: currentPage,
        products: state.products,
        productDetails: state.productDetails,
        totalPosts: totalPosts,
        postPerPage: postPerPage,
        currentPosts: currentPosts,
        cart: state.cart,
        productsCountInCart: state.productsCountInCart,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContextProvider;
