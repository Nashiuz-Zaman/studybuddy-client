// axios
import axios from "axios";

// data
import { apiBaseURL } from "../nativeData/apiBase";

const axiosSecure = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
