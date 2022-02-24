import axios from "axios"
import { API } from "../components/Constants"
import { STORED_VALUES } from "../hooks/useLocalStorage"
import { navigate } from "gatsby"

function getToken() {
  return JSON.stringify(localStorage.get(STORED_VALUES.TOKEN))
}

export const APIRequest = axios.create({
  baseURL: API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

APIRequest.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers["Authorization"] = "Bearer " + token //Attach token to header.
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

APIRequest.interceptors.response.use(
  res => {
    return res
  },
  async err => {
    const originalConfig = err.config

    if (originalConfig.url !== "/authentication/Login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true

        localStorage.removeItem(STORED_VALUES.TOKEN)
        navigate("/__refresh")
        navigate("/")
      }
    }
    return Promise.reject(err)
  }
)
