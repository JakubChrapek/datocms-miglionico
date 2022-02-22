import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import { StructuredText } from 'react-datocms'
import { motion } from 'framer-motion'
import {
  GradientRect,
  NavyRect
} from '../assets/backgrounds'
import { Heading, Subheading } from './typography'
import useWindowSize, {
  useHasMounted
} from '../utils/hooks'
import { IconButton } from './iconButton'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'

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
    padding: 3rem 1rem;
    min-height: 30rem;
    &:before {
      content: '';
    }
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
  }
`

const UnitsList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${29 / 16}rem;
  padding: 0 ${10 / 16}rem;
  margin-top: clamp(5.5rem, 7.6vw, 6.9rem);

  @media (max-width: 767px) {
    display: block;
    cursor: grab;
    height: clamp(20rem, 30vh, 27.5rem);
    padding-bottom: 3rem;
    margin-top: clamp(2.5rem, 7.6vw, 5.5rem);
  }
  @media (max-width: 494px) {
    margin-top: clamp(1rem, 4.85vw, 1.5rem);
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

const UnitItem = styled(motion.li)`
  @media (max-width: 767px) {
    position: absolute;
    width: 50vw;
    bottom: 0;
  }
  @media (max-width: 494px) {
    width: 70vw;
  }
  .gatsby-image-wrapper {
    pointer-events: none;
    img {
      max-width: 100%;
    }
  }

  > div {
    display: inline-block;
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
        /* display: flex;
        flex-direction: column;
        padding: 1rem 0; */
        top: -1rem;
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
    position: relative;
    > img {
      transition: transform 0.6s var(--transition-function);
    }

    &:before {
      content: '';
      position: absolute;
      top: -6.4rem;
      left: 0;
      height: calc(100% + 2rem);
      width: 100%;
      background-color: var(--card-white);
      border-radius: 1rem;
    }
    @media (max-width: 767px) {
      img {
        width: ${280 / 16}rem;
        margin: 0 auto;
      }
      &:before {
        height: 50vw;
      }
    }
    @media (max-width: 494px) {
      &:before {
        height: 70vw;
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

const UnitLink = styled(motion(Link))``

const UnitsSection = ({
  unitsData,
  unitsTitle,
  unitsSubtitle
}) => {
  const [position, positionSet] = useState(1)
  const { width } = useWindowSize()
  const carouselRef = React.useRef()
  const [rect, setRect] = React.useState(null)

  useEffect(() => {
    if (carouselRef.current) {
      setRect(carouselRef.current.getBoundingClientRect())
    }
    return () => setRect(null)
  }, [])

  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }
  const handleDragStart = (event, { offset }) => {}
  const handleDragEnd = (event, { offset }) => {
    if (rect) {
      const swipePower = offset.x / rect.width
      if (swipePower > 0.1) {
        if (position > 0) {
          positionSet((old) => old - 1)
        }
      } else if (swipePower < -0.1) {
        if (position < unitsData.length - 1) {
          positionSet((old) => old + 1)
        }
      }
    }
  }

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
          {/* <IconButton
            onClick={() => positionSet((old) => old - 1)}
            disabled={position <= 0}>
            <ArrowLeft color={COLORS.PRIMARY_NAVY} />
          </IconButton>
          <IconButton
            onClick={() => positionSet((old) => old + 1)}
            disabled={position >= unitsData.length - 1}>
            <ArrowRight color={COLORS.PRIMARY_NAVY} />
          </IconButton> */}
          <UnitsList
            ref={carouselRef}
            drag='x'
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            // dragPropagation
            dragMomentum={false}
            transition={{
              x: {
                type: 'spring',
                mass: 1,
                stiffness: 200,
                damping: 20
              }
            }}>
            {unitsData.map((unit, index) => {
              const slugifiedLink = `/unit/${slugify(
                unit.unitSlug
              )}`
              const specialName = (
                <span>{unit.unitName.split(' ')[1]}</span>
              )
              return (
                <UnitItem
                  key={unit.unitName}
                  initial={
                    width <= 767 && {
                      opacity: 0
                    }
                  }
                  animate={
                    width <= 494
                      ? {
                          opacity: 1,
                          left: `calc(${
                            (1 + index - position) * 70 - 56
                          }vw - 1.125rem)`,
                          scale:
                            index === position ? 1 : 0.9
                        }
                      : width <= 767
                      ? {
                          opacity: 1,
                          left: `calc(${
                            (1 + index - position) * 50 - 25
                          }vw - 1.8125rem)`,
                          scale:
                            index === position ? 1 : 0.9
                        }
                      : {}
                  }
                  transition={
                    width <= 767 && {
                      type: 'spring',
                      stiffness: 320,
                      damping: 60
                    }
                  }
                  color={
                    unit?.unitColor?.hex ||
                    'var(--off-black)'
                  }>
                  <motion.div>
                    <UnitLink
                      to={`${slugifiedLink}`}
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
                        unit.unitFeaturedImage
                          .gatsbyImageData
                      }
                      alt={unit.unitFeaturedImage.alt}
                      title={unit.unitFeaturedImage.title}
                    />
                  </motion.div>
                </UnitItem>
              )
            })}
          </UnitsList>
        </UnitsContentWrapper>
      </UnitsContainer>
    </UnitsWrapper>
  )
}

export default UnitsSection
