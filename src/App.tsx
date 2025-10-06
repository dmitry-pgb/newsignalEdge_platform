import { Outlet, NavLink, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-semibold">SignalEdge</Link>
          <div className="flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>`hover:text-brand ${isActive ? 'text-brand' : ''}`}>Home</NavLink>
            <NavLink to="/research" className={({isActive})=>`hover:text-brand ${isActive ? 'text-brand' : ''}`}>Research</NavLink>
            <NavLink to="/signals" className={({isActive})=>`hover:text-brand ${isActive ? 'text-brand' : ''}`}>Signals</NavLink>
            <NavLink to="/education" className={({isActive})=>`hover:text-brand ${isActive ? 'text-brand' : ''}`}>Education</NavLink>
            <NavLink to="/pricing" className={({isActive})=>`hover:text-brand ${isActive ? 'text-brand' : ''}`}>Pricing</NavLink>
            <NavLink to="/account" className={({isActive})=>`px-3 py-1.5 rounded-md bg-brand text-black font-medium hover:bg-brand-dark ${isActive ? 'ring-1 ring-brand/40' : ''}`}>Account</NavLink>
          </div>
        </nav>
      </header>

      <main className="container-page py-10">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800">
        <div className="container-page py-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} SignalEdge – Research, Education & Automated Crypto Insights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
