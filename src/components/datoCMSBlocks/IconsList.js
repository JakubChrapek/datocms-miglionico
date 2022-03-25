import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { FILE_ICONS } from '../../assets/icons'
import { Title } from './common/components'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
`

const ListTitle = styled(Title)`
  margin-bottom: 2rem;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--primary-navy);

    :hover {
      p:after {
        transform: scaleX(1);
      }
    }
    :focus-visible {
      outline: 2px solid var(--primary-red);
    }
    > p {
      margin-left: 1.5rem;
    }
  }
  + li {
    margin-top: 2rem;
  }
`

export const IconsList = ({ icons, listTitle }) => (
  <ListWrapper>
    <ListTitle extraSmallHeading>{listTitle}</ListTitle>
    <List>
      {icons.map((icon) => (
        <ListItem>
          <a
            target='_blank'
            href={icon.file.url}
            className='link__underline'
            download={icon.file.filename}>
            {FILE_ICONS[icon.nazwaIkony]}
            <StructuredText data={icon.text} />
          </a>
        </ListItem>
      ))}
    </List>
  </ListWrapper>
)

export default IconsList
