import React, { useState } from "react"
import { navigate } from "gatsby"
import { useAuthContext } from "../../State/Context/AuthContextProvider"
import { LoginRequest } from "../../service/Authentication"
import { AuthenticationCard } from "../../styles/Forms.styled"
import { Form, Col } from "react-bootstrap"
import { Button } from "../../styles/Button.styled"
import { SpacingSmall } from "../../styles/Spacing.styled"
import { Center } from "../../styles/Align.styled"
import Seo from "../../components/Seo"
import useValidate from "../../hooks/useValidate"
import Layout from "../../components/Layout"
import ClipLoader from "react-spinners/ClipLoader"

const Login = () => {
  const { login } = useAuthContext()
  const [loaded, setLoaded] = useState(true)

  const {
    value: usernameVal,
    isValid: usernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: resetUsernamenput,
  } = useValidate(value => true)

  const {
    value: passwordVal,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordnput,
  } = useValidate(value => true)

  let formIsValid = false

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true
  }

  const Login = (event: any) => {
    event.preventDefault()
    setLoaded(false)

    const user = {
      username: usernameVal,
      password: passwordVal,
    }

    LoginRequest(user)
      .then(token => {
        login(token)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoaded(true)
      })

    resetUsernamenput()
    resetPasswordnput()
  }

  return (
    <Layout>
      {/* <Seo title="Login" /> */}
      <Center>
        <h1 style={{ fontSize: "80px" }}>Login</h1>
        <AuthenticationCard>
          <Form onSubmit={Login} className="w-100">
            <h3>Login</h3>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="USERNAME"
                onChange={event => {
                  usernameChangeHandler(event)
                }}
                onBlur={usernameBlurHandler}
                value={usernameVal}
              />
              {usernameInputHasError && (
                <p className="text-danger">Email is not formatted correctly</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={event => {
                  passwordChangeHandler(event)
                }}
                onBlur={passwordBlurHandler}
                value={passwordVal}
              />
              {passwordInputHasError && (
                <p className="text-danger">
                  Password is not formatted correctly
                </p>
              )}
            </Form.Group>
            <Button textColor="#262626" type="submit">
              {loaded ? (
                <>Login</>
              ) : (
                <>
                  <Col>Login</Col>
                </>
              )}
            </Button>{" "}
            {!loaded ? (
              <span style={{ marginLeft: "2rem" }}>
                <ClipLoader loading={true} size={15} />
              </span>
            ) : (
              <></>
            )}
          </Form>
        </AuthenticationCard>
        <SpacingSmall>
          <Button
            textColor="#262626"
            onClick={() => navigate("/authentication/Register")}
          >
            Register
          </Button>
        </SpacingSmall>
      </Center>
    </Layout>
  )
}

export default Login
