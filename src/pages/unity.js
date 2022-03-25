import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Heading, Paragraph } from '../components/typography'
import { graphql } from 'gatsby'
import { COLORS } from "../utils/constants"
import PriceBlock from "../components/datoCMSBlocks/PriceBlock"
import Details from "../components/datoCMSBlocks/Details"
import VerticalGraphickBlockWithList from "../components/datoCMSBlocks/VerticalGraphicBlockWithList"
import SpecialistTestimontials from "../components/datoCMSBlocks/SpecialistTestimontial"

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
  text-align: center;
`
const AboutText = styled(Paragraph)`
  text-align: center;
  margin: 26px 0 !important;
  max-width: 620px;
  color: var(--primary-navy);
`
const AboutImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
  position: relative;
  z-index: 2;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.05);
    z-index: -1;
  }
`


const UnityPage = ({ data: { datoCmsUnityPage: data } }) => {
  return (
    <div>
      <HeroContainer>
        <AboutTitle color={COLORS.GRADIENT}>
          {data.welcomeTitle}
        </AboutTitle>
        <AboutText><p>{data.welcomeText}</p></AboutText>
        <AboutImage image={data.heroSection.gatsbyImageData} />
      </HeroContainer>
      <StructuredText
        data={data.pageContent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsPriceBlock':
              return (
                <PriceBlock data={record} />
              )
            case 'DatoCmsVerticalGraphicBlockWithList':
              return (
                <VerticalGraphickBlockWithList data={record} />
              )
            case 'DatoCmsDetailsBlock':
              return (
                <Details data={record} />
              )
            case 'DatoCmsSpecialistRecommendationBlock':
              return (
                <SpecialistTestimontials data={record} />
              )
            default:
              return null
          }
        }}
      />
    </div>
  )
}

export default UnityPage

export const unityPageQuery = graphql`
    query{
      datoCmsUnityPage {
        welcomeTitle
        welcomeText
        heroSection {
          gatsbyImageData
        }
        pageContent {
          blocks {
            ... on DatoCmsPriceBlock {
              __typename
              id: originalId
              title
              text
              priceItem {
                title
                list {
                  text
                  isactive
                }
                linkUrl {
                  unitSlug
                }
                cennik
                linkText
              }
            }
            ... on DatoCmsVerticalGraphicBlockWithList {
              __typename
              id: originalId
              verticalGraphic {
                gatsbyImageData
              }
              blockText
              blockTitle
              list {
                description
                number
              }
            }
            ... on DatoCmsDetailsBlock {
              __typename
              id: originalId
              blockTitle
              slider {
                text
                img {
                  gatsbyImageData
                }
              }
            }
            ... on DatoCmsSpecialistRecommendationBlock {
              __typename
              id: originalId
              blockTitle
              slider {
                rekomendacjaKlienta
                clientName
                miejscowoFirma
                clientFoto {
                  gatsbyImageData
                }
              }
            }
          }
          value
        }
      }
    }
`