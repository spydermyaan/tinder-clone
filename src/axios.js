import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-for-tinder-clone.herokuapp.com/",
});

export default instance;
