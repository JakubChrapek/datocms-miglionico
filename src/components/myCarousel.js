import React from 'react'
import styled from 'styled-components'
import Carousel, {
  arrowsPlugin,
  slidesToShowPlugin
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { IconButton } from './iconButton'
import { ArrowLeft, ArrowRight } from '../assets/icons'
import { COLORS } from '../utils/constants'
import '@brainhubeu/react-carousel/lib/style.css'

const CarouselWrapper = styled(Carousel)`
  width: 100%;
  position: relative;

  margin-top: clamp(2rem, 3.95vw, ${57 / 16}rem);

  .BrainhubCarousel__track {
    align-items: stretch;
    padding: 3rem 0 0 !important;
  }

  .BrainhubCarouselItem {
    align-items: stretch;
    padding: 2rem 0;
  }
  .prev {
    right: unset;
    left: 0;
  }
  .next {
    left: unset;
    right: 0;
  }
  @media (max-width: 1180px) {
    .prev {
      left: calc(50% - 0.75 * var(--arrow-size));
      transform: translateX(-50%);
      top: 0;
    }
    .next {
      right: calc(50% - 0.75 * var(--arrow-size));
      transform: translateX(50%);
      top: 0;
    }
    .carousel-slider {
      padding-top: 5rem;
    }
  }

  && .slide {
    padding: 0 1rem;
    @media (max-width: 767px) {
      padding: 0 0.5rem;
    }
  }
`

const CardWrapper = styled.blockquote`
  position: relative;
  --card-padding-horizontal: ${40 / 16}rem;
  --border-width: 2px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${40 / 16}rem
    calc(var(--card-padding-horizontal) / 2);
  margin: 0 1rem;
  @media (max-width: 850px) {
    --card-padding-horizontal: 5vw;
    padding: ${44 / 16}rem 1rem ${26 / 16}rem;
  }

  box-shadow: 0.25rem 0.25rem ${25 / 16}rem 0
    rgba(0, 0, 0, 0.05);
  border-radius: ${10 / 16}rem;
  background-clip: padding-box;
  border: var(--border-width) solid transparent;
  background-color: var(--off-white);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: calc(-1 * var(--border-width));
    border-radius: inherit;
    background: var(--primary-gradient);
    transition: opacity 0.4s var(--transition-function) 0.1s;
    opacity: ${({ active }) => (active ? 1 : 0)};
    /* @media (max-width: 1122px) {
      opacity: 0;
    } */
  }

  :hover:before {
    opacity: ${({ active }) => (active ? 1 : 0.25)};
    /* @media (max-width: 1122px) {
      opacity: 0;
    } */
  }
`

const CardFooter = styled.footer`
  order: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.cite`
  font-size: var(--smaller-header-font-size);
  line-height: 1.33;
  color: var(--primary-navy);
  font-family: 'k2d', sans-serif;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.25rem;
`

const Subtitle = styled.cite`
  font-size: var(--paragraph-font-size);
  line-height: 1.3;
  color: var(--primary-red);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Content = styled.p`
  order: 1;
  font-size: var(--paragraph-font-size);
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  line-height: 1.3;
  color: var(--gray);
  font-family: 'k2d', sans-serif;
  font-weight: 300;
  text-align: center;
  transition: color 0.3s var(--transition-function);
`

const Card = ({ title, subtitle, content, active }) => {
  return (
    <CardWrapper active={active}>
      <Content>{content}</Content>
      <CardFooter>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardFooter>
    </CardWrapper>
  )
}

class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 }
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <CarouselWrapper
        value={this.state.value}
        onChange={this.onChange}
        plugins={[
          'centered',
          // 'clickToChange',
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <IconButton
                  className='prev'
                  title='Poprzednia opinia'>
                  <ArrowLeft color={COLORS.PRIMARY_NAVY} />
                </IconButton>
              ),
              arrowLeftDisabled: (
                <IconButton
                  className='prev'
                  disabled
                  title='Brak poprzedniej opinii'>
                  <ArrowLeft color={COLORS.PRIMARY_NAVY} />
                </IconButton>
              ),
              arrowRight: (
                <IconButton
                  className='next'
                  title='Następna opinia'>
                  <ArrowRight color={COLORS.PRIMARY_NAVY} />
                </IconButton>
              ),
              arrowRightDisabled: (
                <IconButton
                  className='next'
                  disabled
                  title='Brak następnej opinii'>
                  <ArrowRight color={COLORS.PRIMARY_NAVY} />
                </IconButton>
              ),
              addArrowClickHandler: true
            }
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          }
        ]}
        breakpoints={{
          640: {
            plugins: [
              'centered',
              'clickToChange',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          },
          960: {
            plugins: [
              'centered',
              'clickToChange',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              }
            ]
          }
        }}>
        {this.props.items.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            active={this.state.value === index}
            index={index}
            numberOfItems={this.props.items.length}
            position={this.state.value}
            title={testimonial.clientName}
            subtitle={testimonial.city}
            content={testimonial.testimonialContent}
          />
        ))}
      </CarouselWrapper>
    )
  }
}

export default MyCarousel
