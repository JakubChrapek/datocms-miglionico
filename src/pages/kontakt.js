import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import { ContactBg } from '../assets/icons'
import {
  SmallerRedRect,
  SmallGradientRect
} from '../assets/backgrounds'
import styled from 'styled-components'
import {
  ContactDetailsTitle,
  Heading
} from '../components/typography'
import { StructuredText } from 'react-datocms'
import SocialMedia from '../components/socialMedia'
import { VARIANTS } from '../utils/constants'
import ContactDetails from '../components/contactDetails'
import ContactForm from '../components/contactForm'

const ContactWrapper = styled.section`
  > section > svg {
    position: absolute;
    top: 2rem;
    @media (max-width: 1390px) {
      top: 0;
    }
    left: 1rem;
    width: calc(100% - 2rem);
    border-radius: ${10 / 16}rem;
    &:first-of-type {
      transform: skewY(1deg);
    }
    &:last-of-type {
      transform: skewX(-2.5deg) rotate(2deg);
    }
    @media (max-width: 1031px) {
      display: none;
    }
  }
`

const ContactContainer = styled.section`
  --container-horizontal-padding: 40px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: clamp(3.5rem, 4.16vw, ${70 / 16}rem)
    ${20 / 16}rem clamp(2.5rem, 3.14vw, ${80 / 16}rem);
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    position: relative;
    color: var(--off-white);
    font-size: var(--paragraph-font-size);
    line-height: 1.33;
    font-weight: 300;
  }

  &:before {
    content: none;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--contact-gradient);
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 94%);
  }

  @media (max-width: 1031px) {
    :before {
      content: '';
    }
    margin-top: ${22 / 16}rem;
    padding: clamp(4rem, 7.16vw, 5rem) ${20 / 16}rem;
  }
`

const ContactPageHeading = styled(Heading)`
  position: relative;
  + p {
    margin-top: ${26 / 16}rem;
  }
`
const Text = styled(StructuredText)`
  position: relative;
`
const ContactDetailsContainer = styled.div`
  --container-horizontal-padding: 120px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${22 / 16}rem ${40 / 16}rem ${91 / 16}rem
    ${17 / 16}rem;
  margin: 3.5rem auto ${31 / 16}rem;
  display: flex;
  background-color: var(--off-white);
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${10 / 16}rem;
  justify-content: space-between;
`

const ContactDetailsWrapper = styled.div`
  flex: 1 1 50%;
  ul:first-of-type {
    margin-left: -0.5rem;
  }
`

const FormColumn = styled.div`
  flex: 1 1 50%;
`
const Kontakt = ({ data }) => {
  return (
    <>
      <HelmetDatoCms seo={data.contact.seo} />
      <ContactWrapper>
        <ContactContainer>
          <SmallerRedRect />
          <SmallGradientRect />
          <ContactPageHeading color='var(--off-white)'>
            {data.contact.title}
          </ContactPageHeading>
          <Text data={data.contact.paragraphUnderTitle} />
        </ContactContainer>
        <ContactDetailsContainer>
          <ContactDetailsWrapper>
            <ContactDetailsTitle>
              {data.contact.contactDetailsTitle}
            </ContactDetailsTitle>
            <ContactDetails
              links={data.contact.socialMedia}
              withIcons
              column
              color='var(--primary-navy)'
            />
            <ContactDetailsTitle>
              {data.contact.socialMediaTitle}
            </ContactDetailsTitle>
            <SocialMedia
              variant={VARIANTS.CONTACT}
              socialMediaData={
                data.contact.socialMediaIcons
              }
            />
          </ContactDetailsWrapper>
          <FormColumn>
            <ContactForm title={data.contact.formTitle} />
          </FormColumn>
        </ContactDetailsContainer>
      </ContactWrapper>
    </>
  )
}

export default Kontakt

export const query = graphql`
  {
    contact: datoCmsKontakt {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      paragraphUnderTitle {
        value
      }
      contactDetailsTitle
      socialMedia {
        nazwaIkony
        tekst
        linkText
        originalId
      }
      socialMediaTitle
      socialMediaIcons {
        socialMediaChannel
        socialMediaChannelName
        originalId
      }
      formTitle
    }
  }
`
