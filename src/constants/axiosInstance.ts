import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com";
const userToken = localStorage.getItem("userToken");

const headers = {
  Authorization: `Beaer ${userToken}`,
};

const axiosInstance = axios.create({
  baseURL: endpoint,
  timeout: 15000,
  headers: headers,
});

export default axiosInstance;
