export default function Home() {
	const faqs = [
		{
			title: 'How is this different from copy trading?',
			answer:
				'We provide rules-based strategies with fully disclosed logic and backtests. You allocate on your own exchange and always retain full custody.',
		},
		{
			title: 'Can I withdraw anytime?',
			answer:
				'Yes. Funds stay on your connected exchange. You can unfollow a strategy or withdraw whenever you choose.',
		},
		{
			title: 'What returns should I expect?',
			answer:
				'Crypto is volatile. We publish realistic, risk‑adjusted performance with assumptions so you can size positions responsibly.',
		},
		{
			title: 'Do you offer education?',
			answer:
				'Yes. The Education section explains the rules, risk controls, and market structure behind each strategy.',
		},
	];

  return (
		<div className="space-y-16">
      {/* Hero */}
			<section className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md shadow-2xl shadow-orange-500/20">
				<div className="relative z-[1] px-6 py-14 sm:py-20 text-center">
					<p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand">
						<span className="h-2 w-2 rounded-full bg-brand" />
						SignalEdge — Research, Education & Automated Crypto Insights
					</p>
					<h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
						Trade smarter with data‑driven crypto insights.
        </h1>
					<p className="mt-4 text-gray-300 max-w-2xl mx-auto">
						Transparent, rules‑based research and signals designed to acquire Bitcoin at better‑than‑market prices. Learn the rules. Keep custody.
        </p>
					<div className="mt-6 flex items-center justify-center gap-3">
          <a href="/pricing" className="px-5 py-2.5 rounded-md bg-brand text-white font-medium hover:bg-brand-dark shadow-lg shadow-orange-500/30">Start free</a>
						<a href="/research" className="px-5 py-2.5 rounded-md border border-orange-500/50 hover:border-orange-500 text-white">View analysis</a>
					</div>

					{/* KPIs */}
					<div className="mt-10 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
						<div className="rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md p-4 shadow-lg shadow-cyan-500/20">
							<p className="text-2xl font-bold text-cyan-400">$150M+</p>
							<p className="text-xs text-gray-300">Assets tracked</p>
						</div>
						<div className="rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md p-4 shadow-lg shadow-purple-500/20">
							<p className="text-2xl font-bold text-purple-400">490k</p>
							<p className="text-xs text-gray-300">Signals delivered</p>
						</div>
						<div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-md p-4 shadow-lg shadow-orange-500/20">
							<p className="text-2xl font-bold text-orange-400">$5.8B</p>
							<p className="text-xs text-gray-300">Total volume</p>
						</div>
        </div>
        </div>
				{/* Decorative glow */}
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_20rem_at_50%_120%,rgba(249,115,22,0.15),transparent),radial-gradient(30rem_15rem_at_20%_80%,rgba(168,85,247,0.1),transparent)]" />
      </section>

			{/* Featured analysis / chart */}
			<section className="rounded-2xl border border-orange-500/30 overflow-hidden bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md shadow-2xl shadow-orange-500/20">
				<div className="grid sm:grid-cols-2">
					<div className="p-6 sm:p-8 bg-gradient-to-br from-black/60 to-indigo-900/60 backdrop-blur-md">
						<p className="text-sm text-brand">Featured analysis</p>
						<h3 className="mt-2 text-2xl font-semibold text-white">BTC regime monitor</h3>
						<p className="mt-2 text-gray-300 text-sm">Live dashboard tracking momentum vs. mean‑reversion to help determine risk‑on vs. risk‑off conditions.</p>
						<div className="mt-4 flex gap-3">
							<a href="/research" className="px-4 py-2 rounded-md bg-brand text-white font-medium hover:bg-brand-dark text-sm shadow-lg shadow-orange-500/30">Read breakdown</a>
							<a href="/signals" className="px-4 py-2 rounded-md border border-orange-500/50 hover:border-orange-500 text-white text-sm">See signals</a>
						</div>
					</div>
					<div className="bg-black">
						<div className="aspect-[16/10] w-full">
          <iframe
								title="Featured BTC Chart"
            className="w-full h-full"
            src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=240&theme=dark&style=1&withdateranges=1&hide_side_toolbar=1"
            allowTransparency
          />
        </div>
					</div>
				</div>
			</section>

			{/* Top-Ranked Strategies */}
			<section className="space-y-6">
				<div className="text-center">
					<p className="text-sm text-brand">Top‑ranked strategies</p>
					<h2 className="text-2xl sm:text-3xl font-semibold mt-1">Choose a style that fits your risk</h2>
				</div>
				<div className="grid gap-5 sm:grid-cols-3">
					{[
						{ name: 'Slow & Steady DCA+', stat: '45.1% 1y', icon: '🐢', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30', shadow: 'shadow-cyan-500/20' },
						{ name: 'Active Aggressive', stat: '168% 1y', icon: '⚡', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', shadow: 'shadow-orange-500/20' },
						{ name: 'Trend‑Following MTF', stat: '35.7% 1y', icon: '🌟', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/30', shadow: 'shadow-purple-500/20' },
					].map((c) => (
						<div key={c.name} className={`rounded-xl border ${c.border} p-5 bg-gradient-to-b ${c.color} backdrop-blur-md shadow-lg ${c.shadow}`}>
							<div className="flex items-center justify-between">
								<div className="text-3xl">{c.icon}</div>
								<div className="text-right">
									<p className="text-sm text-gray-300">12 mo</p>
									<p className="text-lg font-semibold text-white">{c.stat}</p>
								</div>
							</div>
							<p className="mt-3 font-medium text-white">{c.name}</p>
							<div className="mt-4 flex justify-between text-sm">
								<a href="/signals" className="px-3 py-1.5 rounded-md bg-brand text-white font-medium hover:bg-brand-dark shadow-lg shadow-orange-500/30">Follow signals</a>
								<a href="/signals" className="px-3 py-1.5 rounded-md border border-orange-500/50 hover:border-orange-500 text-white">Performance</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Testimonials / credibility */}
			<section className="space-y-6">
				<div className="text-center">
					<p className="text-sm text-brand">What users say</p>
					<h3 className="text-2xl font-semibold mt-1">Trusted by serious crypto traders</h3>
				</div>
				<div className="grid gap-5 sm:grid-cols-3">
					{[
						{
							q: 'SignalEdge replaces noise with clear rules. The transparency builds real conviction.',
							a: 'Pro trader, 7 yrs'
						},
						{
							q: 'Backtests plus live context helped me size positions responsibly and stick to the plan.',
							a: 'Quant enthusiast'
						},
						{
							q: 'Education explains the why behind every signal—perfect for learning while investing.',
							a: 'Long‑term investor'
						},
					].map((t, i) => (
						<div key={i} className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md p-5 shadow-lg shadow-orange-500/20">
							<p className="text-gray-300">"{t.q}"</p>
							<p className="mt-3 text-xs text-gray-400">— {t.a}</p>
						</div>
					))}
				</div>
			</section>

			{/* Platform pillars */}
			<section className="grid gap-5 sm:grid-cols-3">
				<div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20">
					<h3 className="text-lg font-semibold text-cyan-400">Research</h3>
					<p className="mt-2 text-sm text-gray-300">Deep market insights, macro context, and transparent methodology to build conviction.</p>
				</div>
				<div className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-md p-6 shadow-lg shadow-orange-500/20">
					<h3 className="text-lg font-semibold text-orange-400">Signals</h3>
					<p className="mt-2 text-sm text-gray-300">Live and backtested rule-based entries/exits that you can follow with control.</p>
        </div>
				<div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md p-6 shadow-lg shadow-purple-500/20">
					<h3 className="text-lg font-semibold text-purple-400">Education</h3>
					<p className="mt-2 text-sm text-gray-300">Guides and video explainers so users learn the strategy logic, not just copy.</p>
        </div>
      </section>

			{/* How it works */}
			<section className="space-y-6">
				<div className="text-center">
					<p className="text-sm text-brand">Get started in minutes</p>
					<h2 className="text-2xl sm:text-3xl font-semibold mt-1">How it works</h2>
				</div>
				<div className="grid gap-5 sm:grid-cols-3">
					{[
						{ n: 1, title: 'Create account & browse research', desc: 'Explore performance, risk, and strategy logic. Start small to learn the flow.' },
						{ n: 2, title: 'Follow signals with custody', desc: 'Signals automate entries/exits, while funds remain on your exchange.' },
						{ n: 3, title: 'Withdraw or rebalance', desc: 'Adjust allocations as conditions change. Stop any time.' },
					].map((s) => (
						<div key={s.n} className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md p-5 shadow-lg shadow-orange-500/20">
							<div className="flex items-center gap-3">
								<div className="h-8 w-8 rounded-full bg-brand text-white grid place-content-center font-bold shadow-lg shadow-orange-500/30">{s.n}</div>
								<h4 className="font-semibold text-white">{s.title}</h4>
							</div>
							<p className="mt-2 text-sm text-gray-300">{s.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Membership teaser */}
			<section className="grid gap-5 sm:grid-cols-2">
				<div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20">
					<p className="text-xs uppercase tracking-wider text-cyan-400">Freemium</p>
					<h3 className="mt-1 text-xl font-semibold text-white">Research access</h3>
					<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
						<li>Selected articles and market notes</li>
						<li>Education primers and guides</li>
						<li>Occasional strategy previews</li>
					</ul>
					<a href="/research" className="mt-4 inline-block px-4 py-2 rounded-md border border-cyan-500/50 hover:border-cyan-500 text-white text-sm">Browse research</a>
				</div>
				<div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-md p-6 shadow-lg shadow-orange-500/20">
					<p className="text-xs uppercase tracking-wider text-brand">Premium</p>
					<h3 className="mt-1 text-xl font-semibold text-white">Real‑time signals</h3>
					<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
						<li>Live strategy alerts</li>
						<li>Deeper analysis and backtests</li>
						<li>Context on risk and assumptions</li>
					</ul>
					<a href="/pricing" className="mt-4 inline-block px-4 py-2 rounded-md bg-brand text-white font-medium hover:bg-brand-dark text-sm shadow-lg shadow-orange-500/30">See plans</a>
				</div>
			</section>

			{/* Trusted by */}
			<section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md shadow-2xl shadow-orange-500/20 p-6 sm:p-8">
				<div className="grid gap-6 sm:grid-cols-2 items-center">
					<div>
						<h3 className="text-2xl font-semibold text-white">Trusted by</h3>
						<p className="mt-2 text-gray-300 text-sm">Exchanges, funds, and fintechs use our research and signals.</p>
						<div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm text-gray-300">
							<div className="rounded-md border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 py-3 backdrop-blur-md">Binance</div>
							<div className="rounded-md border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 py-3 backdrop-blur-md">Bybit</div>
							<div className="rounded-md border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 py-3 backdrop-blur-md">Kraken</div>
							<div className="rounded-md border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 py-3 backdrop-blur-md">Fireblocks</div>
							<div className="rounded-md border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 py-3 backdrop-blur-md">Coinbase</div>
							<div className="rounded-md border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 py-3 backdrop-blur-md">OKX</div>
						</div>
					</div>
					<div className="rounded-xl border border-orange-500/30 bg-black/60 backdrop-blur-md p-5 shadow-lg shadow-orange-500/20">
						<p className="text-sm text-gray-300">"A social investment platform to democratize access to sophisticated strategies."</p>
						<p className="mt-3 text-xs text-gray-400">— Industry review</p>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="space-y-6">
				<h3 className="text-center text-2xl font-semibold">FAQs</h3>
				<div className="space-y-3">
					{faqs.map((item, idx) => (
						<details key={idx} className="group rounded-xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md p-4 shadow-lg shadow-orange-500/20 [&_summary]:marker:content-none">
							<summary className="flex cursor-pointer items-center justify-between">
								<span className="font-medium text-white">{item.title}</span>
								<span className="ml-4 grid h-7 w-7 place-content-center rounded-md border border-orange-500/50 text-orange-400 group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-3 text-sm text-gray-300">{item.answer}</p>
						</details>
					))}
        </div>
      </section>

			{/* CTA */}
			<section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md p-6 shadow-lg shadow-orange-500/20">
				<div className="grid gap-6 sm:grid-cols-2 items-start">
					<div>
						<h4 className="font-semibold text-white">Security, custody, and transparency</h4>
						<p className="mt-2 text-sm text-gray-300">You keep full control of funds on your own exchange. We disclose assumptions and publish risk‑adjusted stats so results are contextualized—not hyped.</p>
					</div>
					<div className="rounded-xl border border-orange-500/30 p-4 bg-black/60 backdrop-blur-md shadow-lg shadow-orange-500/20">
						<p className="text-sm font-medium text-orange-400">Roadmap: automation</p>
						<ul className="mt-2 space-y-1 text-sm text-gray-300 list-disc list-inside">
							<li>Subscriber alerts for new signals</li>
							<li>Exchange API execution (opt-in)</li>
							<li>Portfolio rebalancing tools</li>
						</ul>
        </div>
        </div>
			</section>
			<section className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-md shadow-2xl shadow-orange-500/20 p-10 text-center">
				<h3 className="text-3xl sm:text-4xl font-extrabold text-white">Get started today</h3>
				<p className="mt-2 text-gray-300">Create an account, read the latest research, and follow your first strategy.</p>
				<div className="mt-6 flex justify-center gap-3">
					<a href="/pricing" className="px-5 py-2.5 rounded-md bg-brand text-white font-medium hover:bg-brand-dark shadow-lg shadow-orange-500/30">Get started</a>
					<a href="/education" className="px-5 py-2.5 rounded-md border border-orange-500/50 hover:border-orange-500 text-white">Learn more</a>
        </div>
      </section>
    </div>
	);
}

