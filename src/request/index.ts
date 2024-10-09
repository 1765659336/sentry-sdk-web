import axios from 'axios';
import { interceptorsReq, interceptorsRes } from './interceptors';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
axios.defaults.timeout = 180000; // 超时时间30秒
const request = axios.create();
// 请求数据拦截处理
request.interceptors.request.use(interceptorsReq, (error) => Promise.reject(error.response));

// 返回数据拦截处理
request.interceptors.response.use(interceptorsRes, (error) => Promise.reject(error.response));

export default request;
