export default function Account() {
  return (
    <div className="space-y-6 max-w-md">
      <h2 className="text-2xl font-semibold">Account</h2>
      <p className="text-neutral-400 text-sm">Sign in placeholder. Authentication integration will be added later.</p>
      <form className="space-y-3">
        <input type="email" placeholder="Email" className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2" />
        <input type="password" placeholder="Password" className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2" />
        <button className="w-full px-4 py-2 rounded-md bg-brand text-black font-medium hover:bg-brand-dark">Sign in</button>
      </form>
    </div>
  )
}