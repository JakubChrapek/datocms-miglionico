import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { VARIANTS } from '../utils/constants'
import Logo from './logo'
import ContactDetails from './contactDetails'
import SocialMedia from './socialMedia'
import FooterWaves from '../assets/footer-bg.svg'

const FooterWrapper = styled.footer``

const FooterContainer = styled.section`
  --container-horizontal-padding: 85px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${149 / 16}rem ${45 / 16}rem ${22 / 16}rem
    ${40 / 16}rem;
  margin: 0 auto;
  position: relative;
  background-image: url(${FooterWaves});
  background-size: cover;
  border-radius: 0.5rem;
  background-repeat: no-repeat;
`

const FooterContentWrapper = styled.div`
  z-index: 2;
  display: flex;
  align-items: flex-start;
`

const FooterCopyrightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${12 / 16}rem ${5 / 16}rem 0;
  margin-top: ${43 / 16}rem;
  border-top: 2px solid var(--off-white);
`

const LogoAndSocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 45%;
  padding-top: 3rem;
  a {
    color: var(--off-white);
  }
`

const AuthorsText = styled.span`
  color: var(--off-white);
  font-family: 'k2d';
`

const ColumnWrapper = styled.div`
  flex: 1 1 25%;
  color: var(--off-white);
`
const ColumnTitle = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.33;
  margin-bottom: 0.75rem;
`

const FooterColumn = ({ title, withIcons, links }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>{title}</ColumnTitle>
      <ContactDetails links={links} withIcons={withIcons} />
    </ColumnWrapper>
  )
}

export default function Footer({ footerData }) {
  const { footerColumns, footerLogo, socialMedia } =
    footerData

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContentWrapper>
          <LogoAndSocialMediaWrapper>
            <Link to='/' title={footerLogo.title}>
              <Logo logoData={footerLogo} />
            </Link>
            <SocialMedia
              socialMediaData={socialMedia}
              variant={VARIANTS.FOOTER}
            />
          </LogoAndSocialMediaWrapper>
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.columnTitle}
              title={column.columnTitle}
              withIcons={column.columnWithIcons}
              links={column.links}
            />
          ))}
        </FooterContentWrapper>
        <FooterCopyrightsWrapper>
          <AuthorsText>
            Wszelkie prawa zastrzeżone{' '}
            {new Date().getUTCFullYear}© Miglionico.pl
          </AuthorsText>
          <AuthorsText>
            Strona stworzona przez{' '}
            <a
              className='link__kamil'
              href='https://www.instagram.com/forecom.pl'
              target='_blank'
              rel='noreferrer noopener'>
              Kamil Kalbarczyk
            </a>
             & 
            <a
              className='link__kryptonum'
              href='https://www.kryptonum.eu'
              target='_blank'
              rel='noreferrer noopener'>
              Kryptonum
            </a>
          </AuthorsText>
        </FooterCopyrightsWrapper>
      </FooterContainer>
    </FooterWrapper>
  )
}
