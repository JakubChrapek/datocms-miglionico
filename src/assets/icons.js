import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from '../utils/constants'

const IconStyles = styled.svg`
  transition: transform 0.25s var(--transition-function);
  path {
    transition: fill 0.25s var(--transition-function);
  }
  ${({ fillColor }) =>
    fillColor === COLORS.PRIMARY_NAVY &&
    css`
      :hover {
        path {
          fill: var(--primary-red);
        }
      }
    `}
  :hover {
    transform: scale(1.15);
  }
`

export const IconFB = ({
  fillColor = COLORS.PRIMARY_NAVY
}) => (
  <IconStyles
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fillColor={fillColor}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.3688 9.17125V10.8925H10.1088V12.9962H11.3688V19.25H13.9588V12.9962H15.6963C15.6963 12.9962 15.86 11.9875 15.9388 10.8838H13.9688V9.44625C13.9688 9.23 14.2513 8.94125 14.5313 8.94125H15.9413V6.75H14.0225C11.305 6.75 11.3688 8.85625 11.3688 9.17125Z'
      fill={fillColor}
    />
    <path
      d='M5.5 3C4.83696 3 4.20107 3.26339 3.73223 3.73223C3.26339 4.20107 3 4.83696 3 5.5V20.5C3 21.163 3.26339 21.7989 3.73223 22.2678C4.20107 22.7366 4.83696 23 5.5 23H20.5C21.163 23 21.7989 22.7366 22.2678 22.2678C22.7366 21.7989 23 21.163 23 20.5V5.5C23 4.83696 22.7366 4.20107 22.2678 3.73223C21.7989 3.26339 21.163 3 20.5 3H5.5ZM5.5 0.5H20.5C21.8261 0.5 23.0979 1.02678 24.0355 1.96447C24.9732 2.90215 25.5 4.17392 25.5 5.5V20.5C25.5 21.8261 24.9732 23.0979 24.0355 24.0355C23.0979 24.9732 21.8261 25.5 20.5 25.5H5.5C4.17392 25.5 2.90215 24.9732 1.96447 24.0355C1.02678 23.0979 0.5 21.8261 0.5 20.5V5.5C0.5 4.17392 1.02678 2.90215 1.96447 1.96447C2.90215 1.02678 4.17392 0.5 5.5 0.5V0.5Z'
      fill={fillColor}
    />
  </IconStyles>
)

