/* Semana 07 · useState (tema claro/oscuro) y useEffect (persistencia + atributo data-theme) */
import { useEffect, useState } from 'react'
/* Semana 06 · Link de react-router-dom */
import { Link } from 'react-router-dom'
import { LogoGlyph, SunIcon, MoonIcon } from './Icons.jsx'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* modo privado */ }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    /* Semana 02 · HTML5 semántico: <header> + <nav> */
    <header className="nav">
      <nav className="container nav-inner" aria-label="Principal">
        <Link to="/" className="logo"><LogoGlyph /> Piero García</Link>
        <div className="nav-links">
          <Link className="hide-sm" to="/#about">Sobre mí</Link>
          <Link className="hide-sm" to="/#stack">Stack</Link>
          <Link className="hide-sm" to="/#certificados">Certificados</Link>
          <Link className="hide-sm" to="/#proyectos">Proyectos</Link>
          <Link className="hide-sm" to="/#bitacora">Bitácora</Link>
          <Link className="nav-cta" to="/#contacto">Contacto</Link>
          <button className="icon-btn" onClick={toggle} aria-label="Cambiar tema" style={{ marginLeft: 8 }}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}
