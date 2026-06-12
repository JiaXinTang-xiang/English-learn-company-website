interface AvatarProps {
  name: string
  color: string
  size?: 'sm' | 'md' | 'lg'
}

const colorMap: Record<string, { bg: string; accent: string }> = {
  'blue': { bg: 'from-blue-400 to-blue-600', accent: '#3b82f6' },
  'purple': { bg: 'from-purple-400 to-purple-600', accent: '#8b5cf6' },
  'green': { bg: 'from-green-400 to-green-600', accent: '#22c55e' },
  'orange': { bg: 'from-orange-400 to-orange-600', accent: '#f97316' },
  'red': { bg: 'from-red-400 to-red-600', accent: '#ef4444' },
  'yellow': { bg: 'from-yellow-400 to-yellow-600', accent: '#eab308' },
  'pink': { bg: 'from-pink-400 to-pink-600', accent: '#ec4899' },
}

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
}

export default function Avatar({ name, color, size = 'md' }: AvatarProps) {
  const colors = colorMap[color] || colorMap['blue']
  const sizeClass = sizeMap[size]
  const initial = name.charAt(0)

  return (
    <div className={`${sizeClass} relative`}>
      {/* 背景 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-full`} />

      {/* 脸部 */}
      <div className="absolute inset-[15%] bg-[#FFD5B8] rounded-full" />

      {/* 头发 */}
      <div
        className="absolute top-[8%] left-[15%] right-[15%] h-[35%] rounded-t-full"
        style={{ backgroundColor: '#4A3728' }}
      />

      {/* 左眼 */}
      <div className="absolute top-[40%] left-[28%] w-[12%] h-[12%] bg-white rounded-full">
        <div className="absolute top-[20%] left-[25%] w-[50%] h-[50%] bg-[#2D1B12] rounded-full" />
      </div>

      {/* 右眼 */}
      <div className="absolute top-[40%] right-[28%] w-[12%] h-[12%] bg-white rounded-full">
        <div className="absolute top-[20%] left-[25%] w-[50%] h-[50%] bg-[#2D1B12] rounded-full" />
      </div>

      {/* 嘴巴 */}
      <div className="absolute bottom-[25%] left-[35%] right-[35%] h-[8%] bg-[#E88B7A] rounded-full" />

      {/* 腮红 */}
      <div className="absolute top-[55%] left-[15%] w-[15%] h-[8%] bg-pink-300/50 rounded-full blur-[2px]" />
      <div className="absolute top-[55%] right-[15%] w-[15%] h-[8%] bg-pink-300/50 rounded-full blur-[2px]" />
    </div>
  )
}
