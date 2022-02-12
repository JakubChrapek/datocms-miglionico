import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/heroSection'
import styled from 'styled-components'
import UnitsSection from '../components/unitsSection'
import WhoAreWeSection from '../components/whoAreWeSection'
import FaqSection from '../components/faqSection'

const HeroTitle = styled.p`
  font-family: 'k2d';
  font-size: var(--header-font-size);
  line-height: ${80 / 64};
  font-weight: 600;
  margin-bottom: ${24 / 16}rem;
  color: var(--primary-navy);
  > mark {
    color: var(--primary-red);
    background-color: transparent;
  }
`

const HeroParagraph = styled.p`
  font-size: var(--paragraph-font-size);
  line-height: ${28 / 18};
  font-weight: 300;
  color: var(--paragraph-text);
  max-width: ${555 / 16}rem;
  margin-bottom: ${32 / 16}rem;

  > strong {
    font-weight: 700;
  }
`

export default function Index({
  data: {
    home: { nodes: homeData },
    units: { nodes: unitsData }
  }
}) {
  const homeQueryData = homeData[0]
  console.log(homeQueryData)
  return (
    <>
      <HeroSection
        title={() => (
          <HeroTitle>
            Włoska <mark>elegancja</mark> w 
            <mark>każdym detalu</mark>
          </HeroTitle>
        )}
        textParagraph={() => (
          <HeroParagraph>
            <strong>Miglionico</strong> to marka, która jest
            synonimem jakości wykonania, dbałości o detale,
            funkcjonalności oraz wyjątkowej, włoskiej
            stylistyki.{' '}
            <strong>
              Unity stomatologiczne Miglionico
            </strong>{' '}
            gwarantują więc to, co niezbędne
            w profesjonalnym gabinecie stomatologicznym -
            niezawodność, funkcjonalność, a także design,
            który wpasuje się nawet w najbardziej
            wymagające gusta.
          </HeroParagraph>
        )}
        ctaBtnText='Wyślij zapytanie'
        findOutMoreBtnText='Sprawdź naszą ofertę'
        unitImage={homeQueryData.mainUnit.gatsbyImageData}
        heroBg={homeQueryData.heroSectionBg}
      />
      <UnitsSection unitsData={unitsData} />
      <WhoAreWeSection
        smallerHeading='Kim jesteśmy?'
        heading='Poznaj firmę Miglionico'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a arcu sed risus tristique. Eget non velit semper vitae sollicitudin eget. Quis felis convallis tristique rhoncus scelerisque. Cras diam sed id habitant purus et lorem.'
        ctaText='Więcej o nas'
        gridImages={homeQueryData.imagesGrid}
      />
      <FaqSection faqItems={homeQueryData.faqItems} />
    </>
  )
}

export const query = graphql`
  {
    home: allDatoCmsHome {
      nodes {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        aboutUsBtnText
        faqItems {
          originalId
          faqTitle
          faqAnswerPlain
        }
        faqMiglionicoTitle {
          value
          __typename
        }
        heroSectionBg {
          gatsbyImageData
        }
        mainUnit {
          gatsbyImageData
        }
        seoMetaTags {
          tags
        }

        shortParagraph {
          value
          __typename
        }
        sliderTitle {
          value
          __typename
        }
        smallerTitle {
          value
          __typename
        }
        smallerTitleFaq {
          value
          __typename
        }
        smallerTitleGetToKnow {
          value
          __typename
        }
        imagesGrid {
          originalId
          gatsbyImageData
        }
        smallerTitleTestimonials {
          value
          __typename
        }
        testimonials {
          clientName
          id
          testimonial {
            value
            __typename
          }
          businessName {
            value
            __typename
          }
        }
        testimonialsMiglionicoTitle {
          value
          __typename
        }
        title {
          value
          __typename
        }
        titleGetToKnow {
          value
          __typename
        }
      }
    }
    units: allDatoCmsUnit {
      nodes {
        showOnHome
        unitName
        unitFeaturedImage {
          gatsbyImageData
          title
          alt
        }
        logo {
          gatsbyImageData
          title
          alt
        }
      }
    }
  }
`

// allPosts: allDatoCmsPost(
//   sort: { fields: date, order: DESC }
//   limit: 20
// ) {
//   nodes {
//     title
//     slug
//     excerpt
//     date
//     coverImage {
//       large: gatsbyImageData(width: 1500)
//       small: gatsbyImageData(width: 760)
//     }
//     author {
//       name
//       picture {
//         gatsbyImageData(
//           layout: FIXED
//           width: 48
//           height: 48
//           imgixParams: { sat: -100 }
//         )
//       }
//     }
//   }
// }
