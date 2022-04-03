import React, { useEffect } from 'react'
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
import { useBlockBody } from './blockBodyContext'
import { navigate } from "gatsby"

const Wrapper = styled.header`
  background-color: var(--off-white);
  box-shadow: 0px 4px 25px 0 rgba(0, 0, 0, 0.05);
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

  --list-alignment: 0.25rem;
  --nav-gap: 2rem;

  @media (max-width: 1024px) {
    padding: ${10 / 16}rem ${22 / 16}rem ${12 / 16}rem;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100vh;
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
  z-index: 5;
  opacity: 0;
  padding: 0;
  visibility: none;
  display: none;
  transition: opacity 0.3s var(--transition-function);

  @media (max-width: 1024px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid
      ${({ open }) =>
        open ? COLORS.PRIMARY_RED : COLORS.PRIMARY_NAVY};
    /* outline-color: ; */
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
  z-index: 5;
  .bar {
    fill: none;
    stroke-width: 5;
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
              transform: translate(-0.95rem, 0.725rem)
                rotate(45deg) scaleX(1);
              opacity: 1;
            }
            &.bar2 {
              transform: scaleX(0);
              opacity: 0;
            }
            &.bar3 {
              transform: translate(-0.9rem, -0.725rem)
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

const HamburgerMenu = ({ open, cycleMobileMenu }) => {
  const { dispatch } = useBlockBody()

  const handleMenuToggle = () => {
    if (open) {
      dispatch({ type: 'hideMenu' })
    } else {
      dispatch({ type: 'showMenu' })
    }
  }

  return (
    <ButtonWrapper
      open={open}
      id='hamburger'
      onClick={() => {
        cycleMobileMenu()
        handleMenuToggle()
      }}
      type='button'
      aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}>
      <HamburgerStyles
        open={open}
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

const MobileAside = styled(motion.aside)`
  @media (min-width: 1024px) {
    display: none;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  background-color: var(--off-white);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Header({ headerData }) {
  const [open, cycleMobileMenu] = useCycle(false, true)
  const { headerLogo, nawigacja, socialMedia } = headerData
  const { dispatch } = useBlockBody()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (open && e.key === 'Escape') {
        dispatch({ type: 'hideMenu' })
        cycleMobileMenu()
      }
    }

    window &&
      window.addEventListener('keydown', handleKeyDown)

    return () =>
      window &&
      window.removeEventListener('keydown', handleKeyDown)
  }, [dispatch, open, cycleMobileMenu])


  return (
    <Wrapper>
      <Container open={open}>
        <Link to='/' title='Strona główna miglionico.pl'>
          <Logo logoData={headerLogo} />
        </Link>
        <Navigation variant='desktop' navData={nawigacja} />
        <AnimatePresence>
          {open && (
            <MobileAside
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0,
                transition: { delay: 0.7, duration: 0.3 }
              }}>
              <Navigation
                variant='mobile'
                open={open}
                navData={nawigacja}
                cycleMobileMenu={cycleMobileMenu}
              />
              <SocialMedia
                variant='mobile'
                socialMediaData={socialMedia}
              />
            </MobileAside>
          )}
        </AnimatePresence>
        <SocialMedia
          variant='desktop'
          socialMediaData={socialMedia}
        />
        <HamburgerMenu
          cycleMobileMenu={cycleMobileMenu}
          open={open}
        />
      </Container>
    </Wrapper>
  )
}
