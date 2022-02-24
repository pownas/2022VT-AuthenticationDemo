import React from "react"
import { Container } from "../Styles/Container.styled"
import { Flex } from "../styles/Flex.styled"
import { StyledFooter } from "../Styles/Footer.styled"
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import { StyledSocialIcons } from "../Styles/Socials.styled"

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>
              <h1>Demo</h1>
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquaddss
            </li>
            <li>+1-000-000-000</li>
            <li>example@demo.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <StyledSocialIcons>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </StyledSocialIcons>
        </Flex>

        <p>&copy; 2022 Demo. All rights reserved.</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
