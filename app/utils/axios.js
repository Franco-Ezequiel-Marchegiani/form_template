/**
 * axios setup to use mock service
 */

import axios from 'axios';
import { REMIX_APP_API_URL } from 'config';

const axiosConfig = {
    baseURL: REMIX_APP_API_URL
};
const axiosServices = axios.create(axiosConfig);

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices;
