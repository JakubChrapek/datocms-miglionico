import * as React from 'react'
import { Link } from 'gatsby'
import Container from '../components/container'

// markup
const NotFoundPage = () => {
  return (
    <Container>
      <main>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          <Link to='/'>Główna &rarr;</Link>.
        </p>
      </main>
    </Container>
  )
}

export default NotFoundPage
