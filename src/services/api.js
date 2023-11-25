import axios from 'axios';

//https://reqres.in/api/

const api = axios.create({
  baseURL: 'https://reqres.in/api/'
});


export default api;