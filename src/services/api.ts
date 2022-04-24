import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import {API_ROOT, LOGIN_URL, REGISTER_URL, USER_URL} from "../constants";
import {TAPINewUser, TAPILoginUser, TAPIUser, TAPIPatchUser} from "./api.types";
import {IFetchUser, ILoginUser, IPatchUser, IRegisterUser} from "../types/API.types";

const defaultRequestConfig : AxiosRequestConfig = {
    baseURL: API_ROOT,
    headers: {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    },
}

const blogAPI : AxiosInstance = axios.create(defaultRequestConfig);

export const registerUser : IRegisterUser = (username: string, email: string, password: string) : AxiosPromise<TAPIUser> => {
    const registerData : TAPINewUser = {
        user: { username, email, password },
    }
    const requestConfig : AxiosRequestConfig = {
        url: REGISTER_URL,
        data: registerData,
        method: 'post',
    };
    return blogAPI(requestConfig);
}

export const fetchCurrentUser : IFetchUser = () : AxiosPromise<TAPIUser> => {
    const requestConfig: AxiosRequestConfig = {
        url: USER_URL,
        method: 'get',
    };
    return blogAPI(requestConfig);
}

export const loginUser : ILoginUser= (email: string, password: string) : AxiosPromise<TAPIUser> => {
    const loginData : TAPILoginUser = {
        user: { email, password },
    }
    const requestConfig : AxiosRequestConfig = {
        url: LOGIN_URL,
        method: 'post',
        data: loginData,
    };
    return blogAPI(requestConfig);
}

export const patchCurrentUser : IPatchUser = (username?: string, email?: string, password?: string, bio?: string, image?: string) : AxiosPromise<TAPIUser> => {
    const patchData : TAPIPatchUser = {
        user: { username, email, password, bio, image },
    }
    const requestConfig : AxiosRequestConfig = {
        url: USER_URL,
        data: patchData,
        method: 'put',
    };
    if (!username && !email && !password && !bio && !image) {
        return fetchCurrentUser();
    }
    return blogAPI(requestConfig);
}

