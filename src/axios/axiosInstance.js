import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
