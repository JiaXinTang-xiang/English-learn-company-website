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
          // 更短的延迟，更平滑的出现
          setTimeout(() => {
            setIsVisible(true)
          }, Math.min(delay, 200)) // 最大延迟 200ms
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05, // 更早触发
        rootMargin: '0px 0px -30px 0px' // 更小的边距
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
        return 'translateY(30px)' // 减小距离
      case 'down':
        return 'translateY(-30px)'
      case 'left':
        return 'translateX(30px)'
      case 'right':
        return 'translateX(-30px)'
      default:
        return 'translateY(30px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
      }}
    >
      {children}
    </div>
  )
}
