import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'
import { Subheading } from './typography'

const InformationWrapper = styled.div`
  padding: 0 var(--container-horizontal-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
  position: relative;
  @media (max-width: 1480px) {
    padding-left: 2.375rem;
    padding-right: 2.625rem;
  }
  z-index: 2;
`

const navigationItems = [
  {
    name: 'Opis unitu',
    navLink: 'opisUnitu'
  },
  {
    name: 'Dane techniczne',
    navLink: 'daneTechniczne'
  },
  {
    name: 'Do pobrania',
    navLink: 'doPobrania'
  }
]

const NavigationWrapper = styled.div`
  position: sticky;
  margin-top: 0px;
  top: 0px;
  padding: ${28 / 16}rem 0;
  margin-bottom: ${28 / 16}rem;
  background-color: var(--off-white);
  z-index: 2;
  box-shadow: 0 20px 24px -16px rgba(0, 0, 0, 0.175);
`

const NavigationList = styled.ul``

const NavigationItem = styled.li`
  &:first-of-type {
    > a {
      margin-top: 0;
      padding-top: 0;
    }
  }
`

const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
  font-weight: 300;
  color: var(--primary-navy);
  font-family: 'k2d';
  font-size: ${22 / 16}rem;
  display: inline-block;
  margin: 0.33rem 0;
  padding: 0.33rem 0;
  text-decoration: none;
  transition: transform 0.3s ease-out;
  transform-origin: left center;
  &:hover,
  &.activeLink {
    color: var(--primary-red);
    font-weight: 600;
    transform: scale(1.2);
  }

  &:focus-visible {
    color: var(--primary-red);
  }
`

const InformationNavigation = () => (
  <NavigationWrapper>
    <NavigationList>
      {navigationItems.map((item) => (
        <NavigationItem>
          <StyledScrollLink
            href=''
            activeClass='activeLink'
            to={item.navLink}
            spy={true}
            smooth={true}
            offset={-175}
            duration={600}>
            {item.name}
          </StyledScrollLink>
        </NavigationItem>
      ))}
    </NavigationList>
  </NavigationWrapper>
)

const WelcomeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const WelcomeImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
`

const LogoImage = styled(GatsbyImage)`
  position: absolute;
  right: ${20 / 16}rem;
  bottom: 1rem;
`

const SectionHeading = styled.h3`
  font-size: 3rem;
  line-height: 1.25;
  color: var(--off-white);
  font-weight: 600;
  font-family: 'k2d';
  text-align: center;
  position: absolute;
  top: 0.75rem;
  z-index: 1;
  max-width: ${543 / 16}rem;
  .red {
    color: var(--primary-red);
  }
  .navy {
    color: var(--primary-navy);
  }
`

const UnitInformationSection = ({
  unitWelcomeImage,
  unitLogo,
  unitName
}) => {
  return (
    <InformationWrapper>
      <InformationNavigation />
      <WelcomeImageWrapper id='opisUnitu'>
        <SectionHeading>
          <span className='red'>Pełna</span> kontrola,{' '}
          <span className='navy'>intuicyjne</span>
           użytkowanie
        </SectionHeading>
        <WelcomeImage
          image={unitWelcomeImage.gatsbyImageData}
          alt='Unit dentystyczny Miglionico'
        />
        <LogoImage
          image={unitLogo.gatsbyImageData}
          alt={`Unit dentystyczny Miglionico – ${unitName}`}
        />
      </WelcomeImageWrapper>
    </InformationWrapper>
  )
}

export default UnitInformationSection
