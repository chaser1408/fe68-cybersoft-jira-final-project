import callApiPost from "utils/callApiPost";

const userApi = {
  fetchUserLogin(userLoginData, headers) {
    return callApiPost("Users/signin", "POST", userLoginData, headers);
  },
  fetchUserSignup(userSignupData, headers) {
    return callApiPost("Users/signup", "POST", userSignupData, headers);
  },
};

export default userApi;
