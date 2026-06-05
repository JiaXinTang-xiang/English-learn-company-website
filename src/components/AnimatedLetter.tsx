import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  char: string
  index: number
  totalChars: number
  targetRef: React.RefObject<HTMLElement>
}

export default function AnimatedLetter({ char, index, totalChars, targetRef }: AnimatedLetterProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const charProgress = index / totalChars
  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  )
}
