import { Link } from 'gatsby'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { BUTTON_VARIANTS, COLORS } from '../utils/constants'
import Button from './Button'
import ImagesGrid from './imagesGrid'
import {
  Heading,
  Paragraph,
  Subheading
} from './typography'

const WhoAreWeWrapper = styled.section``

const Container = styled.div`
  --container-horizontal-padding: 37px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${36 / 16}rem ${37 / 16}rem ${112 / 16}rem 0;
  margin: 0 auto;
  display: flex;
`

const TextContentWrapper = styled.div`
  flex: 1 1 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${90 / 16}rem;

  @media (max-width: 1240px) {
    margin-left: 0;
  }

  h2 {
    max-width: ${380 / 16}rem;
  }

  p {
    margin-bottom: ${96 / 16}rem;
  }

  a {
    margin-left: -${3 / 16}rem;
  }
`

const WhoAreWeSection = ({
  smallerHeading,
  heading,
  paragraph,
  ctaText,
  gridImages
}) => (
  <WhoAreWeWrapper>
    <Container>
      <ImagesGrid images={gridImages} />
      <TextContentWrapper>
        <Subheading as='span' color={COLORS.PRIMARY_NAVY}>
          {smallerHeading}
        </Subheading>
        <Heading color={COLORS.GRADIENT}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Button
          variant={BUTTON_VARIANTS.FILLED}
          as={Link}
          to='/o-nas'>
          {ctaText}
        </Button>
      </TextContentWrapper>
    </Container>
  </WhoAreWeWrapper>
)

export default WhoAreWeSection
