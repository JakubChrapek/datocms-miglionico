import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/heroSection'
import UnitsSection from '../components/unitsSection'
import WhoAreWeSection from '../components/whoAreWeSection'
import FaqSection from '../components/faqSection'
import TestimonialsSection from '../components/TestimonialsSection'
import {
  HeroParagraph,
  HeroTitle
} from '../components/typography'

export default function Index({
  data: {
    home: { nodes: homeData },
    units: { nodes: unitsData }
  }
}) {
  const homeQueryData = homeData[0]
  return (
    <>
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
        smallerHeading='Kim jesteśmy?'
        heading='Poznaj firmę Miglionico'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a arcu sed risus tristique. Eget non velit semper vitae sollicitudin eget. Quis felis convallis tristique rhoncus scelerisque. Cras diam sed id habitant purus et lorem.'
        ctaText='Więcej o nas'
        gridImages={homeQueryData.imagesGrid}
      />
      <FaqSection faqItems={homeQueryData.faqItems} />
      <TestimonialsSection
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
          city
          testimonialContent
          id
        }
        testimonialsMiglionicoTitle {
          value
          __typename
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
          __typename
        }
      }
    }
    units: allDatoCmsUnit {
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
