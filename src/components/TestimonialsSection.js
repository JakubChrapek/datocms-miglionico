import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import { COLORS } from '../utils/constants'
import { Heading, Subheading } from './typography'
import { useSwipeable } from "react-swipeable"
import { motion } from "framer-motion"
import ArrowLeft from './../assets/arrow-left.svg'
import ArrowRight from './../assets/arrow-right.svg'

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
`

const SliderControls = styled.div`
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    position: absolute;
    display: flex;
    justify-content: space-between;

    button{
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
    }
`

const TestimonialsSection = ({
  smallerTitle,
  biggerTitle,
  testimonials
}) => {

  const [position, positionSet] = useState(0);

  const [canRight, changeCanRight] = useState(false);
  const [canLeft, changeCanLeft] = useState(false);

  useEffect(() => {
    if (testimonials.length >= 4) {
      if (position === testimonials.length - 3) {
        changeCanRight(false)
        changeCanLeft(true)
      } else if (position === 0) {
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
              : <SliderControls>
                <button
                  aria-label="slider scroll left"
                  name="poprzedni artykuł"
                  disabled={!canLeft}
                  onClick={() => {
                    positionSet(position - 1);
                  }}
                >
                  <img src={ArrowLeft} />
                </button>
                <button
                  aria-label="slider scroll right"
                  name="następny artykuł"
                  disabled={!canRight}
                  onClick={() => {
                    positionSet(position + 1);
                  }}
                >
                  <img src={ArrowRight} />
                </button>
              </SliderControls>
            }
          </Slider>
        </TestimonialsContentWrapper>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  )
}

export default TestimonialsSection
