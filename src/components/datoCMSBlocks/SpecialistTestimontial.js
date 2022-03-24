import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title
} from './common/components'
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import ArrowLeft from './../../assets/arrow-left.svg'
import ArrowRight from './../../assets/arrow-right.svg'

const Wrapper = styled(SectionWrapper)`
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 60px;
    @media(max-width: 1092px){  
        gap: 0;
        max-width: 100% !important;
        display: block;
    }
`

const Slider = styled.div`
    padding: 0 100px;
    position: relative;

    .track{
    }

    .slider{
        display: grid;
        grid-template-columns: repeat(${props => props.itemsCount}, calc(${100 / 3}% - 16.2px));
        grid-column-gap: 25px;
        width: 100%;
        overflow: hidden;

        div{
            position: relative;
            pointer-events: none;
        }

        p{
        }

        .item{
            padding: 24px 20px 20px 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: fit-content;
            background: #fff;
            border: 2px solid #eee;
            position: relative;

            img{
                border-radius: 50%;
            }

            p{

            }

            .flex{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin-top: 28px;
            }

            .description{

            }



            &:nth-child(${props => props.centredItem}){
                border: 0px solid transparent;
                margin: 2px;
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
                    }
            }
        }
    }

    @media(max-width: 1092px){  
        padding: 10px 0 0 0;
        margin: 60px 0 0 0;
    }

    @media(max-width: 964px){
        .slider{
            overflow: visible;
            grid-template-columns: repeat(${props => props.itemsCount}, calc(50% - 12.5px));

            .item{

                &:nth-child(${props => props.centredItem - 1}){
                    border: 0px solid transparent;
                    margin: 2px;
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
                    }
                }   
            }
        }
    }

    @media (max-width: 640px){
        .slider{
            grid-template-columns: repeat(${props => props.itemsCount}, 100%);

            .item{
                &:nth-child(${props => props.centredItem}){
                    border: 2px solid #eee;
                    margin: 0px;
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

    @media (max-width: 1092px){
      top: 0;
      transform: translateY(-100%) scale(.5) ${props => props.left ? 'translateX(-200%)' : 'translateX(200%)'};
    left: ${props => props.left ? '50%' : 'unset'};
    right: ${props => props.right ? '50%' : 'unset'};
    }
`

const SpecialistTestimontials = ({ data }) => {
    const sliderBreackPoint = 964
    const secondBreackPoint = 640

    const windowWidth = window.innerWidth

    const [position, positionSet] = useState(0);

    const [canRight, changeCanRight] = useState(false);
    const [canLeft, changeCanLeft] = useState(false);

    useEffect(() => {
        if (window != null) {
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
            <Slider centredItem={position + 2} itemsCount={data.slider.length}>
                <div className='track' {...handlers}>
                    <div className='slider'>
                        {data.slider.map(el => (
                            <motion.div
                                className='item'
                                animate={{
                                    left: `calc(${position} * (-100% - 25px))`,
                                }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.25,
                                }}>
                                <p>{el.rekomendacjaKlienta}</p>
                                <div className='flex'>
                                    <GatsbyImage image={el.clientFoto.gatsbyImageData} />
                                    <div className='description'>
                                        <h3>{el.clientName}</h3>
                                        <h4>{el.miejscowoFirma}</h4>
                                    </div>
                                </div>
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

export default SpecialistTestimontials

// clientFoto: {gatsbyImageData: {…}}
// clientName: "Osoba 1"
// miejscowoFirma: "Miejscowość/Frima"
// rekomendacjaKlienta: 