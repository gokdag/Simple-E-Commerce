import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { 'Access-Control-Allow-Origin': "*" },
});
export default instance;
