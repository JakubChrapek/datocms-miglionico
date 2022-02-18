import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import { ContactBg } from '../assets/icons'
import styled from 'styled-components'
import {
  Heading,
  Paragraph
} from '../components/typography'
import { StructuredText } from 'react-datocms'

const ContactWrapper = styled.section`
  svg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`

const ContactContainer = styled.section`
  --container-horizontal-padding: 40px;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );

  max-width: var(--container-max-width);
  padding: ${60 / 16}rem ${20 / 16}rem ${22 / 16}rem;
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
const ContactDetailsWrapper = styled.div``
const ContactDetailsColumn = styled.div``
const FormColumn = styled.div``
const ContactForm = styled.form``

const Kontakt = ({ data }) => {
  return (
    <>
      <HelmetDatoCms seo={data.contact.seo} />
      <ContactWrapper>
        <ContactContainer>
          <ContactBg />
          <ContactPageHeading color='var(--off-white)'>
            {data.contact.formTitle}
          </ContactPageHeading>
          <Text data={data.contact.paragraphUnderTitle} />
          <ContactDetailsWrapper>
            <ContactDetailsColumn></ContactDetailsColumn>
          </ContactDetailsWrapper>
          <FormColumn>
            <ContactForm />
          </FormColumn>
        </ContactContainer>
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
      formTitle
      paragraphUnderTitle {
        value
      }
      contactDetailsTitle
      title
      socialMedia {
        nazwaIkony
        tekst
        linkText
        originalId
      }
      socialMediaTitle
      socialMediaIcons {
        socialMediaChannel
        iconGraphic {
          gatsbyImageData
        }
        originalId
      }
    }
  }
`
