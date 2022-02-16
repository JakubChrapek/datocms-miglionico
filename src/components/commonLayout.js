import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Footer from './footer'

const CommonLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query GlobalQuery {
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      blog: datoCmsHome {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }

      header: allDatoCmsHeader {
        nodes {
          headerLogo {
            alt
            gatsbyImageData(
              height: 90
              width: 286
              layout: FIXED
            )
            title
          }
          nawigacja {
            linkText
            tekst
          }
          socialMedia {
            iconGraphic {
              gatsbyImageData(
                height: 25
                width: 25
                layout: FIXED
              )
              title
            }
            socialMediaChannel
          }
        }
      }
      footer: allDatoCmsStopka {
        nodes {
          footerColumns {
            columnTitle
            columnWithIcons
            links {
              linkText
              tekst
              nazwaIkony
            }
          }
          footerLogo {
            alt
            gatsbyImageData(
              height: 73
              width: 300
              layout: FIXED
            )
            title
          }
          socialMedia {
            socialMediaChannel
            iconGraphic {
              gatsbyImageData(
                height: 24
                width: 24
                layout: FIXED
              )
              title
            }
          }
          rights {
            value
          }
          authorsInfo {
            value
          }
        }
      }
    }
  `)

  const {
    site,
    blog,
    header: { nodes: headerData },
    footer: { nodes: footerData }
  } = data

  const header = headerData[0]
  const footer = footerData[0]

  return (
    <>
      <GlobalStyles />
      <HelmetDatoCms
        seo={blog.seo}
        favicon={site.favicon}
      />
      <Header headerData={header} />
      {children}
      <Footer footerData={footer} />
    </>
  )
}

export default CommonLayout