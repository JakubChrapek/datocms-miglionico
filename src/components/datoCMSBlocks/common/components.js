import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'
import styled, { css } from 'styled-components'
import {
  COLUMN_LAYOUT_VARIANTS,
  UNIT_SECTION_VARIANTS
} from '../../../utils/constants'

export const SectionWrapper = styled.section`
  --container-horizontal-padding: 5rem;
  --container-max-width: calc( var(--container-max-size) - var(--container-horizontal-padding) );
  max-width: var(--container-max-width);
  padding: 0 2.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: clamp(3rem, 5.55vw, 5rem);
  align-items: center;
  width: 100%;
  overflow-x: hidden;

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

  @media (max-width: 1024px) {
    padding: 0;
  }
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
  strong{
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

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
  font-size: ${({ extraSmallHeading, smallerHeading }) =>
    extraSmallHeading
      ? 'var(--header4-font-size)'
      : smallerHeading
        ? 'var(--subheader-font-size)'
        : 'var(--header-font-size)'};
  + p {
    margin-top: clamp(1.5rem, 3.9vw, 2.5rem);
  }

  ${({ extraSmallHeading, smallerHeading }) =>
    smallerHeading || extraSmallHeading
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

export const TwoImages = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 clamp(30px, 9vw, 130px);

  span{
    min-width: 400px;
    aspect-ratio: 1.7/1;
    width: 100%;  
    background-color: var(--primary-red);
    border-radius: 10px;
  }
  img{
    width: 100%;
    aspect-ratio: 1.7/1;
  }

  .first{  
    margin-bottom: -100px;
    margin-left: clamp(-130px, -9vw, -30px);
    margin-right: clamp(30px, 9vw, 130px);

    img{
      width: 100%;
    }
  }

  .last{
    margin-top: -100px;
    margin-right: clamp(-130px, -9vw, -30px);
    margin-left: clamp(30px, 9vw, 130px);

    img{
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 clamp(30px, 5vw, 130px);

    .first{
      margin-left: clamp(-130px, -5vw, -30px);
      margin-right: clamp(30px, 5vw, 130px);
    }

    .last{
      margin-right: clamp(-130px, -5vw, -30px);
      margin-left: clamp(30px, 5vw, 130px);
    }
  }

  @media (max-width: 1009px) {
    padding: 0;
    span{
      min-width: unset;
      position: absolute;
      z-index: -1;
      width: calc(100% - 100px);
      left: 50px;
      right: 25px;
      transform: translateY(60%);
    }

    .first{
      margin: 0 100px 5% 0;
    }

    .last{
      margin: 5% 0 0 100px;
    }
  }

  @media (max-width: 460px) {
    span{
      width: 150%;
      height: 50%;
      left: -50px;
      transform: translateY(50%);
    }

    .first{
      margin: 0 0 5% 0;
    }

    .last{
      margin: 5% 0 0 0;
    }
  }
`

export const DownloadWrapper = styled.div`
  display: grid;
  grid-row-gap: 48px;
  
  h3{
    color: var(--primary-navy);
    font-size: 36px;
  }

  a{
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 24px;
    align-items: center;
    color: var(--primary-navy);
    text-decoration: none;
    width: fit-content;
  }

  @media (max-width: 860px) {
    grid-row-gap: 32px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 24px;
  }
`