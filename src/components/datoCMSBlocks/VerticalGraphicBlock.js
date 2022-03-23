import React from 'react'
import { renderNodeRule } from 'react-datocms'
import { isHeading } from 'datocms-structured-text-utils'

import { UNIT_SECTION_VARIANTS } from '../../utils/constants'
import {
  Content,
  ContentWrapper,
  SectionWrapper,
  Title,
  UnitGraphicImage
} from './common/components'

export const VerticalGraphicBlock = ({
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

export default VerticalGraphicBlock
