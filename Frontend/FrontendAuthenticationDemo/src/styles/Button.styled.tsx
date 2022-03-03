import styled from "styled-components"

interface Props {
  btnColor?: string
  textColor?: string
}

export const Button = styled.button<Props>`
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: auto;
  padding: 1rem 20px;
  margin-top: 1.5rem;
  background-color: #8baaad;
  &:hover {
    opacity: 0.9;
  }
  @media (min-width: 1025px) {
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
  }

  @media (max-width: 1025px) {
    width: 100%;
  }
`
