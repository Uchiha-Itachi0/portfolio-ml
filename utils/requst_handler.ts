import axiosInstance from './axios_instance';
import {AxiosRequestConfig, AxiosResponse} from "axios";


const makeRequest = async <T>(
    endpoint: string,
    method: 'get' | 'post' | 'put' | 'delete' = 'get',
    data?: any,
    includeToken: boolean = false
): Promise<T> => {

    const config: AxiosRequestConfig = {
        url: endpoint,
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    if (includeToken) {
        const token: string | null = localStorage.getItem('token');  // Adjust how you store your token
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        } else {
            throw new Error('No token available');
        }
    }

    try {
        const response: AxiosResponse<T, any> = await axiosInstance.request<T>(config);
        return response.data;
    } catch (error: any) {
        console.log("This is the error message", error.response.data.message)
        return error.response.data
        // throw new Error(error.response?.data?.message || error.message);
    }
};

export default makeRequest;
