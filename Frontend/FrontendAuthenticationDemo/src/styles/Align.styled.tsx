import styled from 'styled-components'

interface ListStyledProps{
    readonly hasLargeGap: boolean;
  }
  

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SideBySide = styled.div<ListStyledProps>`
    display: flex;
    justify-content: center;
    flex-direction: rows;
    width: 100%;
    margin-top: ${props=> props.hasLargeGap ? "2rem" : "0rem"};
    gap: ${props=> props.hasLargeGap ? "4rem" : "2rem"};

    @media only screen and (max-width: ${({ theme }) => theme.responsive.md}) {
        gap: 1.5rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.responsive.lg}) {
        flex-direction: column;
    }
`