import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 20000, // request timeout
    retryDelay: 1000, // 请求间隙
    retry: 2, // 重试次数
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // config.headers['Authorization'] =  
        return config
    },
    error => {

        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        return Promise.reject(error)
    }
)

export default service