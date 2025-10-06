import { useMemo, useState } from 'react'

type Article = {
  id: number
  title: string
  slug: string
  category: 'BTC' | 'ETH' | 'Altcoins' | 'Macro'
  excerpt: string
  date: string
  premium?: boolean
}

const ALL_CATEGORIES = ['All', 'BTC', 'ETH', 'Altcoins', 'Macro'] as const

const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'BTC Regime Monitor: Momentum vs. Mean‑Reversion',
    slug: 'btc-regime-monitor',
    category: 'BTC',
    excerpt:
      'Tracking multi‑timeframe momentum and z‑score signals to determine risk‑on or risk‑off posture.',
    date: '2025-10-01',
  },
  {
    id: 2,
    title: 'ETH Staking Flows and Liquidity Dynamics',
    slug: 'eth-staking-liquidity',
    category: 'ETH',
    excerpt:
      'How validator exits and restaking rotation impact ETH reflexivity and medium‑term trends.',
    date: '2025-09-25',
  },
  {
    id: 3,
    title: 'Alt Momentum Basket: Rotations and Risk Controls',
    slug: 'alt-rotations-risk-controls',
    category: 'Altcoins',
    excerpt:
      'A rules‑based approach to rotating among liquid alts with volatility‑aware position sizing.',
    date: '2025-09-18',
    premium: true,
  },
  {
    id: 4,
    title: 'Macro: Liquidity, Real Yields, and Crypto Beta',
    slug: 'macro-liquidity-yields',
    category: 'Macro',
    excerpt:
      'Examining global liquidity proxies and real yields to contextualize crypto beta cycles.',
    date: '2025-09-10',
  },
  {
    id: 5,
    title: 'BTC Mean‑Reversion Playbook (Backtest Notes)',
    slug: 'btc-mean-reversion-playbook',
    category: 'BTC',
    excerpt:
      'Parameter sweeps, assumptions, and caveats for the short‑term MR system used in signals.',
    date: '2025-08-29',
    premium: true,
  },
]

export default function Research() {
  const [activeCategory, setActiveCategory] = useState<(typeof ALL_CATEGORIES)[number]>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return MOCK_ARTICLES.filter((a) =>
      (activeCategory === 'All' || a.category === activeCategory) &&
      (query.trim() === '' || a.title.toLowerCase().includes(query.toLowerCase()))
    )
  }, [activeCategory, query])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Market Research</h2>
          <p className="text-neutral-400 text-sm mt-1">Published articles, market reviews, and reports. Premium items are marked with a lock.</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles…"
            className="h-9 w-56 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 text-sm outline-none focus:border-neutral-700"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {ALL_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={
              `h-9 rounded-md border px-3 text-sm transition-colors ` +
              (activeCategory === c
                ? 'border-brand/50 bg-brand text-black'
                : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700')
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <article key={a.id} className="rounded-lg border border-neutral-800 bg-neutral-900/40 overflow-hidden">
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-400">{new Date(a.date).toLocaleDateString()}</span>
                <span className="text-xs rounded-md border border-neutral-700 px-2 py-0.5">{a.category}</span>
              </div>
              <h3 className="mt-2 font-semibold leading-snug">
                {a.title}
                {a.premium && (
                  <span className="ml-2 align-middle text-[11px] rounded-sm border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-amber-300">Premium</span>
                )}
              </h3>
              <p className="mt-2 text-neutral-400 text-sm">{a.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <a href="#" className="text-brand hover:text-brand-dark">Read article →</a>
                <a href="#" className="text-neutral-400 hover:text-neutral-300">Share</a>
              </div>
            </div>
            <div className="border-t border-neutral-800 bg-neutral-950 p-3">
              <div className="aspect-[16/9] w-full">
                <iframe
                  title={`Chart preview ${a.slug}`}
                  className="w-full h-full"
                  src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=240&theme=dark&style=1&withdateranges=1&hide_side_toolbar=1"
                  allowTransparency
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5 text-sm text-neutral-400">
        CMS‑ready: plug in Strapi, Sanity, or another headless CMS to manage articles, categories, and premium visibility. Each article can store a slug, markdown/HTML body, and optional TradingView embed.
      </div>
    </div>
  )
}


