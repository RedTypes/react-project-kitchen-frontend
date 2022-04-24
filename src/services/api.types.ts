import {TUser} from "./types";

export type TAPINewUser = {
    user: {
        username: string;
        email: string;
        password: string;
    }
}

export type TAPILoginUser = {
    user: {
        email: string;
        password: string;
    }
}

export type TAPIUser = {
    user : TUser;
}

export type TAPIPatchUser = {
    user: {
        email?: string;
        username?: string;
        bio?: string;
        image?:string;
        password?: string; }
}