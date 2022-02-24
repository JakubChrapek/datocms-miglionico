import React from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import { COLORS } from '../utils/constants'
import TestimonialSlider from './testimonialSlider'
import { Heading, Subheading } from './typography'

const TestimonialsWrapper = styled.section``

const TestimonialsContainer = styled.section`
  --container-horizontal-padding: 80px;
  --container-max-width: var(--container-max-size);
  max-width: var(--container-max-width);
  padding: 0 ${40 / 16}rem ${92 / 16}rem ${40 / 16}rem;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1180px) {
    --container-horizontal-padding: 0;
    padding-left: 0;
    padding-right: 0;
  }
`

const TestimonialsContentWrapper = styled.div`
  --arrow-size: 3.5rem;

  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TestimonialsSection = ({
  smallerTitle,
  biggerTitle,
  testimonials
}) => {
  return (
    <TestimonialsWrapper>
      <TestimonialsContainer>
        <TestimonialsContentWrapper>
          <Subheading as='span' color={COLORS.PRIMARY_NAVY}>
            <StructuredText data={smallerTitle} />
          </Subheading>
          <Heading color={COLORS.GRADIENT}>
            <StructuredText data={biggerTitle} />
          </Heading>
          <TestimonialSlider testimonials={testimonials} />
        </TestimonialsContentWrapper>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  )
}

export default TestimonialsSection
