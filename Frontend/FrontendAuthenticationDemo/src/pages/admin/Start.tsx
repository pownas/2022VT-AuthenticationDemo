import React from "react"
import Layout from "../../components/Layout"
import { useAuthContext } from "../../State/Context/AuthContextProvider"

function Start() {
  const { getLoggedInUser } = useAuthContext()

  return (
    <Layout>
      <h3>Welcome {getLoggedInUser().username},</h3>
      <h4>what did you eat for breakfast?</h4>
    </Layout>
  )
}

export default Start
