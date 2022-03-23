import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'

const ThreeColumnSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: clamp(2.5rem, 4.02vw, ${58 / 16}rem);
  margin: clamp(2rem, 5.86vw, ${60 / 16}rem) 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    max-width: 95ch;
  }
  @media (max-width: 804px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem 0;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 804px) {
    grid-column: 1/-1;
  }

  &:nth-of-type(2) {
    .gatsby-image-wrapper {
      order: -1;
    }
    && > p + .gatsby-image-wrapper {
      margin: 0 0 ${40 / 16}rem;

      @media (max-width: 1024px) {
        margin: 0 0 4rem;
      }
    }
  }
  @media (max-width: 1024px) {
    &:nth-of-type(3) {
      grid-column: 1/3;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
  @media (max-width: 804px) {
    .gatsby-image-wrapper {
      order: 1 !important;
    }
    p + .gatsby-image-wrapper {
      margin: ${40 / 16}rem 0 0 !important;
    }
  }

  > p {
    font-size: var(--paragraph-font-size);
    color: var(--paragraph-text);
    font-weight: 300;
    line-height: 1.33;
    letter-spacing: 0.54px;

    + .gatsby-image-wrapper {
      margin-top: ${40 / 16}rem;
    }

    + p {
      margin-top: 1.25rem;
      color: var(--paragraph-text);
    }
    + ul {
      margin: 1.25rem 0;
      font-size: var(--paragraph-font-size);
      font-weight: 300;
      color: var(--paragraph-text);
      line-height: 1.33;
      letter-spacing: 0.54px;
      list-style-type: disc;
      list-style-position: inside;
      > li {
        + li {
          margin-top: 0.25rem;
        }
        > * {
          display: inline;
        }
      }
    }
  }
`
const ColumnTitle = styled.h3`
  font-size: var(--subheader-font-size);
  color: var(--primary-navy);
  margin-bottom: 1.25rem;
`
const ColumnContent = styled(StructuredText)``
const ColumnImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  + p,
  + h3,
  + h2 {
    margin-top: ${40 / 16}rem;
  }
`

const ThreeColumnLayout = ({
  firstColTitle,
  firstColParagraph,
  firstColImage,
  secondColTitle,
  secondColParagraph,
  secondColImage,
  thirdColTitle,
  thirdColParagraph,
  thirdColImage
}) => (
  <ThreeColumnSection>
    <Column>
      <ColumnTitle>{firstColTitle}</ColumnTitle>
      <ColumnContent data={firstColParagraph} />
      <ColumnImage image={firstColImage.gatsbyImageData} />
    </Column>
    <Column reversed>
      <ColumnTitle>{secondColTitle}</ColumnTitle>
      <ColumnContent data={secondColParagraph} />
      <ColumnImage image={secondColImage.gatsbyImageData} />
    </Column>
    <Column>
      <ColumnTitle>{thirdColTitle}</ColumnTitle>
      <ColumnContent data={thirdColParagraph} />
      <ColumnImage image={thirdColImage.gatsbyImageData} />
    </Column>
  </ThreeColumnSection>
)

export default ThreeColumnLayout
