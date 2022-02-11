import React from 'react'
import styled, { css } from 'styled-components'
import { IconFB, IconIG, IconLI } from '../assets/icons'
import { COLORS, VARIANTS } from '../utils/constants'

const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: var(--list-alignment);

  ${({ variant }) =>
    variant === VARIANTS.FOOTER &&
    css`
      justify-content: center;
      margin-top: ${22 / 16}rem;
    `}
`

const SocialMediaItem = styled.li`
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
  variant = VARIANTS.HEADER
}) => {
  return (
    <SocialMediaList variant={variant}>
      {socialMediaData.map((socialMediaItem, i) => (
        <SocialMediaItem
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
