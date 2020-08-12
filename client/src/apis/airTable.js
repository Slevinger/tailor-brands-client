import axios from "axios";
// "http://localhost:3000/v1/content"
export default axios.create({
  baseURL: "https://tailor-brands.herokuapp.com/v1/content",
});
