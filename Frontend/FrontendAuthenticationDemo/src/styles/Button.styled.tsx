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
  background-color: ${({ theme, btnColor }) =>
    btnColor ? btnColor : theme.colors.button};
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.colors.text};

  &:hover {
    opacity: 0.9;
  }
  @media (min-width: 1025px) {
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
  }
`
export const ItemDetailsButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: 20%;
  padding: 1rem 20px;
  background-color: ${({ theme, btnColor }) =>
    btnColor ? btnColor : theme.colors.button};
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.colors.text};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  @media (min-width: 1025px) {
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
  }
`
