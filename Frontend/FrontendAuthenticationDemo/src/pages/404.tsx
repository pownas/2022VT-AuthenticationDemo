import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {Button} from "../styles/Button.styled";
import { navigate } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Button textColor="#262626" onClick={() => navigate('/')}>
      Go to home page
    </Button>
  </Layout>
)

export default NotFoundPage
