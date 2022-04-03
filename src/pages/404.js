import * as React from 'react'
import { Link } from 'gatsby'
import Container from '../components/container'
import { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'

// markup
const NotFoundPage = () => {
  useEffect(() => {
    startTransition()
  }, [])
  return (
    <Container>
      <main id='main'>
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
