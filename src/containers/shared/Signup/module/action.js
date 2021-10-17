import userApi from "apis/userApi";
import { TokenCybersoft } from "utils/token";
import { FETCH_SIGNUP_SUCCESS } from "./type";

export const actFetchUserSignupSuccess = (userData) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: userData,
});

export const actSignup = (userSignupData) => {
  return (dispatch) => {
    userApi
      .fetchUserSignup(userSignupData, TokenCybersoft)
      .then((response) => {
        const { content } = response.data;
        dispatch(actFetchUserSignupSuccess(content));
        alert(response.data.message);
      })
      .catch((error) => {
        console.log("Lỗi signup", error);
      });
  };
};
