import styled, { css } from 'styled-components'
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
  line-height: ${83 / 64};
  font-family: 'k2d', sans-serif;

  + p,
  + button,
  + h3,
  + h4,
  + h5 {
    margin-top: ${68 / 16}rem;
  }

  ${({ color }) =>
    color === COLORS.GRADIENT &&
    css`
      background: -webkit-linear-gradient(
        var(--primary-red),
        var(--primary-navy)
      );
      background: linear-gradient(
        96.12deg,
        #c3112d 4.74%,
        #262f6e 55.62%
      );
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`

export const Paragraph = styled.p`
  color: var(--paragraph-text);
  font-size: var(--smaller-paragraph-font-size);
  line-height: ${18 / 14}rem;
  font-weight: 300;
`
