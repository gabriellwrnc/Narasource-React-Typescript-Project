import { AxiosResponse } from "axios";
import { Activity, Profile } from "../types/User";
import httpRequest from "./api";

export const getProfile = async (): Promise<AxiosResponse<Profile>> => {
    return await httpRequest.get('auth/user')
}

export const getActivity = async (): Promise<AxiosResponse<Activity[]>> => {
    return await httpRequest.get('/activity')
}