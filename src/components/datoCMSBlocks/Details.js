import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title
} from './common/components'
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import ArrowLeft from './../../assets/arrow-left.svg'
import ArrowRight from './../../assets/arrow-right.svg'

const Wrapper = styled(SectionWrapper)`
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 60px;
    margin-top: 60px;
`

const Slider = styled.div`
    padding: 0 100px;
    position: relative;
    .slider{
        display: grid;
        grid-template-columns: repeat(${props => props.itemsCount}, calc(${100 / 3}% - 12px));
        grid-column-gap: 18px;
        width: 100%;
        overflow: hidden;

        div{
            position: relative;
            pointer-events: none;
        }

        p{
            padding: 10px 26px 0 26px;
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

const Details = ({ data }) => {

    const [position, positionSet] = useState(0);

    const [canRight, changeCanRight] = useState(false);
    const [canLeft, changeCanLeft] = useState(false);

    useEffect(() => {
        if (data.slider.length >= 4) {
            if (position === data.slider.length - 3) {
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
        <Wrapper>
            <Title>
                {data.blockTitle}
            </Title>
            <Slider itemsCount={data.slider.length}>
                <div {...handlers}>
                    <div className='slider'>
                        {data.slider.map(el => (
                            <motion.div
                                animate={{
                                    left: `calc(${position} * (-100% - 18px))`,
                                }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.25,
                                }}>
                                <GatsbyImage image={el.img.gatsbyImageData} />
                                <p>{el.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {data.slider < 4
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
        </Wrapper >
    )
}

export default Details