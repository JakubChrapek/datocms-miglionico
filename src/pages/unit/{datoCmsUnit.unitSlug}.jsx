import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import UnitHeroSection from '../../components/unitHeroSection';
import UnitInformationSection from '../../components/unitInformationSection';


const Wrapper = styled.main`

`

const UnitPage = ({ data }) => {
  const { datoCmsUnit: unitData } = data;
  return (
    <Wrapper>
      <Helmet>
        <link rel="canonical" href={"https://miglionico.pl/unit/" + unitData.unitSlug} />
      </Helmet>
      <UnitHeroSection
        unitType={unitData.unitType}
        unitName={unitData.unitName}
        unitShortDescription={unitData.unitShortDescription}
        unitGalleryImages={unitData.unitGallery}
      />
      <UnitInformationSection
        unitWelcomeImage={unitData.unitWelcomeImage}
        unitWelcomeHeader={unitData.titleOverWelcomeImg}
        unitDescription={unitData.unitDescription}
      />
    </Wrapper>
  )
}



export default UnitPage

export const query = graphql`
  query ($unitSlug: String) {
    datoCmsUnit(unitSlug: { eq: $unitSlug }) {
      originalId
      unitName
      unitType
      unitSlug
      logo {
        gatsbyImageData
        alt
        title
      }
      unitWelcomeImage {
        gatsbyImageData
        alt
        title
      }
      titleOverWelcomeImg {
        value
      }
      unitGallery {
        originalId
        alt
        title
        gatsbyImageData
        smallerImage: gatsbyImageData(
          width: 150
          height: 150
        )
      }
      unitColor {
        hex
      }
      unitDescription {
        value
        blocks {
          __typename
          ... on DatoCmsGraphicTextColumnLeft {
            id: originalId
            graphicStartingLeft {
              gatsbyImageData
            }
            columnTitle
            smallerHeading
            paragraph {
              value
            }
          }
          ... on DatoCmsGraphicTextColumn {
            id: originalId
            graphicStartingRight {
              gatsbyImageData
            }
            columnTitle
            paragraph {
              value
            }
          }
          ... on DatoCmsVerticalGraphicBlock {
            id: originalId
            trescBloku {
              value
            }
            verticalGraphic {
              gatsbyImageData
            }
            blockTitle
          }
          ... on DatoCmsThreeColumnWithTextAndGraphic {
            id: originalId
            firstColTitle
            firstColImage {
              gatsbyImageData
            }
            firstColParagraph {
              value
            }
            secondColTitle
            secondColImage {
              gatsbyImageData
            }
            secondColParagraph {
              value
            }
            thirdColTitle
            thirdColImage {
              gatsbyImageData
            }
            thirdColParagraph {
              value
            }
          }
        }
      }
      unitDownloadDescription {
        value
      }
      unitFeaturedImage {
        gatsbyImageData
      }
      unitPrice {
        value
      }
      unitShortDescription {
        value
      }
      unitTechDetails {
        value
      }
    }
  }
`