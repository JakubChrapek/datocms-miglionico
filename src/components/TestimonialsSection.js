import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import { COLORS } from '../utils/constants'
import { Heading, Subheading } from './typography'
import { useSwipeable } from "react-swipeable"
import { motion } from "framer-motion"
import ArrowLeft from './../assets/arrow-left.svg'
import ArrowRight from './../assets/arrow-right.svg'

const TestimonialsWrapper = styled.section`
  overflow: hidden;
`

const TestimonialsContainer = styled.section`
  --container-horizontal-padding: 80px;
  --container-max-width: var(--container-max-size);
  max-width: var(--container-max-width);
  padding: 0 ${40 / 16}rem ${92 / 16}rem ${40 / 16}rem;
  margin: 0 auto;
  position: relative;
`

const TestimonialsContentWrapper = styled.div`
  --arrow-size: 3.5rem;

  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slider = styled.div`
    padding: 0 100px;
    position: relative;
    margin-top: 60px;
    .slider{
        display: grid;
        grid-template-columns: repeat(${props => props.itemsCount}, calc(${100 / 3}% - 17px));
        grid-column-gap: 25px;
        width: 100%;
        overflow: hidden;

        div{
            position: relative;
        }

        p{
        }
    }

    .item{
      border-radius: 10px;
      padding: 40px 20px;
      border: 2px solid #eee;
      background-color: #fff;

      h3{
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        color: var(--primary-navy);
      }

      h4{
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        color: var(--primary-red);
        margin: 4px 0 24px;
      }

      p{
        font-weight: 300;
        font-size: 18px;
        line-height: 23px;
        text-align: center;

      }

      &::before{
        content: "";
        position: absolute;
        top: -2px;
        bottom: -2px;
        right: -2px;
        left: -2px;
        background: -webkit-linear-gradient(
          45deg,
          var(--primary-red),
          var(--primary-navy)
        );
        z-index: -1;
        border-radius: 10px;
        opacity: 0;
        transition: opacity .2s linear;
      }

      &:nth-child(${props => props.centredItem}){
        border: 0px solid transparent;
        margin: 2px 0;

        &::before{
          opacity: 1;
        }
      } 
    }

    @media (max-width: 1180px){
      padding: 10px 0 0 0;
      margin: 70px auto 0 auto;
    }

    @media (max-width: 1024px) {
    width: -webkit-fill-available;
      .slider{
        grid-template-columns: repeat(${props => props.itemsCount}, calc(50% - 12.5px));
        overflow: visible;

        .item{
          &:nth-child(${props => props.centredItem - 1}){
            border: 0px solid transparent;
            margin: 2px 0;

            &::before{
              opacity: 1;
            }
          } 
        }
      }
    }

    @media (max-width:674px){
      .slider{
        grid-template-columns: repeat(${props => props.itemsCount}, calc(100%));
        .item{
          height: fit-content;

          &:nth-child(${props => props.centredItem}){
            border: 2px solid #eee;
            margin: unset;

            &::before{
              opacity: unset;
            }
          } 
        }
      }
    }
`

const SliderControls = styled.button`
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: ${props => props.left ? '0' : 'unset'};
    right: ${props => props.right ? '0' : 'unset'};

        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 4px solid var(--primary-navy);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: opacity .2s linear;
        cursor: pointer;
        background-color: #FFF;

        &:hover{

        }

        &:disabled{
            opacity: .5;
        }

    @media (max-width: 1180px){
      top: 0;
      transform: translateY(-100%) scale(.5) ${props => props.left ? 'translateX(-200%)' : 'translateX(200%)'};
    left: ${props => props.left ? '50%' : 'unset'};
    right: ${props => props.right ? '50%' : 'unset'};
    }
`

const TestimonialsSection = ({
  smallerTitle,
  biggerTitle,
  testimonials
}) => {
  const sliderBreackPoint = 1024
  const secondBreackPoint = 674

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

  const [position, positionSet] = useState(0);

  const [canRight, changeCanRight] = useState(false);
  const [canLeft, changeCanLeft] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? testimonials.length - 1 : testimonials.length - 2 : testimonials.length - 3) && position <= 0) {
        changeCanLeft(false)
        changeCanRight(false)
      } else if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? testimonials.length - 1 : testimonials.length - 2 : testimonials.length - 3)) {
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
  }, [position])

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
  });

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
          <Slider centredItem={position + 2} itemsCount={testimonials.length}>
            <div {...handlers}>
              <div className='slider'>
                {testimonials.map(el => (
                  <motion.div
                    className="item"
                    animate={{
                      left: `calc(${position} * (-100% - 25px))`,
                    }}
                    transition={{
                      ease: 'easeOut',
                      duration: 0.25,
                    }}>
                    <h3>{el.clientName}</h3>
                    <h4>{el.city}</h4>
                    <p>{el.testimonialContent}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {testimonials < 4
              ? null
              : <>
                <SliderControls
                  left
                  aria-label="slider scroll left"
                  name="poprzedni artykuł"
                  disabled={!canLeft}
                  onClick={() => {
                    positionSet(position - 1);
                  }}
                >
                  <img src={ArrowLeft} alt='strzałka slidera lewa'/>
                </SliderControls>
                <SliderControls
                  right
                  aria-label="slider scroll right"
                  name="następny artykuł"
                  disabled={!canRight}
                  onClick={() => {
                    positionSet(position + 1);
                  }}
                >
                  <img src={ArrowRight} alt='strzałka slidera prawa'/>
                </SliderControls>
              </>
            }
          </Slider>
        </TestimonialsContentWrapper>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  )
}

export default TestimonialsSection
