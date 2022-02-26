import React from 'react'

export const FooterGradientRect = () => (
  <svg
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='1.15 0.39 1438.19 423.61'>
    {' '}
    <path
      d='M1439.32 413.365C1439.69 419.126 1435.12 424 1429.34 424H11.1555C5.20154 424 0.566528 418.83 1.21497 412.911L45.4325 9.30225C46.006 4.06796 50.5402 0.17514 55.801 0.400452L1407.79 58.3089C1412.9 58.5276 1417.02 62.5634 1417.34 67.6652L1439.32 413.365Z'
      fill='#262F6E'></path>{' '}
    <path
      d='M1417.31 413.354C1417.68 419.119 1413.11 424 1407.33 424H34C28.4772 424 24 419.523 24 414V16.4414C24 10.7491 28.7448 6.20502 34.4318 6.45074L1385.8 64.842C1390.9 65.0625 1395.02 69.0909 1395.35 74.1865L1417.31 413.354Z'
      fill='url(#paint0_linear_181_400)'></path>{' '}
    <defs>
      {' '}
      <linearGradient
        id='paint0_linear_181_400'
        x1='1450.3'
        y1='424'
        x2='21.0399'
        y2='15.9842'
        gradientUnits='userSpaceOnUse'>
        {' '}
        <stop
          stopColor='#C3112D'
          stopOpacity='0'></stop>{' '}
        <stop offset='1' stopColor='#C3112D'></stop>{' '}
      </linearGradient>{' '}
    </defs>{' '}
  </svg>
)

export const FooterNavyRect = () => (
  <svg
    width='1440'
    height='424'
    viewBox='0 0 1440 424'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <clipPath id='round-corner'>
        <polygon points='42 0, 1410 32, 1440 424, 0 424' />
        <circle cx='72' cy='31' r='31' />
      </clipPath>
    </defs>
    <rect
      rx='10'
      ry='10'
      width='1440'
      height='424'
      clip-path='url(#round-corner)'
      fill='var(--primary-navy)'></rect>
  </svg>
)

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
          stopColor='#C3112D'
          stopOpacity='1'
          offset='0%'></stop>
        <stop
          stopColor='#1c235c'
          stopOpacity='1'
          offset='100%'></stop>
      </linearGradient>
    </defs>
    <rect
      width='1385'
      height='290'
      rx='10'
      ry='10'
      fill='url(#ffflux-gradient)'
    />
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
          stopColor='#1b2155'
          stopOpacity='1'
          offset='0%'></stop>
        <stop
          stopColor='#ad0b23'
          stopOpacity='1'
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
        colorInterpolationFilters='sRGB'>
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
      filter='url(#ffflux-filter)'
    />
  </svg>
)
