const { default: axios } = require("axios");
const { BASE_URL } = require("settings/apiConfig");

const callApiPost = (
  endpoint,
  method = "POST",
  data = null,
  headers = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk"
) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {
      Authorization: `${headers}`,
    },
  });
};

export default callApiPost;
