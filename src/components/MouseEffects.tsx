import { useEffect, useRef } from 'react'

interface TrailPt { x: number; y: number; age: number; maxAge: number }
interface RipplePt { x: number; y: number; size: number; opacity: number }
interface SparklePt {
  x: number; y: number; vx: number; vy: number
  life: number; maxLife: number; size: number
  color: string
}

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#3b82f6', '#8b5cf6']

export default function MouseEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const state = {
      mx: -100, my: -100,
      trails: [] as TrailPt[],
      ripples: [] as RipplePt[],
      sparkles: [] as SparklePt[],
      scrollPts: [] as SparklePt[],
    }
    let lastTrail = 0, lastScroll = 0

    const resize = () => { canvas!.width = innerWidth; canvas!.height = innerHeight }
    resize()

    const onMove = (e: MouseEvent) => {
      state.mx = e.clientX; state.my = e.clientY
      const now = Date.now()
      if (now - lastTrail > 30) {
        lastTrail = now
        state.trails.push({ x: e.clientX, y: e.clientY, age: 0, maxAge: 20 })
        if (state.trails.length > 80) state.trails.splice(0, state.trails.length - 80)
      }
    }

    const onClick = (e: MouseEvent) => {
      state.ripples.push({ x: e.clientX, y: e.clientY, size: 0, opacity: 1 })
      for (let i = 0; i < 12; i++) {
        const a = Math.PI * 2 / 12 * i + (Math.random() - 0.5) * 0.5
        const spd = 1.5 + Math.random() * 3
        state.sparkles.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
          life: 0, maxLife: 25 + Math.random() * 15,
          size: 2 + Math.random() * 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    const onScroll = () => {
      const now = Date.now()
      if (now - lastScroll > 80 && state.mx > 0) {
        lastScroll = now
        const n = 2 + Math.floor(Math.random() * 3)
        for (let i = 0; i < n; i++) {
          state.scrollPts.push({
            x: state.mx + (Math.random() - 0.5) * 100,
            y: state.my + (Math.random() - 0.5) * 50,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1.5,
            life: 0, maxLife: 20 + Math.random() * 15,
            size: 2 + Math.random() * 3,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          })
        }
        if (state.scrollPts.length > 80) state.scrollPts.splice(0, state.scrollPts.length - 80)
      }
    }

    const draw = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Trails
      for (let i = 0; i < state.trails.length; i++) {
        const t = state.trails[i]
        t.age++
        if (t.age > t.maxAge) continue
        const p = t.age / t.maxAge
        ctx!.beginPath()
        ctx!.arc(t.x, t.y, 4 * (1 - p), 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(139, 92, 246, ${(1 - p) * 0.5})`
        ctx!.fill()
      }
      state.trails = state.trails.filter(t => t.age <= t.maxAge)

      // Ripples
      for (const r of state.ripples) {
        r.size += 1.5; r.opacity -= 0.03
        if (r.opacity <= 0) continue
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, r.size, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(147, 51, 234, ${r.opacity * 0.6})`
        ctx!.lineWidth = 2
        ctx!.stroke()
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, r.size * 0.75, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(59, 130, 246, ${r.opacity * 0.4})`
        ctx!.lineWidth = 1.5
        ctx!.stroke()
      }
      state.ripples = state.ripples.filter(r => r.opacity > 0)

      // Sparkles
      for (const s of state.sparkles) {
        s.x += s.vx; s.y += s.vy; s.vy += 0.05; s.vx *= 0.97; s.vy *= 0.97
        s.life++
        if (s.life > s.maxLife) continue
        const prog = s.life / s.maxLife, a = 1 - prog, r = s.size * (1 - prog * 0.5)
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, r, 0, Math.PI * 2)
        ctx!.fillStyle = s.color
        ctx!.globalAlpha = a
        ctx!.fill()
        ctx!.shadowBlur = r * 4
        ctx!.shadowColor = s.color
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, r * 0.4, 0, Math.PI * 2)
        ctx!.fillStyle = '#fff'
        ctx!.globalAlpha = a * 0.8
        ctx!.fill()
        ctx!.shadowBlur = 0
        ctx!.globalAlpha = 1
      }
      state.sparkles = state.sparkles.filter(s => s.life <= s.maxLife)

      // Scroll particles
      for (const p of state.scrollPts) {
        p.x += p.vx; p.y += p.vy; p.life++
        if (p.life > p.maxLife) continue
        const prog = p.life / p.maxLife
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size * (1 - prog * 0.5), 0, Math.PI * 2)
        ctx!.fillStyle = p.color
        ctx!.globalAlpha = (1 - prog) * 0.6
        ctx!.fill()
        ctx!.globalAlpha = 1
      }
      state.scrollPts = state.scrollPts.filter(p => p.life <= p.maxLife)

      animId = requestAnimationFrame(draw)
    }

    draw()

    addEventListener('mousemove', onMove, { passive: true })
    addEventListener('click', onClick)
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      removeEventListener('mousemove', onMove)
      removeEventListener('click', onClick)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  )
}
