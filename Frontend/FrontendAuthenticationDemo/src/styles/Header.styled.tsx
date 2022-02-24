import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px;
`

export const Nav = styled.nav`
  display: flex;
  height: 80 px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1025px) {
  }
`
export const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`

export const Logo = styled.p`
  font-size: 1.5rem;
  text-decoration-none;
  margin-right: 10rem;

  @media (min-width: 1025px) {
  font-size: 35px;
    }
`
interface Props {
  isActive: boolean
}

export const NavMenu = styled.div<Props>`
  display: flex;
  text-align: left;
  width: 70vw;
  flex-direction: row;
  justify-content: end;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    display: flex;
    text-align: left;
    width: 70vw;
    flex-direction: row;
    justify-content: end;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 35px;
    background: #E6E4DF; 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    width: 100%;
    height 100vh;
    position: absolute;
    bottom: ${props => (props.isActive ? "0" : "100%")};
    opacity: "1";
    z-index: ${props => (props.isActive ? "1" : "1")};
    transition: all 0.5s ease;
    
    }
  }
`
export const NavItem = styled.div`
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 80%;
    .p {
      font-weight: bold;
      font-size: 2rem;
    }

    button {
      background-color: transparent;
      border: none;
      box-shadow: 0 0 0;
      padding: 1rem 20px;
      margin-top: 1.5rem;
      &:focus {
        background-color: white;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
