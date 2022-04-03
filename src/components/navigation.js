import React, { useCallback } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { capitalizeFirstLetterOfString } from '../utils'
import { motion } from 'framer-motion'
import {
  itemVariants,
  sideVariants
} from '../utils/animations'
import { useBlockBody } from './blockBodyContext'
import { exitTransition } from '../functions/page-transtion'

const NavigationWrapper = styled(motion.nav)`
  margin: 0 var(--nav-gap);
  ${({ variant }) =>
    variant === 'desktop' &&
    css`
      @media (max-width: 1024px) {
        display: none;
      }
    `}

  ${({ variant }) =>
    variant === 'mobile' &&
    css`
      @media (min-width: 1025px) {
        display: none;
      }
    `}

  @media (max-width: 1024px) {
    ${({ open }) =>
    open
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
    ${({ open }) =>
    open &&
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
    ${({ open }) =>
    open &&
    css`
        margin: clamp(1rem, 3.5vw, 1.75rem) 0;
        a {
          font-size: clamp(
            calc(1.25 * var(--paragraph-font-size)),
            6.5vw,
            2.25rem
          );
        }
      `}
  }
`

const Navigation = ({
  navData,
  open,
  variant,
  cycleMobileMenu
}) => {
  const { dispatch } = useBlockBody()

  const handleClickMenu = useCallback(() => {
    if (variant === 'mobile') {
      if (open) dispatch({ type: 'hideMenu' })
      else {
        dispatch({ type: 'showMenu' })
      }
      cycleMobileMenu()
    }
  }, [open, variant, cycleMobileMenu, dispatch])

  return (
    <NavigationWrapper variant={variant} open={open}>
      <NavigationList
        initial='closed'
        animate='open'
        exit='closed'
        variants={variant === 'mobile' && sideVariants}
        open={open}>
        <NavigationItem
          variants={variant === 'mobile' && itemVariants}
          open={open}>
          <Link
            to='/'
            onClick={handleClickMenu}
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
              variants={
                variant === 'mobile' && itemVariants
              }
              open={open}
              key={capitalizedLink}>
              <Link
                onClick={handleClickMenu}
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
