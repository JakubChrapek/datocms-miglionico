import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './logo'
import Navigation from './navigation'
import SocialMedia from './socialMedia'

const Wrapper = styled.header`
  background-color: var(--off-white);
`

const Container = styled.div`
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
`

export default function Header({ headerData }) {
  const { headerLogo, nawigacja, socialMedia } = headerData
  return (
    <Wrapper>
      <Container>
        <Link to='/' title='Strona główna miglionico.pl'>
          <Logo logoData={headerLogo} />
        </Link>
        <Navigation navData={nawigacja} />
        <SocialMedia socialMediaData={socialMedia} />
      </Container>
    </Wrapper>
  )
}
