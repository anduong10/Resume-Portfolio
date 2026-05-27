import { meta } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 section-padding border-t border-base-300 bg-base-100 flex justify-center">
      <p className="text-base-content/40 text-xs font-mono">
        Designed &amp; built by{' '}
        <span className="text-primary">{meta.name}</span>
        {' · '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
