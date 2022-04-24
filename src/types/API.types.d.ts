import {AxiosPromise} from "axios";
import {TAPIUser} from "../services/api.types";

export interface IRegisterUser {
    (username: string, email: string, password: string) : AxiosPromise<TAPIUser>;
}

export interface ILoginUser {
    (email: string, password: string) : AxiosPromise<TAPIUser>;
}

export interface IFetchUser {
    () : AxiosPromise<TAPIUser>;
}

export interface IPatchUser {
    (username?: string, email?: string, password?: string, bio?: string, image?:string) : AxiosPromise<TAPIUser>;
 }