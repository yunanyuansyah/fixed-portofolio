'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress(progress + Math.floor(Math.random() * 5) + 1), 40 + Math.random() * 60)
      return () => clearTimeout(timeout)
    } else if (onFinish) {
      setTimeout(onFinish, 400)
    }
  }, [progress, onFinish])

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black transition-all duration-700">
      <div className="text-center mb-8">
        <div className="text-5xl md:text-7xl font-sunny font-bold mb-2" style={{ color: 'rgb(255,238,218)' }}>
          Yunan Yuansyah
        </div>
        <div className="text-xl md:text-2xl font-medium mb-8" style={{ color: 'rgb(255,238,218)' }}>
          Software & AI Engineer
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-72 max-w-xs h-3 rounded-full bg-white/10 mb-4 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, rgb(255,238,218) 60%, #444 100%)' }}
        />
      </div>
      <div className="text-base font-medium mb-6" style={{ color: 'rgb(255,238,218)' }}>
        Loading... {progress}%
      </div>
      {/* Animated Dots */}
      <div className="flex items-center justify-center space-x-3 mt-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block w-4 h-4 rounded-full"
            style={{
              background: 'rgb(255,238,218)',
              opacity: 0.8,
              animation: `loadingDot 1.2s infinite`,
              animationDelay: `${i * 0.25}s`,
              filter: 'drop-shadow(0 0 8px rgb(255,238,218))',
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes loadingDot {
          0%, 80%, 100% { transform: scale(1); opacity: 0.8; }
          40% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>
    </div>
  )
} 