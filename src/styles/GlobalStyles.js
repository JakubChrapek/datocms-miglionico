import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    --primary-red: #C3112D;
    --primary-navy: #262F6E;
    --off-white: #fff;
    --off-black: #000;
    --paragraph-text: #3A3A3A;
    --primary-gradient: linear-gradient(94.81deg, #C3112D 0%, #262F6E 100%);
    --secondary-gradient: linear-gradient(94.81deg, #262F6E 0%, #262F6E 40.36%, #C3112D 98.24%);
  
    --link-padding: ${7 / 16}rem 0;
    --transition-function: cubic-bezier(0.175, 0.885, 0.320, 1.075);

    --container-max-size: 90rem;
    --container-horizontal-padding: 3.75rem;
    --container-max-width: calc(var(--container-max-size) - var(--container-horizontal-padding));
    --header-font-size: 4rem;
    --smaller-header-font-size: 1.5rem;
    --paragraph-font-size: 1.125rem;
    --smaller-paragraph-font-size: 0.875rem;
    --button-font-size: var(--paragraph-font-size);
  }

  h1,h2,h3,h4,h5,h6, a {
    font-family: 'k2d';
  }

  button, p, span, details, summary {
    font-family: 'Titillium Web';
  }

  button:focus-visible, a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  .link {
    position: relative;

    &__kamil {
      color: currentColor;
      text-decoration: none;
      position: relative;
      padding: 0.25rem 0;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #17F7B6;
        width: 100%;
        height: 2px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: transform 0.25s var(--transition-function);
      }
     :hover:after {
       transform: scaleX(1);
     }
    }

    &__kryptonum {
      color: currentColor;
      text-decoration: none;
      position: relative;
      padding: 0.25rem 0;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #25eb98;
        width: 100%;
        height: 2px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: transform 0.25s var(--transition-function);
      }
     :hover:after {
       transform: scaleX(1);
     }
    }

    &__underline {
     position: relative;
     text-decoration: none;
     padding: var(--link-padding);
     :after {
       content: '';
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       height: 2px;
       background-color: currentColor;
       transform-origin: left center;
       transform: scaleX(0);
       transition: transform 0.25s var(--transition-function);
     }
     :hover:after {
       transform: scaleX(1);
     }
    }
    &__active {
      color: var(--primary-red);
    }
  }
`

export default GlobalStyles
