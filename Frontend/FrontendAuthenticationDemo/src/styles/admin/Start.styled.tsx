import styled from "styled-components"

export const Cards = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 50px;
`

export const Card = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100px;
  text-align: center;
  height: 10rem;
  padding: 15px 15px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  border-radius: 10px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  & > h1 {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    text-align: center;
    width: 100px;
    height: 300px;
    padding: 1px 15px;
    & > h1 {
      font-size: 2.5rem;
    }
  }
`
