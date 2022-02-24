import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Col, Row } from "react-bootstrap"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const IndexPage = () => {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=0a2046e3e90682387123e7a46f0d486b"
    )
      .then(res => res.json())
      .then(response => console.log(response))
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <h2>You are not logged in.</h2>
    </Layout>
  )
}

export default IndexPage
