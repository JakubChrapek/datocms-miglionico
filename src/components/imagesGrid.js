import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { BUTTON_VARIANTS, COLORS } from '../utils/constants'
import Button from './Button'
import { Paragraph } from './typography'

const MobileText = styled(Paragraph)`
  max-width: 35rem;
  text-align: center;
  margin: 4.5rem auto 3.5rem;
`

const Grid = styled.div`
  flex: 1 1 54%;
  display: grid;
  grid-gap: clamp(1.5rem, 2.77vw, ${40 / 16}rem);
  @media (max-width: 1240px) {
    margin-right: 4rem;
  }
  @media (max-width: 1020px) {
    margin-right: 2.5rem;
  }
  ~ p,
  ~ a {
    display: none;
    visibility: hidden;
  }
  @media (max-width: 876px) {
    grid-gap: clamp(0.5rem, 2.77vw, ${30 / 16}rem);
    margin: ${58 / 16}rem 0 0 0;
    ~ p {
      display: block;
      visibility: visible;
    }
    ~ a {
      display: inline-block;
      align-self: center;
      visibility: visible;
    }
  }
  grid-template-areas:
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a b b b b b b b'
    'a a a a a a a a a a a a d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d'
    'c c c c c c c c c c c c d d d d d d d';

  > .gatsby-image-wrapper {
    overflow: visible;
    box-shadow: 0 30px 32px -18px rgb(0 0 0 / 40%);
    &,
    > div,
    > img {
      border-radius: ${10 / 16}rem;
    }
    position: relative;
    &:nth-of-type(1) {
      grid-area: a;
      :before {
        content: '';
        position: absolute;
        right: -${20 / 16}rem;
        top: -${30 / 16}rem;
        width: 80%;
        height: 87.5%;
        border-radius: ${16 / 16}rem;
        background-color: var(--primary-red);
        @media (max-width: 876px) {
          width: 85%;
          right: -${14 / 16}rem;
          top: -${28 / 16}rem;
        }
        @media (max-width: 620px) {
          top: -12%;
          right: -3%;
        }
      }
    }
    &:nth-of-type(2) {
      grid-area: b;
    }
    &:nth-of-type(3) {
      grid-area: c;
      :before {
        content: '';
        position: absolute;
        left: -5%;
        bottom: -${30 / 16}rem;
        width: 65%;
        height: 87.5%;
        border-radius: ${16 / 16}rem;
        background-color: var(--primary-navy);
        @media (max-width: 876px) {
          left: -10%;
          width: 70%;
          bottom: -${20 / 16}rem;
        }
        @media (max-width: 620px) {
          width: 90%;
          left: -25%;
          bottom: -10%;
        }
      }
    }
    &:nth-of-type(4) {
      grid-area: d;
    }
  }
`

const ImagesGrid = ({ images, mobileText, buttonText }) => {
  return (
    <>
      <Grid>
        {images.map((image) => (
          <GatsbyImage
            key={image.originalId}
            image={image.gatsbyImageData}
          />
        ))}
      </Grid>
      <MobileText>
        <StructuredText data={mobileText} />
      </MobileText>
      <Button
        variant={BUTTON_VARIANTS.FILLED}
        as={Link}
        to='/o-nas'>
        {buttonText}
      </Button>
    </>
  )
}

export default ImagesGrid
