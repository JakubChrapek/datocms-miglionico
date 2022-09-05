import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import {
  GradientRect,
  NavyRect
} from '../assets/backgrounds'
import { Heading, Subheading } from './typography'
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import ArrowLeft from './../assets/arrow-left.svg'
import ArrowRight from './../assets/arrow-right.svg'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const UnitsWrapper = styled.section``

const UnitsContainer = styled.section`
  --container-horizontal-padding: 132px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${36 / 16}rem ${80 / 16}rem ${110 / 16}rem
    ${52 / 16}rem;

  &:before {
    content: none;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--units-gradient);
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 94%);
  }

  @media (max-width: 1286px) {
    padding: clamp(1.5rem, 2.8vw, 2.25rem)
      clamp(2rem, 4.17vw, 3.25rem)
      clamp(4rem, 10.11vw, 7.875rem);
    &:before {
      content: '';
    }
  }
  @media (max-width: 767px) {
    padding: 3rem 0;
    min-height: 36rem;
    &:before {
      content: '';
    }
  }
  @media (max-width: 570px) {
    min-height: clamp(28rem, 138vw, 36rem);
  }

  margin: 0 auto;
  position: relative;
  overflow: hidden;
  svg {
    position: absolute;
    top: 3rem;
    left: 1rem;
    width: calc(100% - 2rem);
    border-radius: ${10 / 16}rem;
    @media (max-width: 1286px) {
      display: none;
    }
    &:first-of-type {
      transform: skewY(1deg);
    }
    &:last-of-type {
      transform: skewY(1.25deg) rotate(2.25deg);
    }
  }
`

const UnitsContentWrapper = styled.div`
  --arrow-size: ${56 / 16}rem;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;

  .slider {
  }

  && .slide {
    padding: 0 1rem;
    :last-of-type {
      padding-right: 0;
    }
    :not(:first-of-type):not(:last-of-type) {
      margin: 0 -0.5rem;
    }
  }

  @media (max-width: 1420px) {
    padding-top: 2rem;
  }
  @media (min-width: 768px) {
    button {
      display: none;
      visibility: hidden;
    }
  }
  @media (max-width: 767px) {
    button {
      margin-top: 0;
      top: unset;
      bottom: calc(50vw - 3rem);
      svg {
        display: block;
        transform: none !important;
      }
    }
    > p,
    > h2 {
      margin: 0 1rem;
    }
  }
`

const Slider = styled.div`
    padding: 0 80px;
   margin-top: 60px;
    position: relative;
    .slider{
        display: grid;
        grid-template-columns: repeat(${props => props.itemsCount}, calc(${100 / 3}% - 20px));
        grid-column-gap: 30px;
        width: 100%;
        overflow: hidden;

        div{
            position: relative;
        }

        p{
            padding: 10px 26px 0 26px;
        }
    }

    @media (max-width: 936px) {
      .slider{
        grid-template-columns: repeat(${props => props.itemsCount}, 100%);
        overflow: visible;
      }
    }

    @media(max-width: 562px){
      padding: 0 40px;

      .slider{
        grid-column-gap: 18px;

      }
    }
`

const SliderControls = styled.button`
    visibility: visible !important;
    top: 50%;
    left: ${props => props.left ? '0' : 'unset'};
    right: ${props => props.right ? '0' : 'unset'};
    transform: translateY(-50%);
    position: absolute;
    width: 60px;
    display: ${props => props.itemsCount > 3 ? 'block' : 'none'};
    height: 60px;
    border-radius: 50%;
    border: 4px solid var(--primary-navy);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: opacity .2s linear;
    cursor: pointer;
    background-color: transparent;
    z-index: 10;

    &:hover{

    }

    &:disabled{
      opacity: .5;
    }

    @media (max-width: 936px){
      display: none;
    }
`

