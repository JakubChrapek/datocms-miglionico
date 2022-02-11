import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/heroSection'
import styled from 'styled-components'

const HeroTitle = styled.p`
  font-family: 'k2d';
  font-size: var(--header-font-size);
  line-height: ${84 / 64};
  font-weight: 600;
  margin-bottom: ${46 / 16}rem;
  color: var(--primary-navy);
  > highlight {
    color: var(--primary-red);
  }
`

const HeroParagraph = styled.p`
  font-size: var(--paragraph-font-size);
  line-height: ${28 / 18};
  font-weight: 300;
  color: var(--paragraph-text);
  max-width: ${555 / 16}rem;
  margin-bottom: ${36 / 16}rem;

  > strong {
    font-weight: 700;
  }
`

export default function Index({
  data: {
    home: { nodes: homeData }
  }
}) {
  const homeQueryData = homeData[0]
  console.log(homeQueryData)
  return (
    <>
      <HeroSection
        title={() => (
          <HeroTitle>
            Włoska <highlight>elegancja</highlight> w 
            <highlight>każdym detalu</highlight>
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
    </>
  )
}

export const query = graphql`
  {
    allPosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 20
    ) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }

    home: allDatoCmsHome {
      nodes {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        aboutUsBtnText
        faqItems {
          faqTitle
          id
          faqAnswer {
            value
          }
        }
        faqMiglionicoTitle {
          value
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
        }
        sliderTitle {
          value
        }
        smallerTitle {
          value
        }
        smallerTitleFaq {
          value
        }
        smallerTitleGetToKnow {
          value
        }
        smallerTitleTestimonials {
          value
        }
        testimonials {
          clientName
          id
          testimonial {
            value
          }
          businessName {
            value
          }
        }
        testimonialsMiglionicoTitle {
          value
        }
        title {
          value
        }
        titleGetToKnow {
          value
        }
      }
    }
  }
`
