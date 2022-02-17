import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  flex: 1 1 54%;
  display: grid;
  grid-gap: clamp(1.5rem, 2.77vw, ${40 / 16}rem);
  @media (max-width: 1240px) {
    margin-right: 4rem;
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
        border-radius: ${10 / 16}rem;
        background-color: var(--primary-red);
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
        border-radius: ${10 / 16}rem;
        background-color: var(--primary-navy);
      }
    }
    &:nth-of-type(4) {
      grid-area: d;
    }
  }
`

const ImagesGrid = ({ images }) => {
  return (
    <Grid>
      {images.map((image) => (
        <GatsbyImage
          key={image.originalId}
          image={image.gatsbyImageData}
        />
      ))}
    </Grid>
  )
}

export default ImagesGrid
