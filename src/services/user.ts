import { AxiosResponse } from "axios";
import { Activity, AdminUser, Profile } from "../types/User";
import httpRequest, { httpRequestAdmin } from "./api";

export const getProfile = async (): Promise<AxiosResponse<Profile>> => {
    return await httpRequest.get('auth/user')
}

export const getActivity = async (): Promise<AxiosResponse<Activity[]>> => {
    return await httpRequest.get('/activity')
}

export const getUser = async (): Promise<AxiosResponse<AdminUser[]>> => {
    return await httpRequestAdmin.get('/users')
}

