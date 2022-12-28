import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "redux/fakestore/cart.slice";
import { selectedProductActions } from "redux/fakestore/product.slice";
import { userAction } from "redux/fakestore/user.slice";

const actions = {
  ...cartActions,
  ...selectedProductActions,
  ...userAction,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
