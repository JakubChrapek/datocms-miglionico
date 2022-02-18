import { Link } from 'gatsby'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { BUTTON_VARIANTS } from '../utils/constants'
import Button from './Button'
import { Heading } from './typography'

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
  z-index: 3;
  position: relative;
`

const TextContentWrapper = styled.div`
  padding: ${37 / 16}rem 1rem 0 0;
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
`

const UnitShortDescription = styled.p`
  && {
    margin-top: 1.5rem;
  }
  font-family: 'k2d';
  font-size: clamp(
    1rem,
    1.25vw,
    var(--paragraph-font-size)
  );
  line-height: 1.5;
  font-weight: 300;
  > p + p {
    margin-top: 1.5rem;
  }
`

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
`

const ThumbnailsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
        <UnitShortDescription
          dangerouslySetInnerHTML={{
            __html: unitShortDescription
          }}
        />
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
