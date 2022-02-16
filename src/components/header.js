import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Logo from './logo'
import Navigation from './navigation'
import SocialMedia from './socialMedia'
import { COLORS } from '../utils/constants'
import {
  AnimatePresence,
  motion,
  useCycle
} from 'framer-motion'

const Wrapper = styled.header`
  background-color: var(--off-white);
`

const Container = styled.div`
  position: relative;
  max-width: var(--container-max-width);
  padding: ${10 / 16}rem ${40 / 16}rem ${20 / 16}rem
    ${20 / 16}rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 25px 0 rgba(0, 0, 0, 0.05);

  --list-alignment: 0.25rem;
  --nav-gap: 2rem;

  @media (max-width: 1024px) {
    padding: ${10 / 16}rem ${22 / 16}rem ${12 / 16}rem;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100vh;
    overflow: ${({ mobileMenuOpen }) =>
      mobileMenuOpen && 'hidden'};
  }

  .gatsby-image-wrapper {
    width: clamp(203px, 19.8vw, 286px) !important;
    img {
      object-fit: contain !important;
    }
  }
`

const ButtonWrapper = styled.button`
  position: absolute;
  right: 1.25rem;
  top: 2rem;
  border: none;
  width: ${45 / 16 + 'rem'};
  height: ${45 / 16 + 'rem'};
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  z-index: 3;
  opacity: 1;
  transition: opacity 0.3s var(--transition-function);

  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-color: ${({ open }) =>
      open ? COLORS.PRIMARY_RED : COLORS.PRIMARY_NAVY};
    outline-offset: 0;
  }

  svg {
    width: 100%;
    pointer-events: none;
  }
`

const HamburgerStyles = styled.svg`
  color: ${({ open }) =>
    open ? COLORS.PRIMARY_RED : COLORS.PRIMARY_NAVY};
  overflow: visible;
  .bar {
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    transition: stroke 0.3s var(--transition-function),
      opacity 0.3s var(--transition-function),
      transform 0.3s var(--transition-function);

    transform-origin: right center;

    ${({ open }) =>
      open
        ? css`
            stroke: ${COLORS.PRIMARY_RED};
            transform-origin: center center;
            &.bar1 {
              transform: translate(-0.55rem, 0.725rem)
                rotate(45deg) scaleX(1);
              opacity: 1;
            }
            &.bar2 {
              transform: scaleX(0);
              opacity: 0;
            }
            &.bar3 {
              transform: translate(-0.5rem, -0.725rem)
                rotate(-45deg) scaleX(1);
              opacity: 1;
            }
          `
        : css`
            stroke: ${COLORS.PRIMARY_NAVY};
            &.bar1 {
              transform: scaleX(0.527);
              opacity: 1;
            }
            &.bar2 {
              transform: scaleX(1);
              opacity: 1;
            }
            &.bar3 {
              transform: scaleX(0.77);
              opacity: 1;
            }
          `}
  }
`

const HamburgerMenu = ({
  mobileMenuOpen,
  cycleMobileMenu
}) => {
  return (
    <ButtonWrapper
      open={mobileMenuOpen}
      id='hamburger'
      onClick={() => cycleMobileMenu()}
      type='button'
      aria-label={
        mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'
      }>
      <HamburgerStyles
        open={mobileMenuOpen}
        className='svg'
        viewBox='2 0 50 52'>
        <polyline className='bar bar1' points='2,8 50,8' />
        <polyline
          className='bar bar2'
          points='2,25 50,25'
        />
        <polyline
          className='bar bar3'
          points='2,42 50,42'
        />
      </HamburgerStyles>
    </ButtonWrapper>
  )
}

export default function Header({ headerData }) {
  const [open, cycleMobileMenu] = useCycle(false, true)

  const { headerLogo, nawigacja, socialMedia } = headerData

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
      }
    }

    window &&
      window.addEventListener('keydown', handleKeyDown)

    return () =>
      window &&
      window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Wrapper>
      <Container mobileMenuOpen={open}>
        <Link to='/' title='Strona główna miglionico.pl'>
          <Logo logoData={headerLogo} />
        </Link>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
              }}>
              <Navigation
                mobileMenuOpen={open}
                navData={nawigacja}
              />

              <SocialMedia socialMediaData={socialMedia} />
            </motion.aside>
          )}
        </AnimatePresence>
        <HamburgerMenu
          cycleMobileMenu={cycleMobileMenu}
          mobileMenuOpen={open}
        />
      </Container>
    </Wrapper>
  )
}
