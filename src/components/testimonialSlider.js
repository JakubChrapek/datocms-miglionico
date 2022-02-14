import React from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'

const CarouselWrapper = styled.div`
  width: 100%;
  border: 3px solid;
  position: relative;
  margin: 0 var(--arrow-size);
`

const IconButton = styled.button`
  border: 4px solid var(--primary-navy);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: var(--arrow-size);
  height: var(--arrow-size);
  opacity: 0.5;
  background-color: transparent;
  transition: opacity 0.4s var(--transition-function);
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }

  &:focus-visible {
    opacity: 1;
    outline: 4px solid var(--primary-navy);
    outline-offset: 4px;
  }

  &:hover {
    opacity: 1;
  }

  [disabled] {
    opacity: 0;
    pointer-events: none;
  }
`

const CarouselContainer = styled.div`
  width: calc(100% - 4.25 * var(--arrow-size));
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  padding: 40px 0;
`

const CardWrapper = styled.blockquote`
  min-width: 31%;
  border: 1px solid;
  padding: 20px 12px;
  aspect-ratio: 360 / 365;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardFooter = styled.footer`
  order: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.cite``

const Subtitle = styled.cite``

const Content = styled.p`
  order: 1;
`

const Card = ({ title, subtitle, content }) => (
  <CardWrapper>
    <Content>{content}</Content>
    <CardFooter>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardFooter>
  </CardWrapper>
)

const TestimonialSlider = ({ testimonials }) => {
  return (
    <CarouselWrapper>
      <IconButton>
        <ArrowLeft color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <IconButton>
        <ArrowRight color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <CarouselContainer>
        {testimonials.map((testimonial) => (
          <Card
            title='Klient 1'
            subtitle='Miejscowość 1'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, iaculis laoreet laoreet a morbi lacinia. Mauris nibh mi dui aenean massa. Est ornare et adipiscing orci donec.'
          />
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  )
}

export default TestimonialSlider
