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

  //#region FormValidation

  const {
    value: usernameVal,
    isValid: usernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useValidate(value => true)

  const {
    value: passwordVal,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useValidate(value => true)

  let formIsValid = false

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true
  }

  //#endregion

  const Login = (event: any) => {
    event.preventDefault()

    const loginDto = {
      username: usernameVal,
      password: passwordVal,
    }

    LoginRequest(loginDto)
      .then(jwtToken => { login(jwtToken) })
      .catch(error => console.log(error))

    //Validation on Username and Password
    resetUsernameInput();
    resetPasswordInput();
  }

  return (
    <Layout>
      <Center>
        <AuthenticationCard>
          <Form onSubmit={Login}>
            <h3>Login</h3>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" 
                            placeholder="USERNAME" 
                            onChange={event => { usernameChangeHandler(event) }} 
                            value={usernameVal} 
              />
              {usernameInputHasError && ( <p className="text-danger">Email is not formatted correctly</p> )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
                            placeholder="PASSWORD"
                            onChange={event => { passwordChangeHandler(event) }} 
                            value={passwordVal}
              />
              {passwordInputHasError && ( <p className="text-danger">Password is not formatted correctly</p>)}
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </AuthenticationCard>
      </Center>
    </Layout>
  )
}

export default Login