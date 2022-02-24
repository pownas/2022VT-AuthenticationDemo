import React from "react"
import { useAuthContext } from "../State/Context/AuthContextProvider"
import {
  HeaderStyled,
  Nav,
  Logo,
  NavItem,
  LogoLink,
} from "../styles/Header.styled"
import { Button } from "../styles/Button.styled"
import { Link } from "gatsby"
import { Container } from "../styles/Container.styled"

interface Props {
  companyName: String
}

function Header({ companyName }: Props) {
  const { isLoggedIn, logout } = useAuthContext()

  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <LogoLink to={"/"}>
            <Logo>{companyName}</Logo>
          </LogoLink>

          <Nav>
            {isLoggedIn() ? (
              <NavItem>
                <Button textColor="#262626" onClick={logout}>
                  Log Out
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <Link to="/authentication/Login">
                  <Button textColor="#262626">Login</Button>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Nav>
      </Container>
    </HeaderStyled>
  )
}
export default Header
