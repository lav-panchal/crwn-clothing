import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { usersagas } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(usersagas)]);
}
