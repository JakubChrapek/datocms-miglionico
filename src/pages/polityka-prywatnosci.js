import { graphql } from 'gatsby'
import React from 'react'
import { StructuredText } from 'react-datocms'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: var(--off-white);
  z-index: 1;
`

const Container = styled.div`
  max-width: 55rem;
  padding: 2.25rem ${20 / 16}rem 3rem ${41 / 16}rem;
  margin: 0 auto;
  @media (max-width: 620px) {
    padding: 0 ${20 / 16}rem;
  }
  position: relative;

  p {
    color: var(--paragraph-text);
    font-size: var(--paragraph-font-size);
    line-height: ${28 / 18};
    font-weight: 300;
  }

  h3 {
    color: var(--primary-navy);
    font-size: var(--header4-font-size);
    font-weight: 600;
    line-height: ${83 / 64};
    font-family: 'k2d', sans-serif;
    margin-top: 2.75rem;

    + p,
    + button,
    + h3,
    + h4,
    + h5 {
      margin-top: 2rem;
    }
  }

  strong {
    font-weight: 700;
  }
  a {
    color: var(--primary-red);
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }
`

const PagePrivacyPolicy = ({ data }) => {
  return (
    <Wrapper>
      <Helmet>
        <link rel="canonical" href="https://miglionico.pl/polityka-prywatnosci" />
      </Helmet>
      <Container>
        <StructuredText
          data={data.datoCmsPrivacyPolicy.content}
        />
      </Container>
    </Wrapper>
  )
}

export default PagePrivacyPolicy

export const privacyQuery = graphql`
  query {
    datoCmsPrivacyPolicy {
      content {
        value
      }
    }
  }
`
