import axios from "axios";

const FIRST_API_URL = 'https://catfact.ninja';

const firstApiAxios = axios.create({
    baseURL: FIRST_API_URL,
    headers: {
        Authorization: 'token',
    },
    // withCredentials: true,
})


export const getFacts = async () => {
    try {
        const res = await firstApiAxios.get(`/fact`, {
            params: { offset: 0, limit: 10 },
        });
        console.log(res.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error, 'error on axios')
        } else if (error) {
            console.log(error, 'error')
        }
    }
}

firstApiAxios.interceptors.request.use(config => {
    console.log('Request: ', config);
    return config;
})

firstApiAxios.interceptors.response.use(responce => {
    console.log('Responce: ', responce);
    return responce;
})

firstApiAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// firstApiAxios.interceptors.responce.use(responce => {
//     return responce;
// }, error => {
//     if (error.responce.status === 401) {
//         window.location = '/login';
//     }
//     return Promise.reject(error);
// })