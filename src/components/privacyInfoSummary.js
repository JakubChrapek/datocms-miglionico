import { Link } from 'gatsby'
import React from 'react'
import { Paragraph } from './typography'

const PrivacyInfoSummary = () => {
  return (
    <Paragraph style={{ marginTop: '1rem' }}>
      {' '}
      Dbamy o Twoją prywatność. Jeśli chcesz dowiedzieć się,
      w jaki sposób przetwarzamy Twoje dane, przejdź
      do strony{' '}
      <Link to='/polityka-prywatnosci'>
        polityki prywatności
      </Link>
      .
    </Paragraph>
  )
}

export default PrivacyInfoSummary
