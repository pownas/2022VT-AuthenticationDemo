import React, { createContext, useContext } from "react"
import useAuth from "../../hooks/useAuth"

interface Props {
  children: JSX.Element
}

export const AuthContext =
  createContext<ReturnType<typeof useAuth | null>>(null)

export const useAuthContext = () => useContext(AuthContext)!

function AuthContextProvider({ children }: Props) {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContextProvider