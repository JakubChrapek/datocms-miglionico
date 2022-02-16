import React from 'react'
import Layout from './src/components/commonLayout'
import '@fontsource/k2d/300.css'
import '@fontsource/k2d/400.css'
import '@fontsource/k2d/500.css'
import '@fontsource/k2d/600.css'
import '@fontsource/titillium-web/400.css'
import '@fontsource/titillium-web/700.css'
import { BlockBodyProvider } from './src/components/blockBodyContext'

export const wrapPageElement = ({ element, props }) => (
  <BlockBodyProvider>
    <Layout {...props}>{element}</Layout>
  </BlockBodyProvider>
)
