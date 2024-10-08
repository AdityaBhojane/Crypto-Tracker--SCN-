import axios, { AxiosInstance } from "axios";

const instance:AxiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
  });

export default instance;