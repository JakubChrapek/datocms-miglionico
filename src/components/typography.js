import styled, { css } from 'styled-components'
import { COLORS } from '../utils/constants'

export const HeroTitle = styled.div`
  p{
    font-family: 'k2d';
    font-size: var(--header-font-size);
    line-height: ${80 / 64};
    font-weight: 600;
    margin-bottom: ${24 / 16}rem;
    color: var(--primary-navy);
    mark {
      color: var(--primary-red);
      background-color: transparent;
    }
    @media (max-width: 387px) {
      --header-font-size: clamp(1.5rem, 8.2vw, 2rem);
    }
  }
`

export const HeroParagraph = styled.div`
  p{
    font-size: var(--paragraph-font-size);
    line-height: ${28 / 18};
    font-weight: 300;
    color: var(--paragraph-text);
    max-width: ${555 / 16}rem;
    margin-bottom: 2rem;

    strong {
      font-weight: 700;
    }

    @media (max-width: 620px) {
      margin: 0 0 3rem;
      text-align: center;
    }
  }
`

export const Subheading = styled.div`
  p{
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
      margin-top: 1rem;
    }
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
    margin-top: ${52 / 16}rem;
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

export const ContactDetailsTitle = styled.h3`
  font-size: clamp(${28 / 16}rem, 2.5vw, ${36 / 16}rem);
  line-height: 1.3;
  font-weight: 600;
  font-family: 'k2d';
  color: var(--primary-navy);
  margin-bottom: ${30 / 16}rem;
  * + & {
    margin-top: ${30 / 16}rem;
  }
  @media (max-width: 640px) {
    align-self: center;
    text-align: center;
    font-size: clamp(${32 / 16}rem, 8.47vw, ${40 / 16}rem);
  }
`

export const Paragraph = styled.div`
  p{
    color: var(--paragraph-text);
    font-size: var(--paragraph-font-size);
    line-height: ${28 / 18};
    font-weight: 300;
    max-width: ${555 / 16}rem;

    strong {
      font-weight: 700;
    }
  }
`
