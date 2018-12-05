import axios from 'axios';

export const API = axios.create({
  baseURL: `//www.omdbapi.com/?apikey=bef8787f&/`
})
API.interceptors.request.use(function (config) {
    //Note: According to the OMDb API documentation, you need to send all data requests to http://www.omdbapi.com/?apikey=[yourkey]&
    config.params.APPID = 'bef8787f';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });