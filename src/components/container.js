import React from 'react'
import styled from 'styled-components'

const ContainerStyles = styled.div`
  max-width: var(--container-max-width);
  padding: 0 ${20 / 16}rem 0 ${41 / 16}rem;
  margin: 0 auto;
  display: flex;
`

export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>
}
