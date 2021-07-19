import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingbag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
