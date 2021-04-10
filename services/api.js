// Api.js
import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL : "https://sense.applio.tech/data/" // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
    const headers = {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM",
        'Access-Control-Allow-Origin': '*',
        'Origin':'https://citrony-56jn4xxoc-erikemmerfors-orestad-linu.vercel.app/',
        withCredentials: true,
        crossorigin: true
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

// function to execute the http get request
const get = (url, request) => apiRequest("get",url,request);

// expose your method to other services or actions
const API ={
    get
};
export default API;