import { graphql } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import UnitHeroSection from '../../components/unitHeroSection';
import UnitInformationSection from '../../components/unitInformationSection';


const Wrapper = styled.main`

`

const UnitPage = ({data}) => {
  const {datoCmsUnit: unitData} = data;
  return (
    <Wrapper>
      <UnitHeroSection
        unitType={unitData.unitType}
        unitName={unitData.unitName}
        unitShortDescription={unitData.unitShortDesc}
        unitGalleryImages={unitData.unitGallery}
      />
      <UnitInformationSection />
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
      unitGallery {
        originalId
        alt
        title
        gatsbyImageData
        smallerImage: gatsbyImageData(width: 150, height: 150)
      }
      unitColor {
        hex
      }
      unitDescription {
        value
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
      unitShortDesc
      unitTechDetails {
        value
      }
    }
  }
`