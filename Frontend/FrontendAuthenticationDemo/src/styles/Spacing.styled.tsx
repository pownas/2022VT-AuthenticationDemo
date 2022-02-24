import styled from "styled-components"

interface Props {
  direction?: string
}

export const SpacingSmall = styled.div<Props>`
  display: flex;
  gap: 10px;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`

export const SpacingMedium = styled.div<Props>`
  display: flex;
  gap: 15px;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`

export const SpacingLarge = styled.div<Props>`
  display: flex;
  gap: 20px;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`
