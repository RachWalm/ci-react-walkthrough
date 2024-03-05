import axios from "axios";

axios.defaults.baseURL = 'https://profile-app-165689e2f46b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