export const IconIG = ({
  fillColor = COLORS.PRIMARY_NAVY
}) => (
  <IconStyles
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fillColor={fillColor}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 0.5C9.605 0.5 9.18 0.515 7.84625 0.575C6.51625 0.63625 5.6075 0.8475 4.8125 1.15625C3.97811 1.46981 3.22219 1.96166 2.5975 2.5975C1.9617 3.22222 1.46984 3.97813 1.15625 4.8125C0.8475 5.6075 0.63625 6.51625 0.575 7.84625C0.51375 9.18 0.5 9.605 0.5 13C0.5 16.395 0.51375 16.82 0.575 18.1537C0.63625 19.4837 0.8475 20.3925 1.15625 21.1875C1.46988 22.0219 1.96173 22.7778 2.5975 23.4025C3.22224 24.0383 3.97814 24.5301 4.8125 24.8438C5.6075 25.1525 6.51625 25.3638 7.84625 25.425C9.18 25.485 9.605 25.5 13 25.5C16.395 25.5 16.82 25.485 18.1537 25.425C19.4837 25.3638 20.3925 25.1525 21.1875 24.8438C22.0219 24.5302 22.7778 24.0383 23.4025 23.4025C24.0383 22.7778 24.5302 22.0219 24.8438 21.1875C25.1525 20.3925 25.3638 19.4837 25.425 18.1537C25.485 16.82 25.5 16.395 25.5 13C25.5 9.605 25.485 9.18 25.425 7.84625C25.3638 6.51625 25.1525 5.6075 24.8438 4.8125C24.5302 3.97813 24.0383 3.22222 23.4025 2.5975C22.7778 1.96166 22.0219 1.46981 21.1875 1.15625C20.3925 0.8475 19.4837 0.63625 18.1537 0.575C16.82 0.515 16.395 0.5 13 0.5ZM13 2.7525C16.3375 2.7525 16.7325 2.765 18.05 2.825C19.27 2.88125 19.9313 3.08375 20.3725 3.255C20.955 3.4825 21.3725 3.75375 21.81 4.19C22.2475 4.6275 22.5175 5.045 22.745 5.6275C22.915 6.06875 23.12 6.73 23.175 7.94875C23.235 9.2675 23.2475 9.66125 23.2475 13C23.2475 16.3375 23.235 16.7325 23.175 18.05C23.1187 19.27 22.915 19.9313 22.745 20.3725C22.5446 20.9155 22.2251 21.4067 21.81 21.81C21.3725 22.2475 20.955 22.5175 20.3725 22.745C19.9313 22.915 19.27 23.12 18.0513 23.175C16.7338 23.235 16.3388 23.2475 13 23.2475C9.6625 23.2475 9.26625 23.235 7.95 23.175C6.73 23.1187 6.06875 22.915 5.6275 22.745C5.08448 22.5447 4.59327 22.2252 4.19 21.81C3.77482 21.4067 3.45532 20.9155 3.255 20.3725C3.08375 19.9313 2.88 19.27 2.825 18.0513C2.765 16.7325 2.7525 16.3388 2.7525 13C2.7525 9.6625 2.765 9.2675 2.825 7.95C2.88125 6.73 3.08375 6.06875 3.255 5.6275C3.4825 5.045 3.75375 4.6275 4.19 4.19C4.6275 3.7525 5.045 3.4825 5.6275 3.255C6.06875 3.08375 6.73 2.88 7.94875 2.825C9.2675 2.765 9.66125 2.7525 13 2.7525ZM13 17.1663C11.895 17.1663 10.8353 16.7273 10.054 15.946C9.27269 15.1647 8.83375 14.105 8.83375 13C8.83375 11.895 9.27269 10.8353 10.054 10.054C10.8353 9.27269 11.895 8.83375 13 8.83375C14.105 8.83375 15.1647 9.27269 15.946 10.054C16.7273 10.8353 17.1663 11.895 17.1663 13C17.1663 14.105 16.7273 15.1647 15.946 15.946C15.1647 16.7273 14.105 17.1663 13 17.1663V17.1663ZM13 6.58125C12.1571 6.58125 11.3224 6.74728 10.5437 7.06985C9.76489 7.39242 9.05729 7.86522 8.46126 8.46126C7.86522 9.05729 7.39242 9.76489 7.06985 10.5437C6.74728 11.3224 6.58125 12.1571 6.58125 13C6.58125 13.8429 6.74728 14.6776 7.06985 15.4563C7.39242 16.2351 7.86522 16.9427 8.46126 17.5387C9.05729 18.1348 9.76489 18.6076 10.5437 18.9302C11.3224 19.2527 12.1571 19.4188 13 19.4188C14.7024 19.4188 16.335 18.7425 17.5387 17.5387C18.7425 16.335 19.4188 14.7024 19.4188 13C19.4188 11.2976 18.7425 9.66501 17.5387 8.46126C16.335 7.25751 14.7024 6.58125 13 6.58125V6.58125ZM21.1725 6.3275C21.1725 6.52448 21.1337 6.71954 21.0583 6.90153C20.9829 7.08351 20.8724 7.24887 20.7332 7.38816C20.5939 7.52745 20.4285 7.63794 20.2465 7.71332C20.0645 7.7887 19.8695 7.8275 19.6725 7.8275C19.4755 7.8275 19.2805 7.7887 19.0985 7.71332C18.9165 7.63794 18.7511 7.52745 18.6118 7.38816C18.4726 7.24887 18.3621 7.08351 18.2867 6.90153C18.2113 6.71954 18.1725 6.52448 18.1725 6.3275C18.1725 5.92968 18.3305 5.54814 18.6118 5.26684C18.8931 4.98554 19.2747 4.8275 19.6725 4.8275C20.0703 4.8275 20.4519 4.98554 20.7332 5.26684C21.0145 5.54814 21.1725 5.92968 21.1725 6.3275'
      fill={fillColor}
    />
  </IconStyles>
)

