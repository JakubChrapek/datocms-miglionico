import React from 'react'
import { StructuredText } from 'react-datocms'
import BlockTitleWithParagraph from './BlockTitleWithParagraph'
import { SectionWrapper } from './common/components'
import ImagesInRightColumn from './ImagesInRightColumn'
import IconsList from './IconsList'

const LeftColumn = ({ content }) => {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        console.log(record)
        switch (record.__typename) {
          case 'DatoCmsBlockTitleWithParagraph':
            return (
              <BlockTitleWithParagraph
                title={record.title}
                content={record.content}
              />
            )
          default:
            return null
        }
      }}
    />
  )
}

const RightColumn = ({ content }) => (
  <StructuredText
    data={content}
    renderBlock={({ record }) => {
      switch (record.__typename) {
        case 'DatoCmsIconsList':
          return (
            <IconsList
              icons={record.list}
              listTitle={record.listTitle}
            />
          )
        case 'DatoCmsTwoImagesInCol':
          return (
            <ImagesInRightColumn images={record.images} />
          )
        default:
          return null
      }
    }}
  />
)

export const DatoCmsTwoColumnsLayout = ({
  leftColumnContent,
  rightColumnContent
}) => {
  return (
    <SectionWrapper>
      <LeftColumn content={leftColumnContent} />
      <RightColumn content={rightColumnContent} />
    </SectionWrapper>
  )
}

export default DatoCmsTwoColumnsLayout
