import React, { createContext, useContext, useState } from "react"
import useAuth from "../../hooks/useAuth"
import ClipLoader from "react-spinners/ClipLoader"
import { OnLoadingStart } from "../../styles/Loading"

interface Props {
  children: JSX.Element
}

export const AuthContext =
  createContext<ReturnType<typeof useAuth | null>>(null)

export const useAuthContext = () => useContext(AuthContext)!

function AuthContextProvider({ children }: Props) {
  const auth = useAuth()

  if (!auth.loaded) {
    return (
      <OnLoadingStart>
        <h1>Demo</h1>

        <ClipLoader loading={true} size={150} />
      </OnLoadingStart>
    )
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
