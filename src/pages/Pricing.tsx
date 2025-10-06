export default function Pricing() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Choose your plan</h2>
        <p className="text-neutral-400 text-sm mt-1">Clear comparison between Free and Premium. You can upgrade anytime.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Free */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <p className="text-xs uppercase tracking-wider text-emerald-400">Free</p>
          <h3 className="mt-1 text-3xl font-bold">$0<span className="text-base font-medium text-neutral-400">/mo</span></h3>
          <p className="mt-2 text-neutral-400 text-sm">Great for exploring research and learning the methodology.</p>
          <ul className="mt-4 text-sm space-y-2 text-neutral-300 list-disc list-inside">
            <li>Selected research articles</li>
            <li>Education modules</li>
            <li>Occasional strategy previews</li>
          </ul>
          <a href="/account" className="mt-5 inline-block px-5 py-2.5 rounded-md border border-neutral-700 hover:border-neutral-600">Start free</a>
        </div>

        {/* Premium */}
        <div className="rounded-2xl border border-neutral-800 bg-[linear-gradient(180deg,rgba(34,197,94,0.12),rgba(34,197,94,0.02))] p-6">
          <p className="text-xs uppercase tracking-wider text-brand">Premium</p>
          <h3 className="mt-1 text-3xl font-bold">$39<span className="text-base font-medium text-neutral-400">/mo</span></h3>
          <p className="mt-2 text-neutral-400 text-sm">For traders who want real‑time signals and deeper analysis.</p>
          <ul className="mt-4 text-sm space-y-2 text-neutral-300 list-disc list-inside">
            <li>Real‑time strategy alerts</li>
            <li>Backtests and deeper breakdowns</li>
            <li>Priority updates</li>
          </ul>
          <a href="/account" className="mt-5 inline-block px-5 py-2.5 rounded-md bg-brand text-black font-medium hover:bg-brand-dark">Subscribe</a>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5 text-sm text-neutral-400">
        Payments: Integrate Stripe/PayPal/crypto wallets. Pricing can be managed from an admin panel for dynamic updates.
      </div>
    </div>
  )
}