export const IconLI = ({
  fillColor = COLORS.PRIMARY_NAVY
}) => (
  <IconStyles
    width='25'
    height='26'
    viewBox='0 0 25 26'
    fillColor={fillColor}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.75 14.4125V19.0337H16.0713V14.7212C16.0713 13.6387 15.6837 12.9 14.7137 12.9C13.9737 12.9 13.5325 13.3975 13.3387 13.88C13.2687 14.0525 13.25 14.2925 13.25 14.5325V19.0337H10.57C10.57 19.0337 10.6063 11.7312 10.57 10.975H13.25V12.1162L13.2325 12.1425H13.25V12.1175C13.6063 11.5675 14.2412 10.785 15.665 10.785C17.4275 10.785 18.75 11.9375 18.75 14.4125V14.4125ZM7.76625 7.08875C6.85 7.08875 6.25 7.69125 6.25 8.48125C6.25 9.25625 6.8325 9.875 7.73125 9.875H7.74875C8.68375 9.875 9.265 9.255 9.265 8.48125C9.2475 7.69125 8.68375 7.08875 7.76625 7.08875ZM6.40875 19.0337H9.08875V10.975H6.40875V19.0337V19.0337Z'
      fill={fillColor}
    />
    <path
      d='M5 3C4.33696 3 3.70107 3.26339 3.23223 3.73223C2.76339 4.20107 2.5 4.83696 2.5 5.5V20.5C2.5 21.163 2.76339 21.7989 3.23223 22.2678C3.70107 22.7366 4.33696 23 5 23H20C20.663 23 21.2989 22.7366 21.7678 22.2678C22.2366 21.7989 22.5 21.163 22.5 20.5V5.5C22.5 4.83696 22.2366 4.20107 21.7678 3.73223C21.2989 3.26339 20.663 3 20 3H5ZM5 0.5H20C21.3261 0.5 22.5979 1.02678 23.5355 1.96447C24.4732 2.90215 25 4.17392 25 5.5V20.5C25 21.8261 24.4732 23.0979 23.5355 24.0355C22.5979 24.9732 21.3261 25.5 20 25.5H5C3.67392 25.5 2.40215 24.9732 1.46447 24.0355C0.526784 23.0979 0 21.8261 0 20.5V5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5V0.5Z'
      fill={fillColor}
    />
  </IconStyles>
)

export const ContactBg = () => (
  <svg
    width='1413'
    height='314'
    viewBox='0 0 1413 314'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1388.2 45.7551C1387.98 40.1304 1383.1 35.4265 1377.43 35.3785L25.0659 23.9258C19.6646 23.8801 15.5451 28.0943 15.7519 33.4541L24.8047 268.133C25.0217 273.757 29.9017 278.461 35.57 278.509L1387.93 289.962C1393.34 290.008 1397.46 285.794 1397.25 280.434L1388.2 45.7551Z'
      fill='#C3112D'
    />
    <g filter='url(#filter0_b_914_337)'>
      <path
        d='M1398.61 57.7601C1398.96 52.1123 1394.55 47.3063 1388.89 47.1597L38.8127 12.1811C33.4259 12.0415 28.8973 16.1953 28.5719 21.574L14.3859 256.128C14.0443 261.776 18.4525 266.582 24.1086 266.728L1374.19 301.707C1379.57 301.846 1384.1 297.693 1384.43 292.314L1398.61 57.7601Z'
        fill='url(#paint0_linear_914_337)'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_914_337'
        x='-85.6328'
        y='-87.8223'
        width='1584.27'
        height='489.533'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feFlood
          flood-opacity='0'
          result='BackgroundImageFix'
        />
        <feGaussianBlur
          in='BackgroundImage'
          stdDeviation='50'
        />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_914_337'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_backgroundBlur_914_337'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_914_337'
        x1='34.637'
        y1='12.1012'
        x2='720.595'
        y2='848.801'
        gradientUnits='userSpaceOnUse'>
        <stop stop-color='#262F6E' />
        <stop
          offset='1'
          stop-color='#262F6E'
          stop-opacity='0'
        />
      </linearGradient>
    </defs>
  </svg>
)

