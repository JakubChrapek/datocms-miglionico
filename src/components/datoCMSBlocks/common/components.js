import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'
import styled, { css } from 'styled-components'
import {
  COLUMN_LAYOUT_VARIANTS,
  UNIT_SECTION_VARIANTS
} from '../../../utils/constants'

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: clamp(3rem, 5.55vw, 5rem);
  width: 100%;

  + section {
    margin-top: clamp(3rem, 7.61vw, ${78 / 16}rem);
  }
  + h2 {
    margin-top: clamp(2.25rem, 5.7vw, ${60 / 16}rem);
  }

  ${({ variant }) =>
    variant === UNIT_SECTION_VARIANTS.VERTICAL &&
    css`
      grid-gap: 0;
      .gatsby-image-wrapper {
        margin-left: clamp(
          ${80 / 16}rem,
          8.33vw,
          ${120 / 16}rem
        );

        @media (max-width: 1010px) {
          margin: 1.5rem 0 0 0;
        }
      }
    `}

  @media(max-width: 1010px) {
    grid-template-columns: 1fr;
    max-width: 95ch;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ variant }) =>
    variant === COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT
      ? css`
          order: -1;
        `
      : variant === UNIT_SECTION_VARIANTS.VERTICAL &&
        css`
          justify-content: flex-start;
        `}

  > p {
    font-size: var(--paragraph-font-size);
    font-weight: 300;
    color: var(--paragraph-text);
    line-height: 1.33;
    letter-spacing: 0.54px;

    + h1,
    + h2,
    + h3,
    + h4 {
      margin-top: clamp(1.5rem, 3.9vw, 2.5rem);
    }
    + p {
      margin-top: clamp(0.75rem, 1.95vw, 1.25rem);
    }
    + ul {
      margin: 1.25rem 0;
      font-size: var(--paragraph-font-size);
      font-weight: 300;
      color: var(--paragraph-text);
      line-height: 1.33;
      letter-spacing: 0.54px;
      list-style-type: disc;
      list-style-position: inside;
      > li {
        + li {
          margin-top: 0.25rem;
        }
        > * {
          display: inline;
        }
      }
    }
  }
`

export const Title = styled.h3`
  font-weight: 600;
  line-height: 1.3;
  font-size: ${({ smallerHeading }) =>
    smallerHeading
      ? 'var(--subheader-font-size)'
      : 'var(--header-font-size)'};
  + p {
    margin-top: clamp(1.5rem, 3.9vw, 2.5rem);
  }

  ${({ smallerHeading }) =>
    smallerHeading
      ? css`
          color: var(--primary-navy);
          + p {
            margin-top: ${24 / 16}rem;
          }
        `
      : css`
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

  + h1, + h2, + h3, + h4 {
    margin-top: ${40 / 16}rem;
  }
`

export const Content = styled(StructuredText)``

export const UnitGraphicImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08);
  img {
    object-fit: cover !important;
  }
  > div {
    max-width: 100% !important;
  }
  @media (max-width: 1010px) {
    order: 1;
  }
  ${({ variant }) =>
    variant === UNIT_SECTION_VARIANTS.VERTICAL &&
    css`
      @media (max-width: 1010px) {
        max-height: ${420 / 16}rem;
      }
    `}
`
