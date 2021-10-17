import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userLoginReducer from "containers/shared/Login/module/reducer";
import userSignupReducer from "containers/shared/Signup/module/reducer";

const rootReducer = combineReducers({
  userLoginReducer,
  userSignupReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
