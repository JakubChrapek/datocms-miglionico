import React, { useState } from 'react'
import styled from 'styled-components'
import { ChevronDownIcon } from '../assets/icons'

const ListWrapper = styled.ul`
  flex: 1 1 52%;
  border-radius: ${10 / 16}rem;
  background-color: var(--off-white);
  box-shadow: 4px 4px 25px 0 rgba(0, 0, 0, 0.05);
`

const FaqItemWrapper = styled.details`
  padding: ${20 / 16}rem ${30 / 16}rem ${36 / 16}rem;
  font-family: 'k2d', sans-serif;
  &:first-of-type {
    border-top-left-radius: ${10 / 16}rem;
    border-top-right-radius: ${10 / 16}rem;
  }
  &:last-of-type {
    border-bottom-left-radius: ${10 / 16}rem;
    border-bottom-right-radius: ${10 / 16}rem;
  }
  color: var(--off-white);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity 0.4s var(--transition-function);
  }
  &:hover {
    &:before {
      opacity: 0.1;
    }
  }
  :not(&[open]) + [open] {
    border-top-left-radius: ${10 / 16}rem;
    border-top-right-radius: ${10 / 16}rem;
  }
  &[open] {
    &:before {
      opacity: 1;
    }
    + details[open] {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    summary {
      color: var(--off-white);
      font-weight: 500;
    }
  }
`

const FaqQuestion = styled.summary`
  position: relative;
  list-style: none;
  appearance: none;
  border-radius: ${5 / 16}rem;
  ::marker,
  ::-webkit-details-marker {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--paragraph-font-size);
  line-height: ${23 / 18};
  color: var(--primary-navy);

  > * {
    display: inline;
  }
  &:focus-visible {
    outline: 2px solid var(--primary-red);
    outline-offset: 2px;
  }
`

const FaqAnswer = styled.p`
  position: relative;
`

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setOpen((old) => {
      return !old
    })
  }
  return (
    <FaqItemWrapper open={open} onClick={handleClick}>
      <FaqQuestion>
        {item.faqTitle}
        <ChevronDownIcon
          rotate={open}
          stroke={
            open
              ? 'var(--off-white)'
              : 'var(--primary-navy)'
          }
        />
      </FaqQuestion>
      <FaqAnswer>{item.faqAnswerPlain}</FaqAnswer>
    </FaqItemWrapper>
  )
}

const FaqList = ({ faqItems }) => {
  return (
    <ListWrapper>
      {faqItems.map((faqItem) => (
        <FaqItem key={faqItem.originalId} item={faqItem} />
      ))}
    </ListWrapper>
  )
}

export default FaqList
