import axios from "axios"
import { API } from "../components/Constants"
import { APIRequest } from "./Interceptor"
import { IUser } from "./User"

interface ILogin {
  username: string
  password: string
}

export async function LoginRequest(credentials: ILogin) {
  const request = axios.post(API + "/Authentication/login", credentials)
  return request
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

interface IRegister {
  code: string
  phoneNumber: string
}

export async function Register(credentials: IRegister) {
  const request = axios.post(API + "/Authentication/register", credentials)
  return request
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

export async function GetLoggedInUser(): Promise<IUser | never> {
  const request = APIRequest.get(API + "/Authentication/GetLoggedInUser")

  return request
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

export async function Logout() {}
