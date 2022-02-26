import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'
import { StructuredText } from 'react-datocms'
import { COLUMN_LAYOUT_VARIANTS } from '../utils/constants'
import { Heading } from './typography'
import ThreeColumnLayout from './datoCMSBlocks/ThreeColumnLayout'
import UnitGraphicTextColumn from './datoCMSBlocks/UnitGraphicTextColumn'
import VerticalGraphicBlock from './datoCMSBlocks/VerticalGraphicBlock'

const InformationWrapper = styled.div`
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

  h2 {
    font-size: var(--header-font-size);
    font-weight: 600;
    line-height: ${83 / 64};
    font-family: 'k2d', sans-serif;
    background: -webkit-linear-gradient(
      var(--primary-red),
      var(--primary-navy)
    );
    background: linear-gradient(
      96.12deg,
      #c3112d 4.74%,
      #262f6e 55.62%
    );
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const navigationItems = [
  {
    name: 'Opis unitu',
    navLink: 'opisUnitu'
  }
  // {
  //   name: 'Dane techniczne',
  //   navLink: 'daneTechniczne'
  // },
  // {
  //   name: 'Do pobrania',
  //   navLink: 'doPobrania'
  // }
]

const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  padding: ${28 / 16}rem ${22 / 16}rem;
  margin: 0 -${22 / 16}rem ${80 / 16}rem;
  background-color: var(--off-white);
  z-index: 2;
  box-shadow: 0 20px 24px -16px rgba(0, 0, 0, 0.175);

  @media (max-width: 1120px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 920px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`

const NavigationList = styled.ul``

const NavigationItem = styled.li`
  &:first-of-type {
    > a {
      margin-top: 0;
      padding-top: 0;
    }
  }
`

const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
  font-weight: 300;
  color: var(--primary-navy);
  font-family: 'k2d';
  font-size: ${22 / 16}rem;
  @media (max-width: 920px) {
    font-size: ${20 / 16}rem;
  }
  display: inline-block;
  margin: 0.33rem 0;
  padding: 0.33rem 0;
  text-decoration: none;
  transition: transform 0.3s ease-out;
  transform-origin: left center;
  &:hover,
  &.activeLink {
    color: var(--primary-red);
    font-weight: 600;
    transform: scale(1.2);
  }

  &:focus-visible {
    color: var(--primary-red);
  }
`

const InformationNavigation = () => (
  <NavigationWrapper>
    <NavigationList>
      {navigationItems.map((item) => (
        <NavigationItem>
          <StyledScrollLink
            href=''
            activeClass='activeLink'
            to={item.navLink}
            spy={true}
            smooth={true}
            offset={-175}
            duration={600}>
            {item.name}
          </StyledScrollLink>
        </NavigationItem>
      ))}
    </NavigationList>
  </NavigationWrapper>
)

const WelcomeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 802px) {
    align-items: flex-start;
  }
  position: relative;
  margin-bottom: clamp(3.5rem, 6.11vw, ${88 / 16}rem);
`

const WelcomeImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
`

const SectionHeading = styled(Heading)`
  margin-bottom: 2rem;
  .red {
    color: var(--primary-red);
  }
  .navy {
    color: var(--primary-navy);
  }
  @media (max-width: 802px) {
    text-align: left;
  }
`

const UnitWrapper = styled.div`
  position: relative;
  margin-bottom: clamp(
    ${40 / 16}rem,
    7.32vw,
    ${75 / 16}rem
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`

const UnitInformationSection = ({
  unitWelcomeImage,
  unitWelcomeHeader,
  unitDescription
}) => {
  return (
    <InformationWrapper>
      <InformationNavigation />
      <WelcomeImageWrapper id='opisUnitu'>
        <UnitWrapper>
          <SectionHeading>
            <StructuredText data={unitWelcomeHeader} />
          </SectionHeading>
          <WelcomeImage
            image={unitWelcomeImage.gatsbyImageData}
            alt='Unit dentystyczny Miglionico'
          />
        </UnitWrapper>
        <StructuredText
          data={unitDescription}
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
              case 'DatoCmsThreeColumnWithTextAndGraphic':
                return (
                  <ThreeColumnLayout
                    firstColTitle={record.firstColTitle}
                    firstColParagraph={
                      record.firstColParagraph
                    }
                    firstColImage={record.firstColImage}
                    secondColTitle={record.secondColTitle}
                    secondColParagraph={
                      record.secondColParagraph
                    }
                    secondColImage={record.secondColImage}
                    thirdColTitle={record.thirdColTitle}
                    thirdColParagraph={
                      record.thirdColParagraph
                    }
                    thirdColImage={record.thirdColImage}
                  />
                )
              case 'DatoCmsVerticalGraphicBlock':
                return (
                  <VerticalGraphicBlock
                    title={record.blockTitle}
                    content={record.trescBloku}
                    image={record.verticalGraphic}
                  />
                )
              default:
                return null
            }
          }}
        />
      </WelcomeImageWrapper>
    </InformationWrapper>
  )
}

export default UnitInformationSection
