import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { capitalizeFirstLetterOfString } from '../utils'

const NavigationWrapper = styled.nav`
  margin: 0 var(--nav-gap);
`

const NavigationList = styled.ul`
  display: flex;
  padding-top: var(--list-alignment);
`

const NavigationItem = styled.li`
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
`

const Navigation = ({ navData }) => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
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
            <NavigationItem key={capitalizedLink}>
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
