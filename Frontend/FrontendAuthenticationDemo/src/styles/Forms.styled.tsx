import styled from "styled-components"

export const AuthenticationCard = styled.div`
  width: 50%;
  align-items: center;
  background-color: rgba(139, 170, 172, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 25px;

  & > div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 20px 0;
  }
`
