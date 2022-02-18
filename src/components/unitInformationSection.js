import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'

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
    name: 'Date techniczne',
    navLink: 'dateTechniczne'
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
  background-color: var(--off-white);
  z-index: 2;
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
            offset={-180}
            duration={600}>
            {item.name}
          </StyledScrollLink>
        </NavigationItem>
      ))}
    </NavigationList>
  </NavigationWrapper>
)

const WelcomeImage = styled(GatsbyImage)``

const NavShadow = styled.span`
  width: 100%;
  height: 4px;
  position: absolute;
  left: 0;
  display: block;
  box-shadow: 0 14px 18px -4px rgba(0, 0, 0, 0.075);
`

const UnitInformationSection = () => {
  return (
    <InformationWrapper>
      <InformationNavigation />
      <NavShadow />
      <WelcomeImage></WelcomeImage>
      {navigationItems.map((item) => (
        <div
          style={{
            height: '100vh',
            border: '3px solid red'
          }}
          id={item.navLink}>
          {item.name}
        </div>
      ))}
    </InformationWrapper>
  )
}

export default UnitInformationSection
