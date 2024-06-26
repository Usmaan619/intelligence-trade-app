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

export const traddingAPI = async () => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${environment?.ngRkURl}`
    );

    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const stockAPI = async () => {
  try {
    const response = await axios.get(`${environment?.ngRkURl}indian`);

    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const portfolioAPI = async () => {
  try {
    const response = await axios.get(`${environment?.ngRkURl}portfolio`);

    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const checkToken = async (dispatch, token) => {
  await setData("token", token);
  dispatch(SetToken(token));
};

export const formatPrice = (price) => {
  if (!price) return "";
  // Remove commas and spaces, then convert to number
  const number = parseFloat(price.replace(/,/g, "").trim());
  // Check if it's a valid number
  return isNaN(number) ? price : number.toFixed(3);
};
