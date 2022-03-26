import React from 'react'
import Layout from './src/components/commonLayout'
import './src/styles/fonts.css'
import { BlockBodyProvider } from './src/components/blockBodyContext'

export const wrapPageElement = ({ element, props }) => (
  <BlockBodyProvider>
    <Layout {...props}>{element}</Layout>
  </BlockBodyProvider>
)
