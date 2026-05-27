import { useState, useEffect } from 'react'
import { meta } from '../data'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base-100/90 backdrop-blur-sm border-b border-base-300' : 'bg-transparent'
      }`}
    >
      <div className="navbar section-padding h-16 min-h-0">
        {/* Logo — always visible */}
        <div className="navbar-start">
          <a href="#hero" className="btn btn-ghost font-mono text-primary text-sm px-2">
            {meta.name.split(' ')[0].toLowerCase()}
            <span className="text-base-content/30">.</span>dev
          </a>
        </div>

        {/* Desktop nav */}
        <div className="navbar-end hidden md:flex gap-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="btn btn-ghost btn-sm text-base-content/60 hover:text-base-content"
            >
              {link}
            </a>
          ))}
          <a href={meta.resumeUrl} className="btn btn-outline btn-primary btn-sm ml-2">
            Resume
          </a>
        </div>

        {/* Mobile dropdown */}
        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 border border-base-300 rounded-box mt-3 w-52 p-2 shadow-xl"
            >
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
              <li>
                <a href={meta.resumeUrl} className="text-primary font-medium mt-1">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