const FooterBgWrapper = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  pointer-events: none;
`

export const FooterBg = () => (
  <FooterBgWrapper
    width='1435'
    height='424'
    viewBox='0 0 1435 424'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1434.32 413.365C1434.69 419.126 1430.12 424 1424.34 424H6.15546C0.201489 424 -4.4335 418.83 -3.78509 412.911L40.4325 9.30226C41.006 4.06796 45.5402 0.175126 50.801 0.400456L1402.79 58.3089C1407.9 58.5277 1412.02 62.5634 1412.34 67.6652L1434.32 413.365Z'
      fill='#262F6E'
    />
    <g filter='url(#filter0_b_147_160)'>
      <path
        d='M1412.31 413.354C1412.68 419.119 1408.11 424 1402.33 424H29C23.4772 424 19 419.523 19 414V16.4414C19 10.7491 23.7448 6.20501 29.4317 6.45074L1380.8 64.842C1385.9 65.0625 1390.02 69.091 1390.35 74.1865L1412.31 413.354Z'
        fill='url(#paint0_linear_147_160)'
        fill-opacity='0.94'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_147_160'
        x='-181'
        y='-193.559'
        width='1793.33'
        height='817.559'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'>
        <feFlood
          flood-opacity='0'
          result='BackgroundImageFix'
        />
        <feGaussianBlur
          in='BackgroundImage'
          stdDeviation='100'
        />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_147_160'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_backgroundBlur_147_160'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_147_160'
        x1='1445.3'
        y1='424'
        x2='16.0399'
        y2='15.9842'
        gradientUnits='userSpaceOnUse'>
        <stop stop-color='#C3112D' stop-opacity='0' />
        <stop offset='1' stop-color='#C3112D' />
      </linearGradient>
    </defs>
  </FooterBgWrapper>
)

export const MapPinIcon = () => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.5 10C21.5 17 12.5 23 12.5 23C12.5 23 3.5 17 3.5 10C3.5 7.61305 4.44821 5.32387 6.13604 3.63604C7.82387 1.94821 10.1131 1 12.5 1C14.8869 1 17.1761 1.94821 18.864 3.63604C20.5518 5.32387 21.5 7.61305 21.5 10Z'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 13C14.1569 13 15.5 11.6569 15.5 10C15.5 8.34315 14.1569 7 12.5 7C10.8431 7 9.5 8.34315 9.5 10C9.5 11.6569 10.8431 13 12.5 13Z'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const PhoneIcon = () => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.5 2H7.5C6.39543 2 5.5 2.89543 5.5 4V20C5.5 21.1046 6.39543 22 7.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20V4C19.5 2.89543 18.6046 2 17.5 2Z'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 18H12.51'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const MailIcon = () => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.5 4H20.5C21.6 4 22.5 4.9 22.5 6V18C22.5 19.1 21.6 20 20.5 20H4.5C3.4 20 2.5 19.1 2.5 18V6C2.5 4.9 3.4 4 4.5 4Z'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5 6L12.5 13L2.5 6'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ChevronIconStyles = styled.svg`
  transform: ${({ rotate }) =>
    rotate ? 'rotate(180deg)' : ''};
  transition: transform 0.3s var(--transition-function);
`

export const ChevronDownIcon = ({ rotate, stroke }) => (
  <ChevronIconStyles
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    rotate={rotate}
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6 9L12 15L18 9'
      stroke={stroke || 'var(--primary-navy)'}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </ChevronIconStyles>
)

export const ArrowLeft = ({
  color = COLORS.PRIMARY_NAVY
}) => (
  <svg
    width='31'
    height='28'
    viewBox='0 0 31 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.9469 3.33446L14.2951 0.682861L0.973145 14.0049L14.2951 27.3268L16.9469 24.6752L8.15147 15.8799H30.1171V12.1299H8.15147L16.9469 3.33446V3.33446Z'
      fill={color}
    />
  </svg>
)

export const ArrowRight = ({
  color = COLORS.PRIMARY_NAVY
}) => (
  <svg
    width='31'
    height='28'
    viewBox='0 0 31 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.053 3.33446L16.7047 0.682861L30.0267 14.0049L16.7047 27.3268L14.053 24.6752L22.8484 15.8799H0.882788V12.1299H22.8484L14.053 3.33446Z'
      fill={color}
    />
  </svg>
)

export const ICONS = {
  pinezka: { name: 'pinezka', component: MapPinIcon },
  telefon: { name: 'telefon', component: PhoneIcon },
  koperta: { name: 'koperta', component: MailIcon }
}
