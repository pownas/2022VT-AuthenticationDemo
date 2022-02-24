import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h2>You are not logged in.</h2>
    </Layout>
  )
}

export default IndexPage
