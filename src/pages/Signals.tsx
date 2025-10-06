import { useMemo, useState } from 'react'

type Pair = 'BTCUSDT' | 'ETHUSDT' | 'SOLUSDT'

function TradingViewWidget({ pair, interval }: { pair: Pair; interval: string }) {
  const src = useMemo(() => (
    `https://s.tradingview.com/widgetembed/?symbol=BINANCE:${pair}&interval=${interval}&theme=dark&style=1&withdateranges=1&hide_side_toolbar=1`
  ), [pair, interval])

  return (
    <div className="rounded-lg border border-neutral-800 overflow-hidden">
      <iframe title={`TV ${pair}`} src={src} className="w-full h-[520px]" allowTransparency />
    </div>
  )
}

type Signal = {
  id: number
  pair: Pair
  name: string
  status: 'Long' | 'Short' | 'Flat'
  entry: number
  stop: number
  takeProfit?: number
  perf30d: string
}

const MOCK_SIGNALS: Signal[] = [
  { id: 1, pair: 'BTCUSDT', name: 'Z‑Score MTF', status: 'Long', entry: 61250, stop: 58800, takeProfit: 64500, perf30d: '+12.4%' },
  { id: 2, pair: 'ETHUSDT', name: 'Momentum Swing', status: 'Flat', entry: 0, stop: 0, perf30d: '+6.1%' },
  { id: 3, pair: 'SOLUSDT', name: 'Mean‑Reversion', status: 'Short', entry: 178.2, stop: 186.0, perf30d: '+9.7%' },
]

export default function Signals() {
  const [activeTab, setActiveTab] = useState<'Live' | 'Historical'>('Live')
  const [pair, setPair] = useState<Pair>('BTCUSDT')
  const [interval, setInterval] = useState('60')

  const filteredSignals = useMemo(() => MOCK_SIGNALS.filter((s) => s.pair === pair), [pair])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Trade Analysis & Signals</h2>
          <p className="text-neutral-400 text-sm mt-1">Live and backtested insights delivered via TradingView widgets.</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={pair} onChange={(e) => setPair(e.target.value as Pair)} className="h-9 rounded-md border border-neutral-800 bg-neutral-900/40 px-2 text-sm">
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="SOLUSDT">SOL/USDT</option>
          </select>
          <select value={interval} onChange={(e) => setInterval(e.target.value)} className="h-9 rounded-md border border-neutral-800 bg-neutral-900/40 px-2 text-sm">
            <option value="15">15m</option>
            <option value="60">1h</option>
            <option value="240">4h</option>
            <option value="D">1D</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2">
        {(['Live', 'Historical'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`h-9 rounded-md border px-3 text-sm ${activeTab === t ? 'border-brand/50 bg-brand text-black' : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'}`}
          >
            {t} {t === 'Historical' && <span className="text-xs text-neutral-400">(backtests)</span>}
          </button>
        ))}
      </div>

      <TradingViewWidget pair={pair} interval={interval} />

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Signals for {pair.replace('USDT','/USDT')}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSignals.map((s) => (
            <div key={s.id} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium">{s.name}</p>
                <span className={`rounded-md px-2 py-0.5 text-xs border ${s.status === 'Long' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : s.status === 'Short' ? 'border-rose-500/40 bg-rose-500/10 text-rose-300' : 'border-neutral-700 text-neutral-300'}`}>{s.status}</span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div>
                  <p className="text-neutral-400">Entry</p>
                  <p className="font-medium">{s.entry || '—'}</p>
                </div>
                <div>
                  <p className="text-neutral-400">Stop</p>
                  <p className="font-medium">{s.stop || '—'}</p>
                </div>
                <div>
                  <p className="text-neutral-400">TP</p>
                  <p className="font-medium">{s.takeProfit || '—'}</p>
                </div>
              </div>
              <div className="mt-3 text-neutral-400">30d: <span className="text-neutral-100">{s.perf30d}</span></div>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="text-brand">Open on TradingView →</a>
                <a href="#" className="text-neutral-400">Backtest details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 text-sm text-neutral-400">
        Roadmap: API integration for automated alerts and (opt‑in) execution, plus showing a user’s subscribed premium signals.
      </div>

      <p className="text-neutral-400 text-xs">
        Disclaimer: Educational content only; not financial advice. Past performance does not guarantee future results.
      </p>
    </div>
  )
}


