import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import styled from 'styled-components'
import { BUTTON_VARIANTS } from '../utils/constants'
import Button from './Button'
import { Link } from 'gatsby'

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
  position: relative;
`
const TextContentWrapper = styled.div`
  flex: 1 1 47%;
  padding: ${43 / 16}rem ${95 / 16}rem ${70 / 16}rem 0;
`

const UnitWrapper = styled.div`
  flex: 1 1 53%;
  position: absolute;
  right: 0;
  top: 0;
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
`

const HeroBgImage = styled(BgImage)`
  z-index: 1;
  :after {
    filter: blur(5px);
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
            {title()}
            <p>{textParagraph()}</p>
            <ButtonsWrapper>
              <Button
                as={Link}
                to='/kontakt'
                variant={BUTTON_VARIANTS.FILLED}>
                {ctaBtnText}
              </Button>
              <Button
                as={Link}
                to='/unity'
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
