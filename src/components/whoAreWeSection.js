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
  --container-horizontal-padding: ${37 / 16}rem;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: ${36 / 16}rem ${37 / 16}rem ${112 / 16}rem 0;
  display: flex;

  @media (max-width: 876px) {
    flex-direction: column;
    padding: ${36 / 16}rem ${20 / 16}rem ${60 / 16}rem;
    --container-horizontal-padding: ${40 / 16}rem;
  }
`

const TextContentWrapper = styled.div`
  flex: 1 1 46%;
  display: flex !important;
  visibility: visible !important;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${90 / 16}rem;

  @media (max-width: 1240px) {
    margin-left: 0;
  }

  h2 {
    max-width: ${380 / 16}rem;
  }

  a {
    margin-left: -${3 / 16}rem;
  }

  h2 + div {
    margin: 3.25rem 0 2.75rem 0;
  }

  @media (max-width: 1070px) {
    h2 + div {
      margin: 2.25rem 0 1.75rem 0;
    }
  }
  @media (max-width: 876px) {
    order: -1;
    text-align: center;
    align-items: center;
    h2 {
      max-width: unset;
    }
    > div {
      display: none !important;
      visibility: hidden !important;
    }
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
      <ImagesGrid
        buttonText={ctaText}
        mobileText={paragraph}
        images={gridImages}
      />
      <TextContentWrapper>
        <Subheading as='span' color={COLORS.PRIMARY_NAVY}>
          <StructuredText data={smallerHeading} />
        </Subheading>
        <Heading color={COLORS.GRADIENT}>
          <StructuredText data={heading} />
        </Heading>
        <Paragraph>
          <StructuredText data={paragraph} />
        </Paragraph>
        <Button
          variant={BUTTON_VARIANTS.FILLED}
          as={Link}
          to='/o-firmie'>
          {ctaText}
        </Button>
      </TextContentWrapper>
    </Container>
  </WhoAreWeWrapper>
)

export default WhoAreWeSection

