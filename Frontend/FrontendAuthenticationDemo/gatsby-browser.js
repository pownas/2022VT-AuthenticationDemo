/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import AuthContextProvider from "./src/State/Context/AuthContextProvider"

export const wrapPageElement = ({ element }) => {
  return <AuthContextProvider>{element}</AuthContextProvider>
}
