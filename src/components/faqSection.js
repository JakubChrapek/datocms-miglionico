import React from 'react'
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
`

const TextContentWrapper = styled.div`
  flex: 1 1 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: ${60 / 16}rem;

  h2 {
    max-width: ${574 / 16}rem;
  }

  p {
    max-width: ${555 / 16}rem;
  }
`

const FaqSection = ({
  subheading = 'FAQ – najczęściej zadawane pytania',
  heading = 'O co najczęściej pytają nasi Klienci?',
  paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a arcu sed risus tristique. Eget non velit semper vitae sollicitudin eget. Quis felis convallis tristique rhoncus scelerisque. Cras diam sed id habitant purus et lorem.',
  faqItems
}) => {
  return (
    <FaqWrapper>
      <Container>
        <TextContentWrapper>
          <Subheading as='span' color={COLORS.PRIMARY_NAVY}>
            {subheading}
          </Subheading>
          <Heading color={COLORS.GRADIENT}>
            {heading}
          </Heading>
          <Paragraph>{paragraph}</Paragraph>
        </TextContentWrapper>
        <FaqList faqItems={faqItems} />
      </Container>
    </FaqWrapper>
  )
}

export default FaqSection
