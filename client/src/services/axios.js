import axios from "axios";

var instance = axios.create({
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "csrf-token"
});

export default instance;
