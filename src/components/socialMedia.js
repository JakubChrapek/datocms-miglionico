import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components'
import { IconFB, IconIG, IconLI } from '../assets/icons'
import {
  itemVariants,
  sideVariants
} from '../utils/animations'
import { COLORS, VARIANTS } from '../utils/constants'

const SocialMediaList = styled(motion.ul)`
  display: flex;
  align-items: center;
  padding-top: var(--list-alignment);

  ${({ variant }) =>
    variant === VARIANTS.FOOTER &&
    css`
      justify-content: center;
      margin-top: ${22 / 16}rem;
    `}

  ${({ navigationVariant }) =>
    navigationVariant === 'desktop' &&
    css`
      @media (max-width: 1024px) {
        display: none;
      }
    `}

  ${({ navigationVariant }) =>
    navigationVariant === 'mobile' &&
    css`
      @media (min-width: 1025px) {
        display: none;
      }
      @media (max-width: 1024px) {
        margin-top: clamp(2.5rem, 5vw, 4rem);

        svg {
          width: clamp(1.625rem, 9vw, 2.5rem);
          height: auto;
        }
      }
    `}
`

const SocialMediaItem = styled(motion.li)`
  margin: 0 0.75rem;
  display: inline-flex;
  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
  a {
    display: inline-flex;
  }
`

const SocialMedia = ({
  socialMediaData,
  variant = VARIANTS.HEADER,
  navigationVariant
}) => {
  return (
    <SocialMediaList
      variants={
        navigationVariant === 'mobile' && sideVariants
      }
      navigationVariant={navigationVariant}
      variant={variant}>
      {socialMediaData.map((socialMediaItem, i) => (
        <SocialMediaItem
          navigationVariant={navigationVariant}
          variant={variant}
          key={socialMediaItem.socialMediaChannel}>
          <a
            target='_blank'
            rel='noreferrer noopener'
            href={socialMediaItem.socialMediaChannel}>
            {(() => {
              switch (i) {
                case 0:
                  return (
                    <IconFB
                      fillColor={
                        variant === VARIANTS.FOOTER
                          ? COLORS.WHITE
                          : COLORS.PRIMARY_NAVY
                      }
                    />
                  )
                case 1:
                  return (
                    <IconIG
                      fillColor={
                        variant === VARIANTS.FOOTER
                          ? COLORS.WHITE
                          : COLORS.PRIMARY_NAVY
                      }
                    />
                  )
                case 2:
                  return (
                    <IconLI
                      fillColor={
                        variant === VARIANTS.FOOTER
                          ? COLORS.WHITE
                          : COLORS.PRIMARY_NAVY
                      }
                    />
                  )
              }
            })()}
          </a>
        </SocialMediaItem>
      ))}
    </SocialMediaList>
  )
}

export default SocialMedia
