import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { COLORS } from '../utils/constants'
import FaqList from './faqList'
import {
  Heading,
  Paragraph,
  Subheading
} from './typography'

const FaqWrapper = styled.section``

const Container = styled.div`
  --container-horizontal-padding: 88px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${36 / 16}rem ${40 / 16}rem ${112 / 16}rem 3rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1006px) {
    flex-direction: column;
    --container-horizontal-padding: 80px;
    padding: ${36 / 16}rem ${40 / 16}rem ${112 / 16}rem;
  }
  @media (max-width: 672px) {
    --container-horizontal-padding: 40px;
    padding: ${36 / 16}rem ${20 / 16}rem ${112 / 16}rem;
  }
  @media (max-width: 570px) {
    align-items: center;
  }
`

const TextContentWrapper = styled.div`
  flex: 1 1 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: clamp(3rem, 4.16vw, ${60 / 16}rem);

  @media (max-width: 672px) {
    margin-right: 0;
  }
  @media (max-width: 570px) {
    align-items: center;
    text-align: center;
  }
  h2 {
    max-width: ${574 / 16}rem;
  }

  > p {
    max-width: ${555 / 16}rem;
  }
`

const FaqSection = ({
  smallerTitle,
  biggerTitle,
  paragraph,
  faqItems
}) => {
  return (
    <FaqWrapper>
      <Container>
        <TextContentWrapper>
          <Subheading as='span' color={COLORS.PRIMARY_NAVY}>
            <StructuredText data={smallerTitle} />
          </Subheading>
          <Heading color={COLORS.GRADIENT}>
            <StructuredText data={biggerTitle} />
          </Heading>
          <Paragraph>
            <StructuredText data={paragraph} />
          </Paragraph>
        </TextContentWrapper>
        <FaqList faqItems={faqItems} />
      </Container>
    </FaqWrapper>
  )
}

export default FaqSection
