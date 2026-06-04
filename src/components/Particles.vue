<template>
  <canvas ref="canvasRef" class="particles-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  particleCount: { type: Number, default: 400 },
  particleSpread: { type: Number, default: 10 },
  speed: { type: Number, default: 0.2 },
  particleColors: { type: Array, default: () => ['#ffffff'] },
  moveParticlesOnHover: { type: Boolean, default: true },
  particleHoverFactor: { type: Number, default: 1 },
  alphaParticles: { type: Boolean, default: true },
  particleBaseSize: { type: Number, default: 200 },
  sizeRandomness: { type: Number, default: 1 },
  disableRotation: { type: Boolean, default: false }
})

const canvasRef = ref(null)
let animationId = null
let particles = []
let mouse = { x: 0, y: 0 }
let isMouseOver = false

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    const { particleBaseSize, sizeRandomness, particleColors } = props

    // 分布在整个 canvas 区域内
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.z = Math.random() * 500 + 100

    this.baseSize = particleBaseSize / 10
    this.size = this.baseSize * (1 + (Math.random() - 0.5) * sizeRandomness)

    this.color = particleColors[Math.floor(Math.random() * particleColors.length)]

    this.speedX = (Math.random() - 0.5) * props.speed
    this.speedY = (Math.random() - 0.5) * props.speed
    this.speedZ = Math.random() * props.speed

    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.02

    this.alpha = props.alphaParticles ? Math.random() * 0.6 + 0.3 : 1
  }

  update() {
    const { moveParticlesOnHover, particleHoverFactor, disableRotation } = props

    this.x += this.speedX
    this.y += this.speedY
    this.z -= this.speedZ

    if (!disableRotation) {
      this.rotation += this.rotationSpeed
    }

    if (moveParticlesOnHover && isMouseOver) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 200) {
        this.x -= dx * particleHoverFactor * 0.01
        this.y -= dy * particleHoverFactor * 0.01
      }
    }

    // 粒子移出屏幕时重置
    if (this.x < -50 || this.x > this.canvas.width + 50 ||
        this.y < -50 || this.y > this.canvas.height + 50 ||
        this.z <= 0) {
      this.reset()
    }
  }

  draw(ctx) {
    const scale = 1000 / (1000 + this.z)
    const x = this.x
    const y = this.y
    const size = this.size * scale

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(this.rotation)
    ctx.globalAlpha = this.alpha * scale

    // Draw a soft circle with glow
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
    gradient.addColorStop(0, this.color)
    gradient.addColorStop(1, 'transparent')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(0, 0, size, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }
}

function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return

  particles = []
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(new Particle(canvas))
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(p => {
    p.update()
    p.draw(ctx)
  })

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return

  canvas.width = canvas.parentElement.offsetWidth
  canvas.height = canvas.parentElement.offsetHeight

  initParticles()
}

function handleMouseMove(e) {
  const canvas = canvasRef.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
  isMouseOver = true
}

function handleMouseLeave() {
  isMouseOver = false
}

onMounted(() => {
  handleResize()
  animate()

  window.addEventListener('resize', handleResize)
  canvasRef.value?.addEventListener('mousemove', handleMouseMove)
  canvasRef.value?.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  window.removeEventListener('resize', handleResize)
  canvasRef.value?.removeEventListener('mousemove', handleMouseMove)
  canvasRef.value?.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.particles-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 0;
}
</style>
