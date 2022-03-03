import styled from "styled-components"

export const StyledFooter = styled.footer`
  color: #fff;
  padding: 20px 0 20px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: 600px) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
