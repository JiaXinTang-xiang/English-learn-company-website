import { useEffect, useRef, useState } from 'react'

interface Ripple {
  x: number
  y: number
  id: number
}

interface Trail {
  x: number
  y: number
  id: number
  opacity: number
  scale: number
  color: string
}

interface Sparkle {
  x: number
  y: number
  id: number
  angle: number
  distance: number
  delay: number
  size: number
  color: string
}

interface ScrollParticle {
  x: number
  y: number
  id: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const COLORS = [
  'from-blue-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-cyan-500 to-blue-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-purple-500'
]

const SPARKLE_COLORS = ['#667eea', '#764ba2', '#f093fb', '#3b82f6', '#8b5cf6']

export default function MouseEffects() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [trails, setTrails] = useState<Trail[]>([])
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [scrollParticles, setScrollParticles] = useState<ScrollParticle[]>([])
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isClicking, setIsClicking] = useState(false)
  const [trailColorIndex, setTrailColorIndex] = useState(0)
  const trailIdRef = useRef(0)
  const rippleIdRef = useRef(0)
  const sparkleIdRef = useRef(0)
  const scrollParticleIdRef = useRef(0)
  const lastTrailTime = useRef(0)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setIsClicking(true)
      setTimeout(() => setIsClicking(false), 300)

      // Cycle trail color
      setTrailColorIndex(prev => (prev + 1) % COLORS.length)

      // Create ripple
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: rippleIdRef.current++
      }
      setRipples(prev => [...prev, newRipple])
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)

      // Create sparkles
      const sparkleCount = 12
      const newSparkles: Sparkle[] = Array.from({ length: sparkleCount }, (_, i) => ({
        x: e.clientX,
        y: e.clientY,
        id: sparkleIdRef.current++,
        angle: (360 / sparkleCount) * i + (Math.random() * 30 - 15),
        distance: 40 + Math.random() * 60,
        delay: Math.random() * 0.15,
        size: 3 + Math.random() * 4,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
      }))
      setSparkles(prev => [...prev, ...newSparkles])
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)))
      }, 800)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      const now = Date.now()
      if (now - lastTrailTime.current > 30) {
        lastTrailTime.current = now

        const newTrail: Trail = {
          x: e.clientX,
          y: e.clientY,
          id: trailIdRef.current++,
          opacity: 1,
          scale: 1,
          color: COLORS[trailColorIndex]
        }

        setTrails(prev => [...prev, newTrail].slice(-30))

        requestAnimationFrame(() => {
          setTrails(prev => prev.map(t =>
            t.id === newTrail.id ? { ...t, opacity: 0, scale: 0.2 } : t
          ))
        })

        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== newTrail.id))
        }, 500)
      }
    }

    const handleScroll = () => {
      const now = Date.now()
      if (now - lastScrollTime.current > 50) {
        lastScrollTime.current = now

        const count = 3 + Math.floor(Math.random() * 3)
        const newParticles: ScrollParticle[] = Array.from({ length: count }, () => ({
          x: mousePos.x + (Math.random() - 0.5) * 100,
          y: mousePos.y + (Math.random() - 0.5) * 50,
          id: scrollParticleIdRef.current++,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          size: 2 + Math.random() * 4,
          opacity: 1,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
        }))

        setScrollParticles(prev => [...prev, ...newParticles].slice(-50))

        newParticles.forEach(p => {
          setTimeout(() => {
            setScrollParticles(prev => prev.map(sp =>
              sp.id === p.id ? { ...sp, opacity: 0 } : sp
            ))
          }, 100)
          setTimeout(() => {
            setScrollParticles(prev => prev.filter(sp => sp.id !== p.id))
          }, 600)
        })
      }
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mousePos, trailColorIndex])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ cursor: 'none' }}>
      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div key={ripple.id} className="absolute" style={{ left: ripple.x, top: ripple.y }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                border: `2px solid ${['rgba(147,51,234,0.6)', 'rgba(59,130,246,0.4)', 'rgba(236,72,153,0.3)'][i]}`,
                animation: `ripple-expand 0.8s ease-out ${i * 0.1}s forwards`
              }}
            />
          ))}
          {/* Center flash */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
            style={{ animation: 'ripple-dot 0.4s ease-out forwards' }}
          />
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map(sparkle => {
        const radians = (sparkle.angle * Math.PI) / 180
        const endX = Math.cos(radians) * sparkle.distance
        const endY = Math.sin(radians) * sparkle.distance

        return (
          <div
            key={sparkle.id}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              animation: `sparkle-fly 0.6s ease-out ${sparkle.delay}s forwards`
            }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                background: sparkle.color,
                boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
                '--end-x': `${endX}px`,
                '--end-y': `${endY}px`
              } as React.CSSProperties}
            />
          </div>
        )
      })}

      {/* Scroll Particles */}
      {scrollParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            transform: `translate(${particle.vx * 20}px, ${particle.vy * 20}px)`
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
          />
        </div>
      ))}

      {/* Mouse Trails */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
            transform: `translate(-50%, -50%) scale(${trail.scale})`,
            transition: 'opacity 0.35s ease-out, transform 0.35s ease-out'
          }}
        >
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${trail.color} blur-[1px]`} />
        </div>
      ))}

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s linear, top 0.05s linear'
        }}
      >
        {/* Outer ring */}
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-150 ${isClicking
            ? 'scale-[0.6] border-purple-500/80 shadow-[0_0_20px_rgba(147,51,234,0.6)]'
            : 'border-white/30'
          }`}
          style={{
            animation: isClicking ? 'none' : 'cursor-glow 2s ease-in-out infinite'
          }}
        />
        {/* Inner dot */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ${isClicking ? 'w-3 h-3 scale-125' : 'w-1.5 h-1.5'
            }`}
        />
      </div>

      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />
    </div>
  )
}
