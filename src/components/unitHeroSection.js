import { Link } from 'gatsby'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { BUTTON_VARIANTS } from '../utils/constants'
import Button from './Button'
import { Heading } from './typography'
import { StructuredText } from 'react-datocms'

const UnitSection = styled.section`
  display: grid;
  grid-template-columns: 34fr 52fr minmax(120px, 14fr);
  padding: ${22 / 16}rem var(--container-horizontal-padding)
    0;
  max-width: var(--container-max-width);
  margin: 0 auto;
  @media (max-width: 1480px) {
    padding-left: ${38 / 16}rem;
    padding-right: ${42 / 16}rem;
  }
  @media (max-width: 1024px) {
    padding: ${22 / 16}rem ${22 / 16}rem 0;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
  z-index: 3;
  position: relative;
`

const TextContentWrapper = styled.div`
  padding: ${37 / 16}rem 1rem 0 0;
  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
  p {
    color: var(--paragraph-text);
    font-family: 'k2d';
    font-size: clamp(
      1rem,
      1.25vw,
      var(--paragraph-font-size)
    );
    line-height: 1.5;
    font-weight: 300;
  }

  @media (max-width: 920px) {
    grid-column: 1 / 5;
    padding: 2rem 0 0 0;
    p {
      max-width: 52ch;
    }
  }
`

const UnitType = styled.h3`
  font-size: var(--paragraph-font-size);
  font-weight: bold;
  font-family: 'k2d';
  text-transform: uppercase;
  color: var(--primary-navy);
`
const UnitName = styled(Heading)`
  margin-top: 0.5rem;

  + p {
    margin-top: 1.5rem;
  }
  + p + p {
    margin-top: 1.5rem;
  }
`

const UnitShortDescription = styled(StructuredText)``

const ButtonsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: auto auto;
  grid-gap: clamp(${20 / 16}rem, 2vw, ${30 / 16}rem);
  margin-top: clamp(${40 / 16}rem, 5.2vw, ${76 / 16}rem);
`

const MainImage = styled(motion(GatsbyImage))`
  margin-top: ${51 / 16}rem;
  img {
    object-fit: contain !important;
  }
  @media (max-width: 920px) {
    grid-column: 1 / 4;
  }
  @media (max-width: 560px) {
    grid-column: 1 / 5;
  }
`

const ThumbnailsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 920px) {
    margin-top: ${51 / 16}rem;
    grid-column: 4 / 5;
    margin-left: 0.75rem;
  }
  @media (max-width: 560px) {
    margin-top: 2rem;
    grid-column: 1 / 5;
    margin-left: 0;
    flex-direction: row;
  }
`

const ThumbnailItem = styled.li`
  border-radius: ${10 / 16}rem;
  overflow: hidden;
  border: 2px solid
    ${({ active }) =>
      active ? 'var(--primary-red)' : 'transparent'};
  transition: border-color 0.4s var(--transition-function);
  box-shadow: 0 12px 18px -6px rgba(0, 0, 0, 0.175);

  &:hover,
  &:focus-within {
    border: 2px solid var(--primary-red);
    outline: none;
  }
  + li {
    margin-top: 1rem;
    @media (max-width: 560px) {
      margin-top: 0;
      margin-left: clamp(0.5rem, 2.85vw, 1rem);
    }
  }

  .gatsby-image-wrapper {
    border-radius: ${10 / 16}rem;
    transition: transform 0.8s var(--transition-function);
  }

  &:focus-within .gatsby-image-wrapper,
  &:hover .gatsby-image-wrapper {
    transform: scale(1.05);
  }
`

const ThumbnailButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white);
  border-radius: ${10 / 16}rem;
  padding: 0;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover,
  &:focus-visible {
    outline: none;
  }
`

const ThumbnailGallery = ({
  images,
  activeIndex,
  setActiveIndex
}) => {
  return (
    <ThumbnailsWrapper>
      {images.map((thumbnail, index) => (
        <ThumbnailItem
          active={index === activeIndex}
          key={thumbnail.originalId}>
          <ThumbnailButton
            onClick={() => setActiveIndex(index)}>
            <GatsbyImage image={thumbnail.smallerImage} />
          </ThumbnailButton>
        </ThumbnailItem>
      ))}
    </ThumbnailsWrapper>
  )
}

const UnitHeroSection = ({
  unitType,
  unitName,
  unitShortDescription,
  unitGalleryImages
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <UnitSection>
      <TextContentWrapper>
        <UnitType>{unitType}</UnitType>
        <UnitName as='h1' color='var(--primary-red)'>
          {unitName}
        </UnitName>
        <UnitShortDescription data={unitShortDescription} />
        <ButtonsWrapper>
          {/* <Button
          as={Link}
          to='/konfiguruj'
          variant={BUTTON_VARIANTS.FILLED}>
          Konfiguruj
        </Button>
        <Button
          as={Link}
          to='/kontakt'
          variant={BUTTON_VARIANTS.OUTLINED}>
          Zapytaj o cenę
        </Button> */}
          <Button
            as={Link}
            to='/kontakt'
            variant={BUTTON_VARIANTS.FILLED}>
            Zapytaj o cenę
          </Button>
        </ButtonsWrapper>
      </TextContentWrapper>
      <AnimatePresence exitBeforeEnter>
        <MainImage
          key={unitGalleryImages[activeIndex].originalId}
          // initial={{opacity: 0}}
          // animate={{opacity: 1}}
          // exit={{opacity: 0}}
          image={
            unitGalleryImages[activeIndex].gatsbyImageData
          }
        />
      </AnimatePresence>
      <ThumbnailGallery
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        images={unitGalleryImages}
      />
    </UnitSection>
  )
}

export default UnitHeroSection
