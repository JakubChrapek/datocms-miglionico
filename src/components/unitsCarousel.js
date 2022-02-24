import React from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import slugify from 'slugify'
import useWindowSize from '../utils/hooks'

const CarouselWrapper = styled(Carousel)`
  .slider {
    padding: clamp(3rem, 4.05vw, 3.8rem) 0;
    @media (max-width: 767px) {
      min-height: calc(70vw + 6.5rem);
    }
    @media (max-width: 570px) {
      padding: clamp(2.75rem, 3.8vw, 3.6rem) 0;
    }
  }
`

const SeeText = styled.p`
  text-align: center;
  position: relative;
  overflow: hidden;
  top: -0.5rem;
  > span {
    color: var(--paragraph-text);
    position: absolute;
    display: inline-block;
    transition: opacity 0.6s var(--transition-function),
      transform 0.6s var(--transition-function);
    padding: 1rem;
    margin: -1rem;
    font-size: var(--paragraph-font-size);
    @media (min-width: 768px) {
      transform: translateY(1rem);
    }
  }
  @media (max-width: 767px) {
    top: 0.5rem;
    color: var(--gray);
  }
`

const UnitItem = styled(motion.div)`
  position: relative;
  padding: 0 1rem;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--card-white);
    border-radius: 1rem;
  }
  @media (max-width: 767px) {
    &:before {
      height: 65vw;
    }
  }

  .gatsby-image-wrapper {
    position: relative;
    overflow: visible;
    top: clamp(3.75rem, 4.8vw, 4.6rem);
    img {
      max-width: 100%;
    }
  }

  > div {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    color: var(--paragraph-text);
    text-decoration: none;
    position: relative;
    > a {
      text-decoration: none;
      color: inherit;
      @media (max-width: 767px) {
        position: relative;
        top: 2.5rem;
      }

      :focus-visible {
        outline: none;
        .unitName {
          transform: translateY(-1.5rem);
          @media (max-width: 1100px) {
            transform: translateY(-1.25rem);
          }
        }
        ${SeeText} > span {
          transform: translateY(0rem);
        }
        span {
          color: ${({ color }) => color};
        }
        + .gatsby-image-wrapper img {
          @media (min-width: 768px) {
            transform: translateY(-0.5rem) scale(1.05);
          }
        }
        + .gatsby-image-wrapper {
          img {
            filter: grayscale(0);
          }
        }
        + .unit:before {
          outline: 2px solid var(--off-white);
          outline-offset: 4px;
        }
      }
    }
    span,
    p {
      position: relative;
      z-index: 1;
    }
    span {
      color: var(--paragraph-text);
    }
    :hover {
      .unitName {
        transform: translateY(-1.5rem);
        @media (max-width: 1100px) {
          transform: translateY(-1.25rem);
        }
        @media (max-width: 767px) {
          transform: translateY(0);
        }
      }
      ${SeeText} > span {
        transform: translateY(0rem);
      }
      span {
        color: ${({ color }) => color};
      }
      .gatsby-image-wrapper img {
        @media (min-width: 768px) {
          transform: translateY(-0.5rem) scale(1.05);
        }
      }
      .gatsby-image-wrapper {
        img {
          filter: grayscale(0);
        }
      }
    }
  }
  .gatsby-image-wrapper {
    overflow: visible;
    img {
      @media (min-width: 768px) {
        filter: grayscale(1);
      }
      transition: filter 0.6s var(--transition-function);
    }
  }
  .unit {
    width: 100%;
    transition: opacity 0.6s var(--transition-function);

    > img {
      transition: transform 0.6s var(--transition-function);
    }

    @media (max-width: 767px) {
      img {
        width: 80%;
        margin: 0 auto;
      }
    }
    @media (max-width: 570px) {
      img {
        width: 100%;
      }
    }
  }
`

const SeeMoreText = styled.p`
  color: var(--paragraph-text);
  position: relative;
  z-index: 1;
  text-align: center;
  text-transform: capitalize;
  font-family: 'k2d';
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  transition: transform 0.6s var(--transition-function);
  span {
    transition: color 0.6s var(--transition-function);
  }
`

const UnitLink = styled(motion(Link))`
  position: relative;
  top: clamp(3rem, 5vw, 4.5rem);
  pointer-events: none;
`

export const UnitsCarousel = ({ units }) => {
  const { width } = useWindowSize()

  const handleClick = (e, link) => {
    e.preventDefault()
    navigate(link)
  }
  return (
    <CarouselWrapper
      infiniteLoop={false}
      centerMode
      selectedItem='1'
      showThumbs={false}
      centerSlidePercentage={width < 767 ? 70 : 33.333}
      showArrows
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows
      emulateTouch
      autoFocus
      selectedItem={0}
      transitionTime={600}
      swipeScrollTolerance={7}
      ariaLabel='karuzela z unitami'>
      {units.map((unit) => {
        const slugifiedLink = `/unit/${slugify(
          unit.unitSlug
        )}`
        const specialName = (
          <span>{unit.unitName.split(' ')[1]}</span>
        )
        return (
          <UnitItem
            onClick={(e) => handleClick(e, slugifiedLink)}
            key={unit.unitName}
            color={
              unit?.unitColor?.hex || 'var(--off-black)'
            }>
            <motion.div>
              <UnitLink
                to={slugifiedLink}
                title={unit.unitName}>
                <SeeMoreText className='unitName'>
                  Nice {specialName}
                </SeeMoreText>
                <SeeText className='secondary'>
                  <span>Zobacz</span>
                </SeeText>
              </UnitLink>
              <GatsbyImage
                className='unit'
                image={
                  unit.unitFeaturedImage.gatsbyImageData
                }
                alt={unit.unitFeaturedImage.alt}
                title={unit.unitFeaturedImage.title}
              />
            </motion.div>
          </UnitItem>
        )
      })}
    </CarouselWrapper>
  )
}
