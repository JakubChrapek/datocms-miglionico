import React from 'react'
import Layout from './src/components/commonLayout'
import '@fontsource/k2d/300.css'
import '@fontsource/k2d/400.css'
import '@fontsource/k2d/500.css'
import '@fontsource/k2d/600.css'
import '@fontsource/titillium-web/400.css'
import '@fontsource/titillium-web/700.css'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
