import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Logo = ({ logoData }) => {
  return (
    <GatsbyImage
      alt={
        logoData.alt ||
        'Logo dystrybutora sprzętu dentystynczego Miglionico'
      }
      title={
        logoData.title || 'Miglionico sprzęt dentystyczny'
      }
      image={logoData.gatsbyImageData}
    />
  )
}

export default Logo
