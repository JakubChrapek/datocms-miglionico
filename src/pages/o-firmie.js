import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Heading } from '../components/typography'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { DatoCmsTwoColumnsLayout } from '../components/datoCMSBlocks/DatoCmsTwoColumnsLayout'
import { UnitGraphicTextColumn } from '../components/datoCMSBlocks/UnitGraphicTextColumn'
import {
  COLORS,
  COLUMN_LAYOUT_VARIANTS,
  HERO_VARIANTS
} from '../utils/constants'
import { Helmet } from 'react-helmet'

const Wrapper = styled.main`
  @media(max-width: 1186px){
    margin-bottom: 30px;
  }
`

const HeroContainer = styled.section`
  --container-horizontal-padding: ${80 / 16}rem;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );
  max-width: var(--container-max-width);
  padding: ${28 / 16}rem ${40 / 16}rem ${24 / 16}rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: ${28 / 16}rem ${20 / 16}rem ${24 / 16}rem;
  }
`
const AboutTitle = styled(Heading)`
  + .gatsby-image-wrapper {
    margin-top: ${12 / 16}rem;
  }
`
const AboutImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
`

const ContentWrapper = styled.div`
  padding: 0 var(--container-horizontal-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
  position: relative;
  @media (max-width: 1480px) {
    padding-left: 2.375rem;
    padding-right: 2.625rem;
  }
  @media (max-width: 1024px) {
    padding-left: ${22 / 16}rem;
    padding-right: ${22 / 16}rem;
  }
  z-index: 2;
`

const HeroSection = ({ title, paragraph, img, video }) => (
  <HeroContainer>
    {title && (
      <AboutTitle color={COLORS.GRADIENT}>
        {title}
      </AboutTitle>
    )}
    {img && img.gatsbyImageData && (
      <AboutImage image={img.gatsbyImageData} />
    )}
  </HeroContainer>
)

const ContentSection = ({ content }) => {
  return (
    <ContentWrapper>
      <Helmet>
        <link rel="canonical" href="https://miglionico.pl/o-firmie" />
      </Helmet>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsGraphicTextColumnLeft':
              return (
                <UnitGraphicTextColumn
                  title={record.columnTitle}
                  content={record.paragraph}
                  image={record.graphicStartingLeft}
                  variant={
                    COLUMN_LAYOUT_VARIANTS.IMAGE_ON_LEFT
                  }
                  smallerHeading={record.smallerHeading}
                />
              )
            case 'DatoCmsGraphicTextColumn':
              return (
                <UnitGraphicTextColumn
                  title={record.columnTitle}
                  content={record.paragraph}
                  image={record.graphicStartingRight}
                  variant={
                    COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT
                  }
                />
              )
            case 'DatoCmsTwoColumnsLayout':
              return (
                <DatoCmsTwoColumnsLayout
                  leftColumnContent={record.leftColumn}
                  rightColumnContent={record.rightColumn}
                />
              )
            default:
              return null
          }
        }}
      />
    </ContentWrapper>
  )
}

const AboutPage = ({ data }) => {
  const {
    datoCmsOFirmie: { welcomeTitle, heroImg, content }
  } = data

  return (
    <Wrapper>
      <HeroSection
        title={welcomeTitle}
        img={heroImg}
        variant={HERO_VARIANTS.FULLSCREEN_IMG_OR_VIDEO}
      />
      <ContentSection content={content} />
    </Wrapper>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    datoCmsOFirmie {
      welcomeTitle
      heroImg {
        gatsbyImageData
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsGraphicTextColumnLeft {
            id: originalId
            smallerHeading
            paragraph {
              value
            }
            graphicStartingLeft {
              gatsbyImageData
              alt
              title
            }
            columnTitle
          }
          ... on DatoCmsGraphicTextColumn {
            id: originalId
            columnTitle
            graphicStartingRight {
              gatsbyImageData
              title
              alt
            }
            paragraph {
              value
            }
          }
          ... on DatoCmsTwoColumnsLayout {
            id: originalId
            leftColumn {
              value
              blocks {
                __typename
                ... on DatoCmsBlockTitleWithParagraph {
                  id: originalId
                  title
                  content {
                    value
                  }
                }
              }
            }
            rightColumn {
              value
              blocks {
                __typename
                ... on DatoCmsTwoImagesInCol {
                  id: originalId
                  images {
                    gatsbyImageData
                    alt
                  }
                }
                ... on DatoCmsIconsList {
                  id: originalId
                  listTitle
                  list {
                    nazwaIkony
                    text {
                      value
                    }
                    file {
                      filename
                      url
                    }
                  }
                }
                ... on DatoCmsTwoImagesInCol {
                  id: originalId
                  images {
                    gatsbyImageData
                    alt
                    title
                  }
                }
              }
            }
            
          }
        }
      }
    }
  }
`
