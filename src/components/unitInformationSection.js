import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'
import { StructuredText } from 'react-datocms'
import { COLUMN_LAYOUT_VARIANTS } from '../utils/constants'
import { Heading } from './typography'

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
`

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: clamp(3rem, 5.55vw, 5rem);
  width: 100%;

  + section {
    margin-top: ${78 / 16}rem;
  }
  + h2 {
    margin-top: ${60 / 16}rem;
  }
`

const UnitGraphicImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  img {
    object-fit: contain !important;
  }
  > div {
    max-width: 100% !important;
  }
  /* ${({ variant }) =>
    variant === COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT
      ? css`
          margin: 0 0 0 clamp(3rem, 5.2vw, ${75 / 16}rem);
        `
      : css`
          margin: 0 clamp(3rem, 5.2vw, ${75 / 16}rem) 0 0;
        `}; */
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ variant }) =>
    variant === COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT &&
    css`
      order: -1;
    `}

  > p {
    font-size: var(--paragraph-font-size);
    font-weight: 300;
    color: var(--paragraph-text);
    line-height: 1.33;
    letter-spacing: 0.54px;
    + p {
      margin-top: 1.25rem;
    }
    + ul {
      margin: 1.25rem 0;
      font-size: var(--paragraph-font-size);
      font-weight: 300;
      color: var(--paragraph-text);
      line-height: 1.33;
      letter-spacing: 0.54px;
      list-style-type: disc;
      list-style-position: inside;
      > li {
        + li {
          margin-top: 0.25rem;
        }
        > * {
          display: inline;
        }
      }
    }
  }
`

const Title = styled.h3`
  font-size: ${({ smallerHeading }) =>
    smallerHeading
      ? 'var(--subheader-font-size)'
      : 'var(--header-font-size)'};

  ${({ smallerHeading }) =>
    smallerHeading
      ? css`
          color: var(--primary-navy);
        `
      : css`
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
        `}

  + p {
    margin-top: ${40 / 16}rem;
  }
`

const Content = styled(StructuredText)``

const UnitGraphicTextColumn = ({
  title,
  content,
  image,
  variant = COLUMN_LAYOUT_VARIANTS.IMAGE_ON_LEFT,
  smallerHeading = false
}) => (
  <SectionWrapper variant={variant}>
    <UnitGraphicImage
      variant={variant}
      image={image.gatsbyImageData}
    />
    <ContentWrapper variant={variant}>
      <Title
        smallerHeading={smallerHeading}
        variant={variant}>
        {title}
      </Title>
      <Content variant={variant} data={content} />
    </ContentWrapper>
  </SectionWrapper>
)

const ThreeColumnSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: clamp(2.5rem, 4.02vw, ${58 / 16}rem);
  margin: ${60 / 16}rem 0;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-of-type(2) {
    .gatsby-image-wrapper {
      order: -1;
    }
    && > p + .gatsby-image-wrapper {
      margin: 0 0 ${40 / 16}rem;
    }
  }

  > p {
    font-size: var(--paragraph-font-size);
    font-weight: 300;
    color: var(--off-black);
    line-height: 1.33;
    letter-spacing: 0.54px;

    + .gatsby-image-wrapper {
      margin-top: ${40 / 16}rem;
    }

    + p {
      margin-top: 1.25rem;
    }
    + ul {
      margin: 1.25rem 0;
      font-size: var(--paragraph-font-size);
      font-weight: 300;
      color: var(--off-black);
      line-height: 1.33;
      letter-spacing: 0.54px;
      list-style-type: disc;
      list-style-position: inside;
      > li {
        + li {
          margin-top: 0.25rem;
        }
        > * {
          display: inline;
        }
      }
    }
  }
`
const ColumnTitle = styled.h3`
  font-size: var(--subheader-font-size);
  color: var(--primary-navy);
  margin-bottom: 1.25rem;
`
const ColumnContent = styled(StructuredText)``
const ColumnImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  + p,
  + h3,
  + h2 {
    margin-top: ${40 / 16}rem;
  }
`

const ThreeColumnLayout = ({
  firstColTitle,
  firstColParagraph,
  firstColImage,
  secondColTitle,
  secondColParagraph,
  secondColImage,
  thirdColTitle,
  thirdColParagraph,
  thirdColImage
}) => (
  <ThreeColumnSection>
    <Column>
      <ColumnTitle>{firstColTitle}</ColumnTitle>
      <ColumnContent data={firstColParagraph} />
      <ColumnImage image={firstColImage.gatsbyImageData} />
    </Column>
    <Column reversed>
      <ColumnTitle>{secondColTitle}</ColumnTitle>
      <ColumnContent data={secondColParagraph} />
      <ColumnImage image={secondColImage.gatsbyImageData} />
    </Column>
    <Column>
      <ColumnTitle>{thirdColTitle}</ColumnTitle>
      <ColumnContent data={thirdColParagraph} />
      <ColumnImage image={thirdColImage.gatsbyImageData} />
    </Column>
  </ThreeColumnSection>
)

const UnitWrapper = styled.div`
  position: relative;
  margin-bottom: ${75 / 16}rem;
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
