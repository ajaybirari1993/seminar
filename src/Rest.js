import axios from "axios";

const headers = {
  Accept: "application/json",
};

axios.defaults.crossDomain = true;

const config = {
  dotnetEndpoint: () =>
    axios({
      method: "GET",
      url: `testUrl`,
      headers: headers,
    }),
  javaEndpoint: () =>
    axios({
      method: "GET",
      url: `testUrl`,
      headers: headers,
    }),
};

export default config;
