import styled from "styled-components"

export const Sections = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: top;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`
export const SelectionMenu = styled.div`
  display: flex;
  width: 70%;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`
export const Display = styled.div`
  display: flex;
  width: 40%;
  p {
    font-size: clamp(0.6rem, 2.5vw, 2.5rem);
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`
export const ListStyled = styled.div`
  overflow-y: scroll;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 4px;
  height: 100%;
  max-height: 100vh;
  width: 100%;

  & ul {
    list-style: none;
  }

  li {
    display: flex;
    margin: 8px;
  }

  & li:hover {
    opacity: 2;
  }
`

export const ListItemStyle = styled.div`
  display: flex;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
  height: 80%;
  padding: 15px;
  align-content: space-between;
  justify-content: space-between;

  div {
    width: 25%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: transparent;
  }

  p {
    font-size: clamp(0.6rem, 1.5vw, 1.1rem);
  }

  @media (max-width: 992px) {
    display: flex;
    width: 100%;
    justify-content: center;

    div {
      margin: 0.8rem;
    }
  }
`
export const Selected = styled.div`
  li {
    border: solid 3px #8baaad;
  }
`
export const Remove = styled.div`
  justify-content: flex-end;
`
