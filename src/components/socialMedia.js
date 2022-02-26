import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components'
import { IconFB, IconIG, IconLI } from '../assets/icons'
import { sideVariants } from '../utils/animations'
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
  ${({ variant }) =>
    variant === VARIANTS.FOOTER &&
    css`
      margin: 0 1rem;
      :first-of-type {
        margin-left: 0;
      }
      :last-of-type {
        margin-right: 0;
      }
    `}
`

const SocialMedia = ({
  socialMediaData,
  variant = VARIANTS.HEADER,
  navigation
}) => {
  return (
    <SocialMediaList
      variants={variant === 'mobile' && sideVariants}
      variant={variant}
      navigation={navigation}>
      {socialMediaData.map(
        ({
          socialMediaChannel,
          socialMediaChannelName,
          originalId
        }) => (
          <SocialMediaItem
            variant={variant}
            navigation={navigation}
            key={originalId}>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={socialMediaChannel}>
              {(() => {
                switch (socialMediaChannelName) {
                  case 'facebook':
                    return (
                      <IconFB
                        fillColor={
                          variant === VARIANTS.FOOTER
                            ? COLORS.WHITE
                            : COLORS.PRIMARY_NAVY
                        }
                      />
                    )
                  case 'instagram':
                    return (
                      <IconIG
                        fillColor={
                          variant === VARIANTS.FOOTER
                            ? COLORS.WHITE
                            : COLORS.PRIMARY_NAVY
                        }
                      />
                    )
                  case 'linkedin':
                    return (
                      <IconLI
                        fillColor={
                          variant === VARIANTS.FOOTER
                            ? COLORS.WHITE
                            : COLORS.PRIMARY_NAVY
                        }
                      />
                    )
                  default:
                    return null
                }
              })()}
            </a>
          </SocialMediaItem>
        )
      )}
    </SocialMediaList>
  )
}

export default SocialMedia
