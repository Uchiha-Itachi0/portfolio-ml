import axiosInstance from './axios_instance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import cookie from 'cookie';

const isServer = typeof window === 'undefined';

const getToken = (req?: any): string => {
    if (isServer) {
        const cookies = req.cookies.get('token')?.value;
        console.log('This is token:', cookies);
        return cookies || '';
    } else {
        return Cookies.get('token') || '';
    }
};

const makeRequest = async <T>(
    endpoint: string,
    method: 'get' | 'post' | 'put' | 'delete' = 'get',
    data?: any,
    includeToken: boolean = false,
    req?: any
): Promise<T> => {
    const config: AxiosRequestConfig = {
        url: endpoint,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    if (includeToken) {
        const token: string = getToken(req);
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        } else {
            throw new Error('No token available');
        }
    }
    if (method !== 'get' && data) {
        config.data = data;
    }

    try {
        console.log('Request config:', config);
        const response: AxiosResponse<T, any> = await axiosInstance.request<T>(config);
        console.log('Request response:', response);
        return response.data;
    } catch (error: any) {
        console.error('Error making request:', error.response ? error.response.data : error.message);
        console.error('Request config on error:', error.config);
        throw error;
    }
};

export default makeRequest;
