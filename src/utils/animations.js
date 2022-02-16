// Navigation animations
export const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
}
export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
}
