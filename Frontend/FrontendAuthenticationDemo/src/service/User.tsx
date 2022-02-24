import axios from "axios"
import { API } from "../components/Constants"

export interface IUser {
  userId: string
  userName: string
  givenName: string
  surname: string
}

export async function GetAllUsers(): Promise<IUser[] | never> {
  const request = axios.get(API + "/User")
  return request
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

export interface ICreateUser {
  userId: string
  userName: string
  givenName: string
  surname: string
  password: string
  passwordConfirmed: string
  requirePasswordChange: boolean
  userRoles: string[]
}

export async function CreateUser(user: ICreateUser): Promise<boolean | never> {
  const request = axios.post(API + "/User", user)
  return request
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}
