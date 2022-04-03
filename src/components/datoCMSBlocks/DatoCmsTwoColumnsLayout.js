import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { ICONS } from '../../assets/icons'
import {
  Content,
  ContentWrapper,
  SectionWrapper,
  Title,
  UnitGraphicImage,
  TwoImages,
  DownloadWrapper
} from './common/components'

const Wrapper = styled(SectionWrapper)`
  overflow: visible;
  margin-bottom: 20px;
`

export const DatoCmsTwoColumnsLayout = ({
  leftColumnContent,
  rightColumnContent
}) => {
  return (
    <Wrapper>
      <StructuredText
        data={leftColumnContent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsBlockTitleWithParagraph':
              return (
                <ContentWrapper>
                  <Title>{record.title}</Title>
                  <Content data={record.content} />
                </ContentWrapper>
              )
            default:
              break
          }
        }} />
      <StructuredText
        data={rightColumnContent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsTwoImagesInCol':
              return (
                <TwoImages>
                  <UnitGraphicImage className='first' image={record.images[0].gatsbyImageData} />
                  <span />
                  <UnitGraphicImage className='last' image={record.images[1].gatsbyImageData} />
                </TwoImages>
              )
            case 'DatoCmsIconsList':
              return (
                <DownloadWrapper>
                  <h3>Do pobrania</h3>
                  {record.list.map(el => (
                    <a className='link link__underline' aria-label='filename' href={el.file.url}>
                      {ICONS[el.nazwaIkony].component()}
                      <StructuredText data={el.text} />
                    </a>
                  ))}
                </DownloadWrapper>
              )
            default:
              break
          }
        }} />
    </Wrapper>
  )
}

export default DatoCmsTwoColumnsLayout
