import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { capitalizeFirstLetterOfString } from '../utils'
import { motion } from 'framer-motion'
import {
  itemVariants,
  sideVariants
} from '../utils/animations'

const NavigationWrapper = styled(motion.nav)`
  margin: 0 var(--nav-gap);
  @media (max-width: 1024px) {
    ${({ mobileMenuOpen }) =>
      mobileMenuOpen
        ? css`
            margin: 2rem 0 0;
            align-self: center;
          `
        : css``}
  }
`

const NavigationList = styled(motion.ul)`
  display: flex;
  padding-top: var(--list-alignment);
  @media (max-width: 1024px) {
    ${({ mobileMenuOpen }) =>
      mobileMenuOpen &&
      css`
        padding-top: 0;
        flex-direction: column;
        align-items: center;
      `}
  }
`

const NavigationItem = styled(motion.li)`
  margin: 0 ${15 / 16}rem;

  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
  a {
    color: var(--primary-navy);
    font-size: var(--paragraph-font-size);
    line-height: 1em;
    font-weight: 300;
  }
  .link__active {
    color: var(--primary-red);
    position: relative;
    :after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 1024px) {
    ${({ mobileMenuOpen }) =>
      mobileMenuOpen &&
      css`
        margin: clamp(0.75rem, 3vw, 1.25rem) 0;
        a {
          font-size: clamp(
            var(--paragraph-font-size),
            5vw,
            1.5rem
          );
        }
      `}
  }
`

const Navigation = ({ navData, mobileMenuOpen }) => {
  return (
    <NavigationWrapper mobileMenuOpen={mobileMenuOpen}>
      <NavigationList
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
        mobileMenuOpen={mobileMenuOpen}>
        <NavigationItem
          variants={itemVariants}
          mobileMenuOpen={mobileMenuOpen}>
          <Link
            to='/'
            className='link__underline'
            activeClassName='link__active'
            title='Miglionico – strona główna'>
            Strona główna
          </Link>
        </NavigationItem>
        {navData.map((navItem) => {
          const capitalizedLink =
            capitalizeFirstLetterOfString(
              navItem.linkText.replace('-', ' ')
            )
          return (
            <NavigationItem
              variants={itemVariants}
              mobileMenuOpen={mobileMenuOpen}
              key={capitalizedLink}>
              <Link
                to={`/${navItem.linkText}`}
                className='link__underline'
                title={capitalizedLink}
                activeClassName='link__active'>
                {capitalizedLink}
              </Link>
            </NavigationItem>
          )
        })}
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
