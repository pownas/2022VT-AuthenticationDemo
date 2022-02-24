import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.text};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`