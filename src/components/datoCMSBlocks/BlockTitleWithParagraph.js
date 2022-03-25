import React from 'react'
import styled from 'styled-components'
import {
  Content,
  ContentWrapper,
  Title
} from './common/components'

export const BlockTitleWithParagraph = ({
  title,
  content
}) => (
  <ContentWrapper>
    <Title>{title}</Title>
    <Content data={content} />
  </ContentWrapper>
)

export default BlockTitleWithParagraph
