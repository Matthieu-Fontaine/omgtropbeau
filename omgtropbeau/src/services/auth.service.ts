import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000/";

export const register = (username: string, email: string, password: string) => {
  // Make a POST request to the API
  axios.post(API_URL + 'users', {
    email: email,
    username: username,
    password: password,
  })
    .then(response => {
      // Handle the response data
      console.log("data", response.data);

      login(email, password)
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      console.log("response", response.data);
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));

        window.location.href = "/";
      }

      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("token");
  if (userStr) {
    console.log("userStr", userStr);
    const token = JSON.parse(userStr);

    const decodedToken = jwtDecode(token);
    const expirationDate = new Date((decodedToken.exp as number) * 1000);
    const currentDate = new Date();
    if (expirationDate > currentDate) {
      return token;
    } else {
      localStorage.removeItem("token");
      return null;
    }
  }
  return null;
};
