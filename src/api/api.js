import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8000"
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);

    config.data = {
        ...config.data,
        _token:"b0b988e7-08d8-4617-a5b5-6c1402bb1639",
    };
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  api.interceptors.response.use(function (response) {
    console.log("this is response ...");
    
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export {api}