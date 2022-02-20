import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import styled from 'styled-components'
import { BUTTON_VARIANTS } from '../utils/constants'
import Button from './Button'
import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import { HeroParagraph, HeroTitle } from './typography'
import { StructuredText } from 'react-datocms'

const Wrapper = styled.section`
  background-color: var(--off-white);
  z-index: 1;
`

const Container = styled.div`
  max-width: var(--container-max-width);
  padding: 0 ${20 / 16}rem 0 ${41 / 16}rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47fr 53fr;
  @media (max-width: 1305px) {
    grid-template-columns: 55fr 45fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 55fr 45fr;
  }
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 620px) {
    padding: 0 ${20 / 16}rem;
  }
  position: relative;
`
const TextContentWrapper = styled.div`
  padding: ${43 / 16}rem clamp(3.6rem, 5vw, ${95 / 16}rem)
    ${70 / 16}rem 0;

  .mobile-only {
    display: none;
    visibility: hidden;
  }

  @media (max-width: 1305px) {
    padding: ${43 / 16}rem clamp(1.5rem, 3vw, 2rem)
      ${70 / 16}rem 0;
  }
  @media (max-width: 1024px) {
    z-index: 5;
  }
  @media (max-width: 920px) {
    ${HeroTitle} {
      max-width: ${555 / 16}rem;
    }
  }
  @media (max-width: 620px) {
    padding: 2rem 0 ${42 / 16}rem;
    .mobile-only {
      display: block;
      visibility: visible;
      img {
        object-fit: contain !important;
      }
    }
  }
`

const UnitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  @media (max-width: 1305px) {
    .gatsby-image-wrapper {
      width: 45vw;
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    .gatsby-image-wrapper {
      width: 50vw;
      img {
        object-fit: contain !important;
      }
    }
  }
  @media (max-width: 920px) {
    display: none;
  }
`

const ButtonsWrapper = styled.div`
  > button,
  > a {
    margin-right: ${15 / 16}rem;

    :last-of-type {
      margin-right: 0;
      margin-left: ${15 / 16}rem;
    }
  }
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    && > button,
    && a {
      margin: 0;
      &:last-of-type {
        margin-top: 1.75rem;
      }
    }
  }
`

const HeroBgImage = styled(BgImage)`
  z-index: 1;
  :after {
    filter: blur(5px);
    @media (max-width: 920px) {
      filter: blur(3px);
    }
  }
`

const HeroSection = ({
  title,
  textParagraph,
  ctaBtnText,
  findOutMoreBtnText,
  unitImage,
  heroBg
}) => {
  const pluginImage = getImage(heroBg)

  return (
    <Wrapper>
      <HeroBgImage image={pluginImage}>
        <Container>
          <TextContentWrapper>
            <HeroTitle>
              <StructuredText data={title} />
            </HeroTitle>
            <GatsbyImage
              className='mobile-only'
              image={unitImage}
            />
            <HeroParagraph>
              <StructuredText data={textParagraph} />
            </HeroParagraph>
            <ButtonsWrapper>
              <Button
                as={Link}
                to='/kontakt'
                variant={BUTTON_VARIANTS.FILLED}>
                {ctaBtnText}
              </Button>
              <Button
                as={ScrollLink}
                // to='/unit/nice-touch'
                to='oferta'
                spy={true}
                smooth={true}
                offset={-180}
                duration={600}
                variant={BUTTON_VARIANTS.OUTLINED}>
                {findOutMoreBtnText}
              </Button>
            </ButtonsWrapper>
          </TextContentWrapper>
          <UnitWrapper>
            <GatsbyImage image={unitImage} />
          </UnitWrapper>
        </Container>
      </HeroBgImage>
    </Wrapper>
  )
}

export default HeroSection
