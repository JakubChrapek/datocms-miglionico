import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  :after {
    content: '';
    position: absolute;
    width: clamp(160px, 62.22%, 400px);
    aspect-ratio: 400/230;
    background-color: var(--primary-red);
    border-radius: ${10 / 16}rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  > .gatsby-image-wrapper {
    position: absolute;
    border-radius: ${10 / 16}rem;
    width: clamp(160px, 62.22%, 400px);
    :first-of-type {
      top: 0;
      left: 0;
    }

    :last-of-type {
      bottom: 0;
      right: 0;
    }
  }
`

export const ImagesInRightColumn = ({ images }) => (
  <ImagesWrapper>
    <GatsbyImage image={images[0].gatsbyImageData} />
    <GatsbyImage image={images[1].gatsbyImageData} />
  </ImagesWrapper>
)

export default ImagesInRightColumn
