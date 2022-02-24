import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

import { Container } from "../styles/Container.styled"
import { GlobalStyles } from "../styles/GlobalStyles.styled"
import { HeaderStyled } from "../styles/Header.styled"
import { Page } from "../styles/Container.styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderStyled>
        <Header companyName={"Authentication Demo"} />
      </HeaderStyled>
      <Container>
        <GlobalStyles />
        <Page>
          <main>{children}</main>
        </Page>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
