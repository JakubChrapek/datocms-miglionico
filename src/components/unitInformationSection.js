import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'
import { StructuredText } from 'react-datocms'
import { COLUMN_LAYOUT_VARIANTS } from '../utils/constants'

const InformationWrapper = styled.div`
  padding: 0 var(--container-horizontal-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
  position: relative;
  @media (max-width: 1480px) {
    padding-left: 2.375rem;
    padding-right: 2.625rem;
  }
  z-index: 2;
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
  margin-top: 0px;
  top: 0px;
  padding: ${28 / 16}rem 0;
  margin-bottom: ${28 / 16}rem;
  background-color: var(--off-white);
  z-index: 2;
  box-shadow: 0 20px 24px -16px rgba(0, 0, 0, 0.175);
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
`

const WelcomeImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
`

const LogoImage = styled(GatsbyImage)`
  position: absolute;
  right: ${20 / 16}rem;
  bottom: 1rem;
`

const SectionHeading = styled.h3`
  font-size: 3rem;
  line-height: 1.25;
  color: var(--off-white);
  font-weight: 600;
  font-family: 'k2d';
  text-align: center;
  position: absolute;
  top: 0.75rem;
  z-index: 1;
  max-width: ${543 / 16}rem;
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
`

const UnitGraphicImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ variant }) =>
    variant === COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT &&
    css`
      order: -1;
      margin: 1rem ${80 / 16}rem 0 0;
    `}

  > p {
    font-size: var(--paragraph-font-size);
    font-weight: 300;
    color: var(--off-black);
    line-height: 1.33;
    letter-spacing: 0.54px;
    + p {
      margin-top: 1.25rem;
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
    <UnitGraphicImage image={image.gatsbyImageData} />
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

const ThreeColumnSection = styled.section``
const Column = styled.div``
const ColumnTitle = styled.h3``
const ColumnContent = styled(StructuredText)``
const ColumnImage = styled(GatsbyImage)``

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
  justify-content: center;
`

const UnitInformationSection = ({
  unitWelcomeImage,
  unitLogo,
  unitName,
  unitDescription
}) => {
  return (
    <InformationWrapper>
      <InformationNavigation />
      <WelcomeImageWrapper id='opisUnitu'>
        <UnitWrapper>
          <SectionHeading>
            <span className='red'>Pełna</span> kontrola,{' '}
            <span className='navy'>intuicyjne</span>
             użytkowanie
          </SectionHeading>
          <WelcomeImage
            image={unitWelcomeImage.gatsbyImageData}
            alt='Unit dentystyczny Miglionico'
          />
          <LogoImage
            image={unitLogo.gatsbyImageData}
            alt={`Unit dentystyczny Miglionico – ${unitName}`}
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
