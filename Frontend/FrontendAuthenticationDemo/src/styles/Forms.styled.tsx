import styled from "styled-components";

export const AuthenticationCard = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.authCard};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 25px;
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    flex-direction: column;
    margin: 20px 0;
  }
`