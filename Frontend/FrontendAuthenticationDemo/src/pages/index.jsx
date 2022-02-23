import React from "react"
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import { navigate } from "gatsby" //import navigate from gatsby

import Layout from "../components/layout"

const IndexPage = () => {
  const Login = e => {}
  return (
    <Layout>
      <Form onSubmit={Login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  )
}
export default IndexPage
