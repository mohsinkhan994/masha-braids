import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo.jsx'

const links = [
  ['Услуги', '#services'],
  ['О мастере', '#about'],
  ['Запись', '#booking'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header glass">
      <Logo />
      <nav className={open ? 'nav open' : 'nav'} aria-label="Главная навигация">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="button button-small nav-cta" href="#booking" onClick={() => setOpen(false)}>Записаться</a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}
