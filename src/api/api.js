import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8000"
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    const date = new  Date();

    if(config.method === "post") {
      config.data = {
        ...config.data,
        id: crypto.randomUUID(),
        status: 'inactive',
        createAt : date,
      };
      
    }


  
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  api.interceptors.response.use(
    function (response) {


      const newArr = response.data.map(item => {
        return {
          ...item,
          title: item.title.toUpperCase(),
        };
      });

      response.data = newArr;

    return response;
  }, function (error) {

    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export {api}









