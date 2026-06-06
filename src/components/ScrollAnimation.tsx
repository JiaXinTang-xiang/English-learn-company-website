import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollAnimation({ children, className = '', delay = 0, direction = 'up' }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(60px)'
      case 'down':
        return 'translateY(-60px)'
      case 'left':
        return 'translateX(60px)'
      case 'right':
        return 'translateX(-60px)'
      default:
        return 'translateY(60px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
