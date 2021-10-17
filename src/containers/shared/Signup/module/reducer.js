const { FETCH_SIGNUP_SUCCESS } = require("./type");

const initialState = { userSignup: null, loading: false, error: "" };

const userSignupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SIGNUP_SUCCESS:
      console.log("Payload Signup Reducer", payload);
      return { ...state, userSignup: payload };

    default:
      return state;
  }
};

export default userSignupReducer;