const SliderItem = styled(motion.div)`
  text-align: center;
  position: relative;
  padding-top: clamp(10px, 4vw, 60px);
  filter: grayscale(1);
  transition: filter .6s var(--transition-function), transform .6s var(--transition-function);
  transform-origin: 50% 50%;

    a{
      text-decoration: none;
    }

    h3{
      color: var(--paragraph-text);
      text-decoration: none;
      transform: translateY(15px);
      font-weight: 600;
      font-size: 2rem;
      line-height: 1.2;
      text-transform: capitalize;
      transition: transform .6s var(--transition-function);
        span{
        transition: color .6s var(--transition-function);
          color: ${props => props.color};
        }
    }

    p{
      color: var(--paragraph-text);
      text-decoration: none;
      transform: translateY(15px);
      position: relative;
      z-index: 1;
      transition: transform .6s var(--transition-function), color .6s var(--transition-function);
        color: ${props => props.color};
    }

    .imgWrapper{
      position: relative;
      z-index: 5;
      transform: translateY(-15px) scale(.9);
      transition: transform .6s var(--transition-function);
      transform-origin: 50% 100%;
    }

    &::after{
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      top: clamp(20px, 9vw, 120px);
      aspect-ratio: 1/0.2;
      background: #F1F1F1;
      border-radius: 16px;
      z-index: 3;
    }

    &::before{
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      aspect-ratio: 1/1.08;
      background: #F1F1F1;
      border-radius: 16px;
      z-index: -1;
    }

    &:hover{
      filter: grayscale(0);

      h3{
        transform: translateY(-15px);

      }

      p{
        transform: translateY(-15px);
      }

      .imgWrapper{
        transform: translateY(-15px) scale(1);
      }
    }

    @media (max-width: 936px){
      transform: scale(.95);

      :nth-child(${props => props.position}){
        transform: scale(1);
        filter: grayscale(0);

        h3{
          transform: translateY(-15px);
          margin-top: 15px;
        }

        p{
          transform: translateY(-15px);
        }

        .imgWrapper{
          transform: translateY(-15px) scale(1);
        }
      }

      &::before{
        aspect-ratio: unset;
        height: 80%;
      }

      &::after{
        aspect-ratio: 1/0.5;
        top: 100px;
      }
    }
`

const UnitsSection = ({
  unitsData,
  unitsTitle,
  unitsSubtitle
}) => {
  const sliderBreackPoint = 936
  const secondBreackPoint = 562

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

  const [position, positionSet] = useState(windowWidth <= sliderBreackPoint ? 1 : 0);

  const [canRight, changeCanRight] = useState(false);
  const [canLeft, changeCanLeft] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (position >= (windowWidth <= sliderBreackPoint ? unitsData.length - 1 : unitsData.length - 3) && position <= 0) {
        changeCanLeft(false)
        changeCanRight(false)
      } else if (position >= (windowWidth <= sliderBreackPoint ? unitsData.length - 1 : unitsData.length - 3)) {
        changeCanRight(false)
        changeCanLeft(true)
      } else if (position <= 0) {
        changeCanLeft(false)
        changeCanRight(true)
      } else {
        changeCanLeft(true)
        changeCanRight(true)
      }
    }
  }, [position, windowWidth])

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (canRight) {
        positionSet(position + 1)
      }
    },
    onSwipedRight: () => {
      if (canLeft) {
        positionSet(position - 1)
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  return (
    <UnitsWrapper id='oferta'>
      <UnitsContainer>
        <NavyRect />
        <GradientRect />
        <UnitsContentWrapper>
          <Subheading>
            <StructuredText data={unitsSubtitle} />
          </Subheading>
          <Heading>
            <StructuredText data={unitsTitle} />
          </Heading>
          {/* <UnitsCarousel units={unitsData} /> */}
          <Slider itemsCount={unitsData.length}>
            <div {...handlers}>
              <div className='slider'>
                {unitsData.filter(el => el.showOnHome).map(el => (
                  <SliderItem
                    position={position + 1}
                    color={el.unitColor.hex}
                    animate={{
                      left: `calc(${position} * ${windowWidth <= secondBreackPoint ? '(-100% - 18px)' : '(-100% - 30px)'})`,
                    }}
                    transition={{
                      ease: 'easeOut',
                      duration: 0.25,
                    }}>
                    <Link to={'/unit/' + el.unitSlug + '/'}>
                      <h3>{el.unitName.split(' ').map((el, index) => (
                        <>
                          {index === 1 ? <span>{el}</span> : `${el} `}
                        </>
                      ))}</h3>
                      <p>Zobacz</p>
                      <GatsbyImage className='imgWrapper' image={el.unitFeaturedImage.gatsbyImageData} />
                    </Link>
                  </SliderItem>
                ))}
              </div>
            </div>
            <SliderControls
              itemsCount={unitsData.length}
              left
              aria-label="slider scroll left"
              name="poprzedni artykuł"
              disabled={!canLeft}
              onClick={() => {
                positionSet(position - 1);
              }}
            >
              <img src={ArrowLeft} alt='strzałka w lewo'/>
            </SliderControls>
            <SliderControls
              itemsCount={unitsData.length}
              right
              aria-label="slider scroll right"
              name="następny artykuł"
              disabled={!canRight}
              onClick={() => {
                positionSet(position + 1);
              }}
            >
              <img src={ArrowRight}  alt='strzałka w prawo'/>
            </SliderControls>
          </Slider>
        </UnitsContentWrapper>
      </UnitsContainer>
    </UnitsWrapper>
  )
}

export default UnitsSection
