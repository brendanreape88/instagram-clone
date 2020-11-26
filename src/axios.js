import axios from "axios";

const instance = axios.create({
  baseURL: "https://instagram-backend-12321.herokuapp.com",
});

export default instance;
