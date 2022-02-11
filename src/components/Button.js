import React from 'react'
import styled from 'styled-components'
import { BUTTON_VARIANTS } from '../utils/constants'

const ButtonBaseStyles = styled.button`
  border: none;
  display: inline-block;
  border-radius: ${5 / 16}rem;
  color: var(--off-white);
  background-color: var(--primary-navy);
  position: relative;
  z-index: 1;
  font-size: ${18 / 16}rem;
  text-decoration: none;
  line-height: 1.3335;
  padding: ${10 / 16}rem 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'k2d', sans-serif;
  cursor: pointer;
  transition: color 0.8s var(--transition-function);
  :focus-visible {
    outline: 2px solid var(--primary-navy);
    outline-offset: 4px;
  }
  :before,
  :after {
    content: '';
    position: absolute;
    border-radius: ${5 / 16}rem;
  }
`

const Button = ({ variant, children, as, to, onClick }) => {
  let Element

  switch (variant) {
    case BUTTON_VARIANTS.FILLED:
      Element = FilledButton
      break
    case BUTTON_VARIANTS.OUTLINED:
      Element = OutlinedButton
      break
    default:
      Element = ButtonBaseStyles
      break
  }
  return (
    <Element as={as} to={to} onClick={onClick}>
      {children}
    </Element>
  )
}

const FilledButton = styled(ButtonBaseStyles)`
  :before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    background: var(--primary-red);
    background: -moz-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, var(--primary-red)),
      color-stop(100%, var(--primary-navy))
    );
    background: -webkit-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -o-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -ms-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: linear-gradient(
      to right,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#C3112D', endColorstr='#262F6E',GradientType=1 );
  }

  :after {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background-color: white;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.8s var(--transition-function);
  }

  :hover {
    color: var(--primary-navy);
    :after {
      opacity: 1;
    }
  }
`
const OutlinedButton = styled(ButtonBaseStyles)`
  color: var(--primary-navy);
  :before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: var(--primary-red);
    background: -moz-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, var(--primary-red)),
      color-stop(100%, var(--primary-navy))
    );
    background: -webkit-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -o-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: -ms-linear-gradient(
      left,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    background: linear-gradient(
      to right,
      var(--primary-red) 0%,
      var(--primary-navy) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#C3112D', endColorstr='#262F6E',GradientType=1 );
    opacity: 0;
    transition: opacity 0.8s var(--transition-function);
  }

  :after {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background-color: white;
    opacity: 1;
    z-index: -2;
    transition: opacity 0.8s var(--transition-function);
  }

  :hover {
    color: var(--off-white);
    :before {
      opacity: 1;
    }
  }
`

export default Button
