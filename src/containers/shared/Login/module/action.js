import userApi from "apis/userApi";
import { TokenCybersoft } from "utils/token";
import { FETCH_LOGIN_SUCCESS } from "./type";

export const actFetchUserLoginSuccess = (userData) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: userData,
});

export const actLogin = (userLoginData) => {
  return (dispatch) => {
    userApi
      .fetchUserLogin(userLoginData, TokenCybersoft)
      .then((response) => {
        const { content } = response.data;
        dispatch(actFetchUserLoginSuccess(content));
        alert(response.data.message);
      })
      .catch((error) => {
        console.log("Lỗi login", error);
      });
  };
};
