import React from 'react'

const Home = () => {
  return (
    <nav className="bg-[var(--color-primary)] px-8 py-4">
  <ul className="flex gap-10">
    <li className="text-[var(--color-text-invert)] font-[var(--font-heading)]
                   tracking-widest uppercase cursor-pointer hover:opacity-80">
      Home
    </li>
    <li className="text-[var(--color-text-invert)] font-[var(--font-heading)]
                   tracking-widest uppercase cursor-pointer hover:opacity-80">
      About
    </li>
    <li className="text-[var(--color-text-invert)] font-[var(--font-heading)]
                   tracking-widest uppercase cursor-pointer hover:opacity-80">
      Services
    </li>
  </ul>
</nav>

  )
}

export default Home