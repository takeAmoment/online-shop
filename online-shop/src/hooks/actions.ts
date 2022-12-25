import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "redux/fakestore/cart.slice";
import { selectedProductActions } from "redux/fakestore/product.slice";

const actions = {
  ...cartActions,
  ...selectedProductActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
