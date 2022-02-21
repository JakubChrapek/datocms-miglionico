import React from 'react'

export const SmallGradientRect = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlnsSvgjs='http://svgjs.dev/svgjs'
    viewBox='0 0 1385 290'
    width='1385'
    height='290'
    opacity='1'>
    <defs>
      <linearGradient
        gradientTransform='rotate(108, 0.5, 0.5)'
        x1='50%'
        y1='0%'
        x2='50%'
        y2='100%'
        id='ffflux-gradient'>
        <stop
          stop-color='#b40d26'
          stop-opacity='1'
          offset='0%'></stop>
        <stop
          stop-color='hsl(233, 49%, 29%)'
          stop-opacity='1'
          offset='100%'></stop>
      </linearGradient>
      <filter
        id='ffflux-filter'
        x='-20%'
        y='-20%'
        width='140%'
        height='140%'
        filterUnits='objectBoundingBox'
        primitiveUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.001 0.001'
          numOctaves='1'
          seed='2'
          stitchTiles='stitch'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          result='turbulence'></feTurbulence>
        <feGaussianBlur
          stdDeviation='0 0'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          in='turbulence'
          edgeMode='duplicate'
          result='blur'></feGaussianBlur>
        <feBlend
          mode='overlay'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          in='SourceGraphic'
          in2='blur'
          result='blend'></feBlend>
      </filter>
    </defs>
    <rect
      width='1385'
      height='290'
      rx='10'
      ry='10'
      fill='url(#ffflux-gradient)'
      filter='url(#ffflux-filter)'></rect>
  </svg>
)

export const SmallerRedRect = () => (
  <svg
    width='1385'
    height='290'
    viewBox='0 0 1385 290'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      rx='10'
      ry='10'
      width='1385'
      height='290'
      fill='#C3112D'></rect>
  </svg>
)

export const NavyRect = () => (
  <svg
    width='1435'
    height='719'
    viewBox='0 0 1435 719'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      rx='10'
      ry='10'
      width='1435'
      height='719'
      fill='#262F6E'></rect>
  </svg>
)

export const GradientRect = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlnsSvgjs='http://svgjs.dev/svgjs'
    viewBox='0 0 1435 719'
    width='1435'
    height='719'
    opacity='1'>
    <defs>
      <linearGradient
        gradientTransform='rotate(123, 0.5, 0.5)'
        x1='50%'
        y1='0%'
        x2='50%'
        y2='100%'
        id='ffflux-gradient'>
        <stop
          stop-color='#1b2155'
          stop-opacity='1'
          offset='0%'></stop>
        <stop
          stop-color='#ad0b23'
          stop-opacity='1'
          offset='100%'></stop>
      </linearGradient>
      <filter
        id='ffflux-filter'
        x='-20%'
        y='-20%'
        width='140%'
        height='140%'
        filterUnits='objectBoundingBox'
        primitiveUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.001 0.003'
          numOctaves='1'
          seed='2'
          stitchTiles='stitch'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          result='turbulence'></feTurbulence>
        <feGaussianBlur
          stdDeviation='158 270'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          in='turbulence'
          edgeMode='duplicate'
          result='blur'></feGaussianBlur>
        <feBlend
          mode='color'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          in='SourceGraphic'
          in2='blur'
          result='blend'></feBlend>
      </filter>
    </defs>
    <rect
      rx='10'
      ry='10'
      width='1435'
      height='719'
      fill='url(#ffflux-gradient)'
      filter='url(#ffflux-filter)'></rect>
  </svg>
)
