import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IconButton = styled(motion.button)`
  border: 4px solid var(--primary-navy);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: var(--arrow-size);
  height: var(--arrow-size);
  opacity: 0.5;
  background-color: transparent;
  transition: opacity 0.4s var(--transition-function);
  cursor: pointer;
  z-index: 5;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:first-of-type {
    left: -1.25rem;
  }
  &:last-of-type {
    right: -1.25rem;
  }

  &:focus-visible {
    opacity: 1;
    outline: 4px solid var(--primary-navy);
    outline-offset: 4px;
  }

  &:hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0;
    pointer-events: none;
  }
`
