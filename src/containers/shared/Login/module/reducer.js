import { FETCH_LOGIN_SUCCESS } from "./type";

const initialState = { userLogin: null, loading: false, error: "" };

const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN_SUCCESS:
      console.log("Payload Login Reducer", payload);
      return { ...state, userLogin: payload };

    default:
      return state;
  }
};

export default userLoginReducer;
