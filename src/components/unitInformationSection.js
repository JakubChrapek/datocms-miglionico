import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link as ScrollLink } from 'react-scroll'
import {
  renderNodeRule,
  StructuredText
} from 'react-datocms'
import {
  COLUMN_LAYOUT_VARIANTS,
  UNIT_SECTION_VARIANTS
} from '../utils/constants'
import { Heading } from './typography'
import { isHeading } from 'react-datocms/node_modules/datocms-structured-text-utils'

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

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: clamp(3rem, 5.55vw, 5rem);
  width: 100%;

  + section {
    margin-top: clamp(3rem, 7.61vw, ${78 / 16}rem);
  }
  + h2 {
    margin-top: clamp(2.25rem, 5.7vw, ${60 / 16}rem);
  }

  ${({ variant }) =>
    variant === UNIT_SECTION_VARIANTS.VERTICAL &&
    css`
      grid-gap: 0;
      .gatsby-image-wrapper {
        margin-left: clamp(
          ${80 / 16}rem,
          8.33vw,
          ${120 / 16}rem
        );

        @media (max-width: 1010px) {
          margin: 1.5rem 0 0 0;
        }
      }
    `}

  @media(max-width: 1010px) {
    grid-template-columns: 1fr;
    max-width: 95ch;
  }
`

const UnitGraphicImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08);
  img {
    object-fit: cover !important;
  }
  > div {
    max-width: 100% !important;
  }
  @media (max-width: 1010px) {
    order: 1;
  }
  ${({ variant }) =>
    variant === UNIT_SECTION_VARIANTS.VERTICAL &&
    css`
      @media (max-width: 1010px) {
        max-height: ${420 / 16}rem;
      }
    `}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ variant }) =>
    variant === COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT
      ? css`
          order: -1;
        `
      : variant === UNIT_SECTION_VARIANTS.VERTICAL &&
        css`
          justify-content: flex-start;
        `}

  > p {
    font-size: var(--paragraph-font-size);
    font-weight: 300;
    color: var(--paragraph-text);
    line-height: 1.33;
    letter-spacing: 0.54px;

    + h1,
    + h2,
    + h3,
    + h4 {
      margin-top: clamp(1.5rem, 3.9vw, 2.5rem);
    }
    + p {
      margin-top: clamp(0.75rem, 1.95vw, 1.25rem);
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
  font-weight: 600;
  line-height: 1.3;
  font-size: ${({ smallerHeading }) =>
    smallerHeading
      ? 'var(--subheader-font-size)'
      : 'var(--header-font-size)'};
  + p {
    margin-top: clamp(1.5rem, 3.9vw, 2.5rem);
  }

  ${({ smallerHeading }) =>
    smallerHeading
      ? css`
          color: var(--primary-navy);
          + p {
            margin-top: ${24 / 16}rem;
          }
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

  + h1, + h2, + h3, + h4 {
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
  margin: clamp(2rem, 5.86vw, ${60 / 16}rem) 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    max-width: 95ch;
  }
  @media (max-width: 804px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem 0;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 804px) {
    grid-column: 1/-1;
  }

  &:nth-of-type(2) {
    .gatsby-image-wrapper {
      order: -1;
    }
    && > p + .gatsby-image-wrapper {
      margin: 0 0 ${40 / 16}rem;

      @media (max-width: 1024px) {
        margin: 0 0 4rem;
      }
    }
  }
  @media (max-width: 1024px) {
    &:nth-of-type(3) {
      grid-column: 1/3;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
  @media (max-width: 804px) {
    .gatsby-image-wrapper {
      order: 1 !important;
    }
    p + .gatsby-image-wrapper {
      margin: ${40 / 16}rem 0 0 !important;
    }
  }

  > p {
    font-size: var(--paragraph-font-size);
    color: var(--paragraph-text);
    font-weight: 300;
    line-height: 1.33;
    letter-spacing: 0.54px;

    + .gatsby-image-wrapper {
      margin-top: ${40 / 16}rem;
    }

    + p {
      margin-top: 1.25rem;
      color: var(--paragraph-text);
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

const VerticalGraphicBlock = ({
  title,
  content,
  image
}) => (
  <SectionWrapper variant={UNIT_SECTION_VARIANTS.VERTICAL}>
    <ContentWrapper
      variant={UNIT_SECTION_VARIANTS.VERTICAL}>
      <Title as='h2'>{title}</Title>
      <Content
        data={content}
        customNodeRules={[
          renderNodeRule(isHeading, ({ children, key }) => (
            <Title key={key} smallerHeading>
              {children}
            </Title>
          ))
        ]}
      />
    </ContentWrapper>
    <UnitGraphicImage
      variant={UNIT_SECTION_VARIANTS.VERTICAL}
      image={image.gatsbyImageData}
    />
  </SectionWrapper>
)

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
