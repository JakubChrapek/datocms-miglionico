import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import styled from 'styled-components'
import { BUTTON_VARIANTS } from '../utils/constants'
import Button from './Button'
import { Link } from 'gatsby'

const Wrapper = styled.header`
  background-color: var(--off-white);
`

const Container = styled.div`
  max-width: var(--container-max-width);
  padding: 0 ${20 / 16}rem 0 ${41 / 16}rem;
  margin: 0 auto;
  display: flex;
`
const TextContentWrapper = styled.div`
  flex: 1 1 47%;
  padding: ${43 / 16}rem ${95 / 16}rem 1.5rem 0;
`

const UnitWrapper = styled.div`
  flex: 1 1 53%;
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
