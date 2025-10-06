import { useMemo, useState } from 'react'

type Level = 'Beginner' | 'Intermediate' | 'Advanced'

type Lesson = {
  id: number
  title: string
  level: Level
  description: string
  youtubeId?: string
  related?: { label: string; href: string }[]
}

const LEVELS: Level[] = ['Beginner', 'Intermediate', 'Advanced']

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Market Structure 101',
    level: 'Beginner',
    description: 'Trends, ranges, and how structure informs trade selection and risk.',
    youtubeId: '5qap5aO4i9A',
    related: [{ label: 'Read: BTC Regime Monitor', href: '/research' }],
  },
  {
    id: 2,
    title: 'Risk and Position Sizing',
    level: 'Beginner',
    description: 'Volatility‑aware sizing and managing drawdowns with simple rules.',
    youtubeId: 'hHW1oY26kxQ',
  },
  {
    id: 3,
    title: 'Momentum vs Mean‑Reversion',
    level: 'Intermediate',
    description: 'When to favor trend following vs. reversion and how to avoid regime mismatch.',
    youtubeId: 'DWcJFNfaw9c',
    related: [{ label: 'Signals: Z‑Score MTF', href: '/signals' }],
  },
  {
    id: 4,
    title: 'Backtesting Assumptions',
    level: 'Advanced',
    description: 'Slippage, fees, look‑ahead bias, and out‑of‑sample validation.',
  },
]

export default function Education() {
  const [active, setActive] = useState<Level>('Beginner')

  const filtered = useMemo(() => LESSONS.filter((l) => l.level === active), [active])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="text-neutral-400 text-sm mt-1">Free learning modules to build community trust. Advanced items can be gated later.</p>
        </div>
        <div className="flex gap-2">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActive(lvl)}
              className={`h-9 rounded-md border px-3 text-sm ${active === lvl ? 'border-brand/50 bg-brand text-black' : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'}`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((l) => (
          <article key={l.id} className="rounded-lg border border-neutral-800 bg-neutral-900/40 overflow-hidden">
            <div className="p-6">
              <h3 className="font-semibold">{l.title}</h3>
              <p className="mt-2 text-neutral-400 text-sm">{l.description}</p>
              <div className="mt-3 flex gap-3 text-sm">
                {l.related?.map((r, i) => (
                  <a key={i} href={r.href} className="text-brand hover:text-brand-dark">{r.label} →</a>
                ))}
              </div>
            </div>
            {l.youtubeId && (
              <div className="border-t border-neutral-800 bg-neutral-950">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${l.youtubeId}`}
                    title={l.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5 text-sm text-neutral-400">
        Future‑ready: add progress tracking and gated lessons for logged‑in users to create a course‑style experience.
      </div>
    </div>
  )
}


