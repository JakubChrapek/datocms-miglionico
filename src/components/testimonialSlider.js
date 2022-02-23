import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconButton } from './iconButton'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'

const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
`

const CarouselContainer = styled(motion.div)`
  /* --carousel-container-width: calc(
    100% - 4.25 * var(--arrow-size)
  ); */
  --carousel-container-width: calc(
    100% - 2 * var(--arrow-size)
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
  --card-padding-horizontal: 40px;
  --border-width: 2px;
  --carousel-item-width: calc(
    var(--carousel-container-width) / 3 + 2.05rem - 2 *
      var(--gap-width) / 3 - var(--card-padding-horizontal)
  );
  min-width: var(--carousel-item-width);
  aspect-ratio: 360 / 365;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${40 / 16}rem
    calc(var(--card-padding-horizontal) / 2);
  box-shadow: 0.25rem 0.25rem ${25 / 16}rem 0
    rgba(0, 0, 0, 0.05);
  border-radius: ${10 / 16}rem;
  background-clip: padding-box;
  border: var(--border-width) solid transparent;
  background-color: var(--off-white);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: calc(-1 * var(--border-width));
    border-radius: inherit;
    background: var(--primary-gradient);
    transition: opacity 0.4s var(--transition-function) 0.1s;
    opacity: ${({ active }) => (active ? 1 : 0)};
  }

  :hover:before {
    opacity: ${({ active }) => (active ? 1 : 0.25)};
  }
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
  position,
  index,
  setPosition
}) => {
  const handleClick = () => {
    if (position + 1 !== index) {
      setPosition(index - 1)
    }
  }
  return (
    <CardWrapper
      onClick={handleClick}
      active={active}
      transition={{
        left: {
          type: 'spring',
          damping: 22,
          stiffness: 130
        }
      }}
      animate={{
        left: `calc(${-position} * (var(--carousel-item-width) - 6 * var(--border-width) + 2 * var(--card-padding-horizontal)))`
      }}>
      <Content>{content}</Content>
      <CardFooter>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardFooter>
    </CardWrapper>
  )
}

const TestimonialSlider = ({ testimonials }) => {
  const [position, setPosition] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const carouselRef = useRef()
  const handleRightArrow = () => {
    if (position < testimonials.length - 2) {
      setPosition(position + 1)
    }
  }
  const handleLeftArrow = () => {
    if (position >= 0) {
      setPosition(position - 1)
    }
  }

  useEffect(() => {
    setItemWidth(
      [
        ...carouselRef.current.children
      ][0].getBoundingClientRect().width
    )
  }, [])

  return (
    <CarouselWrapper>
      <IconButton
        onClick={handleLeftArrow}
        disabled={position < 0}>
        <ArrowLeft color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <IconButton
        onClick={handleRightArrow}
        disabled={position >= testimonials.length - 2}>
        <ArrowRight color={COLORS.PRIMARY_NAVY} />
      </IconButton>
      <CarouselContainer ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            active={position === index - 1}
            index={index}
            position={position}
            setPosition={setPosition}
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
