import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseSize: number
  opacity: number
  life: number
  maxLife: number
  pulseSpeed: number
  pulsePhase: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => {
      const baseSize = Math.random() * 3 + 1
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: baseSize,
        baseSize: baseSize,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 150,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        pulsePhase: Math.random() * Math.PI * 2
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 120 }, createParticle)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time++

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // 脉冲效果 - 大小变化
        particle.size = particle.baseSize * (1 + Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.5)

        // 边界检测 - 粒子反弹
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // 生命周期
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle()
        }

        const lifeRatio = particle.life / particle.maxLife
        const opacity = particle.opacity * (1 - lifeRatio * 0.5)

        // 闪烁效果
        const flicker = 1 + Math.sin(time * 0.1 + particle.pulsePhase) * 0.3
        const finalOpacity = opacity * flicker

        // 发光效果
        ctx.shadowBlur = particle.size * 4
        ctx.shadowColor = `rgba(139, 92, 246, ${finalOpacity * 0.9})`

        // 绘制粒子
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${finalOpacity})`
        ctx.fill()

        // 内部高光
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 180, 255, ${finalOpacity * 0.8})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
