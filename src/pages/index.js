import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/heroSection'
import UnitsSection from '../components/unitsSection'
import WhoAreWeSection from '../components/whoAreWeSection'
import FaqSection from '../components/faqSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { Helmet } from 'react-helmet'

export default function Index({
  data: {
    home: { nodes: homeData },
    units: { nodes: unitsData }
  }
}) {
  const homeQueryData = homeData[0]
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://miglionico.pl" />
      </Helmet>
      <HeroSection
        title={homeQueryData.title}
        textParagraph={
          homeQueryData.paragraphUnderHeroTitle
        }
        ctaBtnText={homeQueryData.contactPageBtnText}
        findOutMoreBtnText={homeQueryData.offerPageBtnText}
        unitImage={homeQueryData.mainUnit.gatsbyImageData}
        heroBg={homeQueryData.heroSectionBg}
      />
      <UnitsSection
        unitsTitle={homeQueryData.sliderTitle}
        unitsSubtitle={homeQueryData.smallerTitle}
        unitsData={unitsData}
      />
      <WhoAreWeSection
        smallerHeading={homeQueryData.smallerTitleGetToKnow}
        heading={homeQueryData.titleGetToKnow}
        paragraph={homeQueryData.shortParagraph}
        ctaText={homeQueryData.aboutUsBtnText}
        gridImages={homeQueryData.imagesGrid}
      />
      <FaqSection
        faqItems={homeQueryData.faqItems}
        smallerTitle={homeQueryData.smallerTitleFaq}
        biggerTitle={homeQueryData.faqMiglionicoTitle}
        paragraph={homeQueryData.faqParagraph}
      />
      <TestimonialsSection
        smallerTitle={
          homeQueryData.smallerTitleTestimonials
        }
        biggerTitle={
          homeQueryData.testimonialsMiglionicoTitle
        }
        testimonials={homeQueryData.testimonials}
      />
    </>
  )
}

export const query = graphql`
  {
    home: allDatoCmsHome {
      nodes {
        aboutUsBtnText
        faqItems {
          originalId
          faqTitle
          faqAnswerPlain
        }
        faqMiglionicoTitle {
          value
        }
        faqParagraph {
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
        imagesGrid {
          originalId
          gatsbyImageData
        }
        smallerTitleTestimonials {
          value
        }
        testimonials {
          clientName
          city
          testimonialContent
          id
        }
        testimonialsMiglionicoTitle {
          value
        }
        title {
          value
        }
        paragraphUnderHeroTitle {
          value
        }
        contactPageBtnText
        offerPageBtnText
        titleGetToKnow {
          value
        }
      }
    }
    units: allDatoCmsUnit(sort: { fields: homepageOrder }) {
      nodes {
        showOnHome
        unitName
        unitSlug
        unitColor {
          hex
        }
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
