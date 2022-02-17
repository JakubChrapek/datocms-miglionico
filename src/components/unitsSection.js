import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import UnitsWaves from '../assets/units-bg.svg'
import { Heading, Subheading } from './typography'
import slugify from 'slugify'

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
  margin: 0 auto;
  position: relative;
  background-image: url(${UnitsWaves});
  background-size: cover;
  border-radius: 0.5rem;
  background-repeat: no-repeat;
`

const UnitsContentWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
`

const UnitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${29 / 16}rem;
  padding: 0 ${10 / 16}rem;
  margin-top: 6.9rem;
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
    transform: translateY(1rem);
  }
`

const UnitItem = styled.li`
  > a {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    color: var(--paragraph-text);
    text-decoration: none;
    position: relative;
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
        transform: translateY(-2.5rem);
      }
      ${SeeText} > span {
        transform: translateY(0rem);
      }
      span {
        color: ${({ color }) => color};
      }
      .gatsby-image-wrapper img {
        transform: translateY(-0.5rem) scale(1.05);
      }
      .gatsby-image-wrapper {
        img {
          filter: grayscale(0);
        }
      }
    }
    :focus-visible {
      outline: none;
      .unitName {
        transform: translateY(-2.5rem);
      }
      ${SeeText} > span {
        transform: translateY(0rem);
      }
      span {
        color: ${({ color }) => color};
      }
      .gatsby-image-wrapper img {
        transform: translateY(-0.5rem) scale(1.05);
      }
      .gatsby-image-wrapper {
        img {
          filter: grayscale(0);
        }
      }
      .unit:before {
        outline: 2px solid var(--off-white);
        outline-offset: 4px;
      }
    }
  }
  .gatsby-image-wrapper {
    overflow: visible;
    img {
      filter: grayscale(1);
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
      background-color: var(--off-white);
      border-radius: 1rem;
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

const UnitsSection = ({ unitsData }) => {
  return (
    <UnitsWrapper>
      <UnitsContainer>
        <UnitsContentWrapper>
          <Subheading>Co oferujemy?</Subheading>
          <Heading>Poznaj nasze unity</Heading>
          <UnitsList>
            {unitsData.map((unit) => {
              const slugifiedLink = slugify(unit.unitName)
              const specialName = (
                <span>{unit.unitName.split(' ')[1]}</span>
              )
              return (
                <UnitItem
                  color={
                    unit?.unitColor?.hex ||
                    'var(--off-black)'
                  }>
                  <Link
                    to={`/${slugifiedLink}`}
                    title={unit.unitName}>
                    <SeeMoreText className='unitName'>
                      Nice {specialName}
                    </SeeMoreText>
                    <SeeText className='secondary'>
                      <span>Zobacz</span>
                    </SeeText>
                    <GatsbyImage
                      className='unit'
                      image={
                        unit.unitFeaturedImage
                          .gatsbyImageData
                      }
                      alt={unit.unitFeaturedImage.alt}
                      title={unit.unitFeaturedImage.title}
                    />
                  </Link>
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
