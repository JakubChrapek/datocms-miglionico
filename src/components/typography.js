import styled from 'styled-components'
import { COLORS } from '../utils/constants'

export const Subheading = styled.p`
  color: ${({ color }) => color ?? COLORS.WHITE};
  font-size: var(--paragraph-font-size);
  font-weight: 700;
  line-height: ${23 / 18};
  font-family: 'k2d', sans-serif;
  text-transform: uppercase;

  + h1,
  + h2,
  + h3,
  + h4,
  + h5,
  + h6,
  + p {
    margin-top: ${30 / 16}rem;
  }
`

export const Heading = styled.h2`
  color: ${({ color }) => color ?? COLORS.WHITE};
  font-size: var(--header-font-size);
  font-weight: 600;
  line-height: 1;
  font-family: 'k2d', sans-serif;
`
