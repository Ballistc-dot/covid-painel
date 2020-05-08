import axios from 'axios'


const api = axios.create({
   // baseURL:"http://localhost:7000" // dev
  baseURL:"https://covid19.mathdro.id/api/countries" //production
   
});

export default api;
