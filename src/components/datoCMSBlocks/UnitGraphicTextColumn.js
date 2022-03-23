import React from 'react'
import { COLUMN_LAYOUT_VARIANTS } from '../../utils/constants'
import {
  Content,
  ContentWrapper,
  SectionWrapper,
  Title,
  UnitGraphicImage
} from './common/components'

export const UnitGraphicTextColumn = ({
  title,
  content,
  image,
  variant = COLUMN_LAYOUT_VARIANTS.IMAGE_ON_RIGHT,
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

export default UnitGraphicTextColumn
