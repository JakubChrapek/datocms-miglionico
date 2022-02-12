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
  grid-gap: ${31 / 16}rem;
  padding: 0 ${10 / 16}rem;
  margin-top: ${47 / 16}rem;
`

const UnitItem = styled.li`
  position: relative;
  overflow: hidden;
  --button-offset: ${20 / 16}rem;
  --smaller-units-padding: ${20 / 16}rem;
  :first-of-type,
  :last-of-type {
    margin: var(--smaller-units-padding);
  }

  > a {
    display: inline-block;
    width: 100%;
    height: 100%;
    :hover,
    :focus-visible {
      outline: 2px solid red;
      .unit {
        img {
          transform: scale(1.05);
        }
      }
      .unitLogo {
        opacity: 1;
        transform: translate(
          -50%,
          calc(-2 * var(--button-offset))
        );
      }
    }
  }
  .unit {
    width: 100%;
    height: 100%;
    border-radius: ${10 / 16}rem;
    transition: opacity 0.4s var(--transition-function);
    overflow: hidden;
    > img {
      transition: transform 0.6s var(--transition-function);
    }
  }
  .unitLogo {
    position: absolute;
    bottom: calc(-1 * var(--button-offset));
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.6s var(--transition-function),
      transform 0.6s var(--transition-function);
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
              console.log(unit)
              return (
                <UnitItem>
                  <Link to={`/${slugifiedLink}`} title=''>
                    <GatsbyImage
                      className='unit'
                      image={
                        unit.unitFeaturedImage
                          .gatsbyImageData
                      }
                      alt={unit.unitFeaturedImage.alt}
                      title={unit.unitFeaturedImage.title}
                    />
                    <GatsbyImage
                      className='unitLogo'
                      image={unit.logo.gatsbyImageData}
                      alt={unit.logo.alt}
                      title={unit.logo.title}
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
