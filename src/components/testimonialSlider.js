import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'

const CarouselWrapper = styled.div`
  width: 100%;
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

  :disabled {
    opacity: 0;
    pointer-events: none;
  }
`

const CarouselContainer = styled.div`
  --carousel-container-width: calc(
    100% - 4.25 * var(--arrow-size)
  );
  --gap-width: ${25 / 16}rem;
  width: var(--carousel-container-width);
  gap: var(--gap-width);
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  padding: ${40 / 16}rem 0;
`

const CardWrapper = styled(motion.blockquote)`
  position: relative;
  --card-padding-horizontal: ${40 / 16}rem;
  --border-width: 2px;
  --container-width: calc(
    -2 * var(--gap-width) + 4.25 * var(--arrow-size) + var(--carousel-container-width)
  );
  --carousel-item-width: calc(
    -2 * var(--border-width) + var(--container-width) / 3 + -1 *
      var(--card-padding-horizontal)
  );
  min-width: var(--carousel-item-width);
  aspect-ratio: 360 / 365;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${40 / 16}rem
    calc(var(--card-padding-horizontal) / 2) 0;
  box-shadow: 0.25rem 0.25rem ${25 / 16}rem 0
    rgba(0, 0, 0, 0.05);
  border-radius: ${10 / 16}rem;
  border: var(--border-width) solid
    ${({ active }) => (active ? 'red' : 'transparet')};
`

const CardFooter = styled.footer`
  order: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.cite`
  font-size: var(--smaller-header-font-size);
  line-height: 1.33;
  color: var(--primary-navy);
  font-family: 'k2d', sans-serif;
  font-weight: 400;
  margin-bottom: 0.25rem;
`

const Subtitle = styled.cite`
  font-size: var(--paragraph-font-size);
  line-height: 1.3;
  color: var(--primary-red);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  margin-bottom: 1.5rem;
`

const Content = styled.p`
  order: 1;
  font-size: var(--paragraph-font-size);
  line-height: 1.3;
  color: var(--gray);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  text-align: center;
  transition: color 0.3s var(--transition-function);
`

const Card = ({
  title,
  subtitle,
  content,
  active,
  index,
  position
}) => (
  <CardWrapper
    active={active}
    animate={{
      left: `calc(2 * var(--card-padding-horizontal) + ${-position} * var(--carousel-item-width)`
    }}>
    <Content>{content}</Content>
    <CardFooter>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardFooter>
  </CardWrapper>
)

const TestimonialSlider = ({ testimonials }) => {
  const [position, setPosition] = useState(0)
  const handleRightArrow = () => {
    if (position < testimonials.length - 1) {
      setPosition(position + 1)
    }
  }
  const handleLeftArrow = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }
  return (
    <CarouselWrapper>
      <IconButton
        onClick={handleLeftArrow}
        disabled={position <= 0}>
        <ArrowLeft color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <IconButton
        onClick={handleRightArrow}
        disabled={position >= testimonials.length - 1}>
        <ArrowRight color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <CarouselContainer>
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            active={position === index - 1}
            index={index}
            position={position}
            title={testimonial.clientName}
            subtitle={testimonial.city}
            content={testimonial.testimonialContent}
          />
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  )
}

export default TestimonialSlider
