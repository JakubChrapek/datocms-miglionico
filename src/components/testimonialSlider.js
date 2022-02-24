import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton } from './iconButton'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'
import { Carousel } from 'react-responsive-carousel'
import useWindowSize from '../utils/hooks'

const CarouselWrapper = styled(Carousel)`
  width: 100%;
  position: relative;

  margin-top: clamp(2rem, 3.95vw, ${57 / 16}rem);

  .prev {
    right: unset;
    left: 0;
  }
  .next {
    left: unset;
    right: 0;
  }
  @media (max-width: 1180px) {
    .prev {
      left: calc(50% - 0.75 * var(--arrow-size));
      transform: translateX(-50%);
      top: 0;
    }
    .next {
      right: calc(50% - 0.75 * var(--arrow-size));
      transform: translateX(50%);
      top: 0;
    }
    .carousel-slider {
      padding-top: 5rem;
    }
  }

  && .slide {
    padding: 0 1rem;
    @media (max-width: 767px) {
      padding: 0 0.5rem;
    }
  }
`

const CardWrapper = styled.blockquote`
  position: relative;
  --card-padding-horizontal: ${40 / 16}rem;
  --border-width: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${40 / 16}rem
    calc(var(--card-padding-horizontal) / 2);

  @media (max-width: 850px) {
    --card-padding-horizontal: 5vw;
    padding: ${44 / 16}rem 1rem ${26 / 16}rem;
  }

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
    /* @media (max-width: 1122px) {
      opacity: 0;
    } */
  }

  :hover:before {
    opacity: ${({ active }) => (active ? 1 : 0.25)};
    /* @media (max-width: 1122px) {
      opacity: 0;
    } */
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
  text-align: center;
  margin-bottom: 0.25rem;
`

const Subtitle = styled.cite`
  font-size: var(--paragraph-font-size);
  line-height: 1.3;
  color: var(--primary-red);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Content = styled.p`
  order: 1;
  font-size: var(--paragraph-font-size);
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  line-height: 1.3;
  color: var(--gray);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  text-align: center;
  transition: color 0.3s var(--transition-function);
`

const Card = ({ title, subtitle, content, active }) => {
  return (
    <CardWrapper active={active}>
      <Content>{content}</Content>
      <CardFooter>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardFooter>
    </CardWrapper>
  )
}

const TestimonialSlider = ({ testimonials }) => {
  const { width } = useWindowSize()
  const [position, setPosition] = useState(1)
  const handleClick = (index) => {
    setPosition(index)
  }

  const handleChange = (index) => {
    setPosition(index)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <CarouselWrapper
        infiniteLoop={false}
        centerMode
        selectedItem={1}
        showThumbs={false}
        centerSlidePercentage={
          width < 767 ? 80 : width < 1180 ? 45 : 33.333
        }
        showArrows
        showIndicators={false}
        showStatus={false}
        useKeyboardArrows
        emulateTouch
        autoFocus
        selectedItem={0}
        transitionTime={400}
        swipeScrollTolerance={1}
        onClickItem={(index, item) =>
          handleClick(index, item)
        }
        onChange={(index) => handleChange(index)}
        ariaLabel='karuzela z unitami'
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <IconButton
              className='prev'
              onClick={() => {
                onClickHandler()
                setPosition((old) => old - 1)
              }}
              title='Poprzednia opinia'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <ArrowLeft color={COLORS.PRIMARY_NAVY} />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <IconButton
              className='next'
              onClick={() => {
                onClickHandler()
                setPosition((old) => old + 1)
              }}
              title='Następna opinia'>
              <ArrowRight color={COLORS.PRIMARY_NAVY} />
            </IconButton>
          )
        }>
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            active={position === index}
            index={index}
            numberOfItems={testimonials.length}
            position={position}
            setPosition={setPosition}
            title={testimonial.clientName}
            subtitle={testimonial.city}
            content={testimonial.testimonialContent}
          />
        ))}
      </CarouselWrapper>
    </AnimatePresence>
  )
}

export default TestimonialSlider
