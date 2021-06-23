import axios from 'react-native-axios'
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: 'http://kindicare-api-staging.enouvo.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'accept' : 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // throw error.response.data.message;
    throw error.message
    // return Promise.reject(error);

});

export default axiosClient;