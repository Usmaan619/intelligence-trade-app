
import axios from "axios";
import { environment } from "../enviroments/enviroment";

export const registerAPI = async (payload) => {
    try {
        return await axios.post(`${environment?.apiUrl}sign_m`, payload)
    } catch (error) {
        console.log('error: ', error);
    }
}

export const loginAPI = async (payload) => {
    try {
        return await axios.post(`${environment?.apiUrl}login`, payload)
    } catch (error) {
        console.log('error: ', error);
    }
}