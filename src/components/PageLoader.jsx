import { useState, useEffect } from 'react'

/* ── Premium page loader / splash screen ── */
function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1200
    function step(now) {
      const p = Math.min((now - start) / duration, 1)
      setProgress(Math.floor(p * 100))
      if (p < 1) requestAnimationFrame(step)
      else {
        setDone(true)
        setTimeout(() => setHidden(true), 500)
      }
    }
    requestAnimationFrame(step)
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        background: 'linear-gradient(135deg, #020817 0%, #0A1628 50%, #020817 100%)',
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'auto',
      }}
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-4xl font-black font-raleway text-white">MK</span>
          <span
            className="text-4xl font-black font-raleway"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Solidum
          </span>
        </div>
        <span className="text-slate-500 text-sm font-medium tracking-widest uppercase">Group B.V.</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg,#2563EB,#06B6D4)',
          }}
        />
      </div>
      <p className="text-slate-600 text-xs mt-3 font-mono">{progress}%</p>
    </div>
  )
}

export default PageLoader
