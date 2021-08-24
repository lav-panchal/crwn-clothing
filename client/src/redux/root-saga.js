import { call, all } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.saga";
import { usersagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(shopSagas), call(usersagas), call(cartSagas)]);
}
