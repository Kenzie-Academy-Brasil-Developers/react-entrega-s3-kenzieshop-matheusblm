import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
