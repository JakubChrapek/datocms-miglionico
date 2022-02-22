import { Link } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import { ICONS } from '../assets/icons'

const ListOfLinks = styled.ul`
  ${({ column }) =>
    column &&
    css`
      display: flex;
      flex-direction: column;
    `}
`

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: ${({ mail }) => (mail ? '27ch' : '24ch')};
  :first-of-type {
    margin-top: 0;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  margin-top: ${({ withIcons }) =>
    withIcons ? '0.5rem' : '0.25rem'};

  a {
    flex: 1 1 80%;
    color: ${({ color }) =>
      color ? color : 'currentColor'};
    text-decoration: none;
    font-size: 1rem;
    line-height: ${({ withIcons }) =>
      withIcons ? '1.5' : '1'};
    font-weight: ${({ bold }) => (bold ? '600' : '300')};
    letter-spacing: 0.32px;
    text-decoration: none;
  }
  svg {
    margin-right: 0.4rem;
    width: 30px;
    flex: 1 1 20%;
    path {
      stroke: ${({ color }) => color ?? 'var(--off-white)'};
    }
  }
`

const ContactDetails = ({
  links,
  withIcons,
  color,
  column,
  innerLinks
}) => {
  return (
    <ListOfLinks column={column}>
      {links.map((link, i) => {
        return (
          <ListItem
            color={color}
            key={link.tekst}
            withIcons={withIcons}
            bold={withIcons && i >= 1}
            mail={link.nazwaIkony === ICONS.koperta.name}>
            {withIcons &&
              ICONS[link.nazwaIkony].component()}
            {innerLinks ? (
              <Link
                to={link.linkText}
                className='link link__underline'>
                {link.tekst}
              </Link>
            ) : (
              <a
                className='link link__underline'
                target='_blank'
                rel='noreferrer noopener'
                href={link.linkText}>
                {link.tekst}
              </a>
            )}
          </ListItem>
        )
      })}
    </ListOfLinks>
  )
}

export default ContactDetails
