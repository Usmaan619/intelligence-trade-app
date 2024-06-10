import axios from "axios";
import { environment } from "../enviroments/enviroment";
import { setData } from "./Storage.service";
import { SetToken } from "../redux/actions/action";

export const registerAPI = async (payload) => {
  try {
    return await axios.post(`${environment?.apiUrl}sign_m`, payload);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const loginAPI = async (payload) => {
  try {
    return await axios.post(`${environment?.apiUrl}login`, payload);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const checkToken = async (dispatch, token) => {
  await setData("token", token);
  dispatch(SetToken(token));
};
