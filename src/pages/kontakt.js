import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import { ContactBg } from '../assets/icons'
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
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
  }
`

const ContactContainer = styled.section`
  --container-horizontal-padding: 40px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${60 / 16}rem ${20 / 16}rem ${80 / 16}rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: var(--off-white);
    font-size: var(--paragraph-font-size);
    line-height: 1.33;
    font-weight: 300;
  }
`

const ContactPageHeading = styled(Heading)`
  + p {
    margin-top: ${26 / 16}rem;
  }
`
const Text = styled(StructuredText)``
const ContactDetailsContainer = styled.div`
  --container-horizontal-padding: 120px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${22 / 16}rem ${40 / 16}rem ${91 / 16}rem
    ${17 / 16}rem;
  margin: 0 auto ${31 / 16}rem;
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
          <ContactBg />
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
