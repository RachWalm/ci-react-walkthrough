import axios from "axios";

axios.defaults.baseURL = 'https://ci-react-walkthrough-5407e02d9c4b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
