import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { VARIANTS } from '../utils/constants'
import Logo from './logo'
import ContactDetails from './contactDetails'
import SocialMedia from './socialMedia'
import { FooterGradientRect } from '../assets/backgrounds'

const FooterWrapper = styled.footer``

const FooterContainer = styled.section`
  --container-horizontal-padding: 85px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: clamp(5rem, 9vw, ${128 / 16}rem) ${45 / 16}rem
    ${22 / 16}rem ${40 / 16}rem;
  margin: 0 auto;
  position: relative;

  &:before {
    content: none;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--units-gradient);
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 11%, 100% 100%, 0 100%);
  }

  @media (max-width: 1422px) {
    padding: clamp(2.5rem, 7vw, 7rem) ${45 / 16}rem
      ${22 / 16}rem ${40 / 16}rem;
  }

  @media (max-width: 914px) {
    padding: 6rem ${40 / 16}rem ${22 / 16}rem;
  }

  @media (max-width: 620px) {
    padding: 6rem ${20 / 16}rem ${22 / 16}rem;
    :before {
      clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 100%);
    }
  }

  > svg {
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
  }
  @media (max-width: 1186px) {
    &:before {
      content: '';
    }
    > svg {
      display: none;
    }
  }
`

const ColumnWrapper = styled.div`
  flex: 1 1 25%;
  color: var(--off-white);
`

const FooterContentWrapper = styled.div`
  z-index: 2;
  display: flex;
  align-items: flex-start;
  position: relative;
  @media (max-width: 1136px) {
    flex-wrap: wrap;
    > div:nth-of-type(2) {
      order: 3;
    }
    > div:not(:first-of-type) {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 914px) {
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      flex: 1 1 100%;
      margin-top: ${40 / 16}rem;
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 620px) {
    > div:nth-of-type(3) {
      padding-right: 0.5rem;
    }
    > div:nth-of-type(4) {
      padding-left: 0.5rem;
    }
    > div:nth-of-type(2) {
      align-items: center;
      ul {
        text-align: center;
        align-items: center;
        li:last-of-type {
          a {
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media (max-width: 339px) {
    > div:nth-of-type(4) {
      padding-left: 0;
      padding-right: 0.5rem;
      margin-top: 1.25rem;
    }
  }
`

const FooterCopyrightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${12 / 16}rem ${5 / 16}rem 0;
  margin-top: clamp(1.5rem, 3vw, ${43 / 16}rem);
  @media (max-width: 1280px) {
    margin-top: clamp(0.5rem, 2vw, 2.6875rem);
  }
  @media (max-width: 1020px) {
    margin-top: ${20 / 16}rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  border-top: 2px solid var(--off-white);
  position: relative;
`

const LogoAndSocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 45%;
  padding-top: 3rem;

  @media (max-width: 1136px) {
    padding-top: 0;
    margin-top: ${57 / 16}rem;
    order: 4;
  }

  a {
    color: var(--off-white);
  }

  .gatsby-image-wrapper {
    max-width: clamp(10rem, 20.8vw, ${300 / 16}rem);
    img {
      object-fit: contain !important;
    }
  }

  @media (max-width: 914px) {
    .gatsby-image-wrapper {
      margin: 0 auto;
      max-width: clamp(
        ${300 / 16}rem,
        25vw,
        ${360 / 16}rem
      );
    }
  }
  @media (max-width: 620px) {
    .gatsby-image-wrapper {
      width: 100%;
      max-width: clamp(${240 / 16}rem, 80%, ${300 / 16}rem);
    }
  }
  @media (max-width: 420px) {
    
    width: 280px;

    a {
      width: 100%;
    }
    .gatsby-image-wrapper {
      max-width: 90%;
    }
  }
`

const AuthorsText = styled.span`
  color: var(--off-white);
  font-family: 'k2d';
  font-size: var(--paragraph-font-size);
  line-height: 1.3;
  font-weight: 300;
  @media (max-width: 1020px) {
    :last-of-type {
      margin-top: 0.75rem;
    }
  }
  @media (max-width: 620px) {
    font-size: ${12 / 16}rem;
  }
`

const ColumnTitle = styled.p`
  font-weight: 600;
  font-size: clamp(1.25rem, 1.66vw, 1.5rem);
  line-height: 1.33;
  margin-bottom: 0.75rem;
  @media (max-width: 620px) {
    font-size: 1.5rem;
  }
`

const FooterColumn = ({
  title,
  withIcons,
  links,
  innerLinks
}) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>{title}</ColumnTitle>
      <ContactDetails
        innerLinks={innerLinks}
        links={links}
        withIcons={withIcons}
      />
    </ColumnWrapper>
  )
}

export default function Footer({ footerData }) {
  const { footerColumns, footerLogo, socialMedia } =
    footerData

  return (
    <FooterWrapper>
      <FooterContainer>
        {/* <FooterNavyRect /> */}
        <FooterGradientRect />
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
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={column.columnTitle}
              title={column.columnTitle}
              withIcons={column.columnWithIcons}
              links={column.links}
              innerLinks={index !== 0}
            />
          ))}
        </FooterContentWrapper>
        <FooterCopyrightsWrapper>
          <AuthorsText>
            Wszelkie prawa zastrzeżone{' '}
            {new Date().getUTCFullYear()} © Miglionico.pl
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
            {' & '}
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
