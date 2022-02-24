import React from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import {
  GradientRect,
  NavyRect
} from '../assets/backgrounds'
import { Heading, Subheading } from './typography'
import { useHasMounted } from '../utils/hooks'
import { UnitsCarousel } from './unitsCarousel'

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

const UnitsSection = ({
  unitsData,
  unitsTitle,
  unitsSubtitle
}) => {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
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
          <UnitsCarousel units={unitsData} />
        </UnitsContentWrapper>
      </UnitsContainer>
    </UnitsWrapper>
  )
}

export default UnitsSection
