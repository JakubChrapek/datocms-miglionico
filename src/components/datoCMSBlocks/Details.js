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
    display: block;
    text-align: center;
    margin-top: 60px;
    @media (max-width: 1024px){
        grid-gap: 0;
        max-width: 100% !important;
    }
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
            margin: 10px 26px 0 26px;
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
        }
    }

    @media (max-width: 1092px){
        padding: 10px 0 0 0;
        margin-top: 60px;
    }

    @media (max-width: 764px) {
        margin-top: 20px;
        .slider{
            overflow: visible;
            grid-template-columns: repeat(${props => props.itemsCount}, calc(50% - 9px));

            div{
                transform: scale(.95);
                transition: transform .6s var(--transition-function);

                &:nth-child(${props => props.centredItem}), 
                &:nth-child(${props => props.centredItem + 1}){
                    transform: scale(1);
                }
            }

            p{
                margin: 10px 10px 0 10px;

            }
        }
    }

    @media (max-width: 640px) {
        padding: 0 40px !important;
    }

    @media(max-width: 500px){
        .slider{
            grid-template-columns: repeat(${props => props.itemsCount}, 100%);

            div{

                &:nth-child(${props => props.centredItem + 1}){
                    transform: scale(.95);
                }

            }

            p{
                max-width: 340px;
            }

        }
    }

    /* @media (max-width: 664px){
        .slider{
            grid-template-columns: repeat(${props => props.itemsCount}, 100%);
        }
    } */
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

    @media (max-width: 1092px){
        top: 0;
        transform: translateY(-100%) scale(.5) ${props => props.left ? 'translateX(-200%)' : 'translateX(200%)'};
        left: ${props => props.left ? '50%' : 'unset'};
        right: ${props => props.right ? '50%' : 'unset'};
    }

    @media (max-width: 764px){
        display: none;
    }
`

const Details = ({ data }) => {
    const sliderBreackPoint = 764
    const secondBreackPoint = 460

    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

    const [position, positionSet] = useState(0);

    const [canRight, changeCanRight] = useState(false);
    const [canLeft, changeCanLeft] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? data.slider.length - 1 : data.slider.length - 2 : data.slider.length - 3) && position <= 0) {
                changeCanLeft(false)
                changeCanRight(false)
            } else if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? data.slider.length - 1 : data.slider.length - 2 : data.slider.length - 3)) {
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
        <Wrapper>
            <Title>
                {data.blockTitle}
            </Title>
            <Slider itemsCount={data.slider.length} centredItem={position + 1}>
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

                <SliderControls
                    left
                    aria-label="slider scroll left"
                    name="poprzedni artykuł"
                    disabled={!canLeft}
                    onClick={() => {
                        positionSet(position - 1);
                    }}
                >
                    <img src={ArrowLeft} />
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
                    <img src={ArrowRight} />
                </SliderControls>
            </Slider>
        </Wrapper >
    )
}

export default Details