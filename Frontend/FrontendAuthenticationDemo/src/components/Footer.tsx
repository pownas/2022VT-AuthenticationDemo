import React from "react"
import { Container } from "../Styles/Container.styled"
import { Flex } from "../styles/Flex.styled"
import { StyledFooter } from "../Styles/Footer.styled"

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li>
              &copy; VT 2022, Grupp 17. All rights reserved. &nbsp;
              <a href="https://sup2022teamafry.wordpress.com">
                sup2022teamafry.wordpress.com
              </a>
            </li>
          </ul>
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
