/* Semana 07 · useEffect (scroll a ancla) y useState (datos de la API de GitHub) */
import { useEffect, useState } from 'react'
/* Semana 06 · useLocation para leer el hash (#about, #stack...) */
import { useLocation } from 'react-router-dom'
import ParticlesCanvas from '../components/ParticlesCanvas.jsx'
import WeekCard from '../components/WeekCard.jsx'
import Contact from '../components/Contact.jsx'
import { AwardIcon } from '../components/Icons.jsx'
import { semanas } from '../data/semanas.js'
import { proyectos } from '../data/proyectos.js'
import { certificados } from '../data/certificados.js'
import { stack } from '../data/stack.js'

const BIO =
  'Soy Ferdinand Piero Garcia Yupanqui, estudiante de IX semestre de Ingeniería de Sistemas en la UNCP. Me apasiona el desarrollo web fullstack (React, Django) y la ciberseguridad. Disfruto construir soluciones limpias, optimizadas y seguras, aplicando buenas prácticas de ingeniería. Mi objetivo es seguir aprendiendo y aportar valor en proyectos reales.'

export default function Home() {
  const { hash } = useLocation()
  const [gh, setGh] = useState({ status: 'loading', repos: null })

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const r = await fetch('https://api.github.com/users/Yannick3177', { signal: controller.signal })
        if (!r.ok) throw new Error(r.status)
        const d = await r.json()
        setGh({ status: 'ok', repos: d.public_repos })
      } catch (e) {
        if (e.name !== 'AbortError') {
          setGh({ status: 'error', repos: null })
        }
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  const ghLabel =
    gh.status === 'ok' ? `${gh.repos} repos públicos en GitHub`
    : gh.status === 'loading' ? 'consultando GitHub…'
    : 'GitHub no disponible'

  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <ParticlesCanvas />
        
        <div className="container flex gap-8" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div className="hero-image" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              padding: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #a3e635, #3b82f6)', 
              boxShadow: '0 0 40px rgba(163, 230, 53, 0.2)', 
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(163, 230, 53, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(163, 230, 53, 0.2)';
            }}
            >
              <img 
                src="/perfil.png" 
                alt="Ferdinand Piero" 
                style={{ 
                  width: '320px', 
                  height: '320px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '4px solid #050505', 
                  display: 'block'
                }} 
              />
            </div>
          </div>

          <div style={{ flex: '2 1 400px' }}>
            
            {/* TÍTULO DEL HERO MODIFICADO */}
            <h1 id="hero-title" className="mt-6" style={{ textTransform: 'uppercase', lineHeight: '1.1' }}>
              PORTAFOLIO DE<br />FERDINAND PIERO<br />GARCIA YUPANQUI
            </h1>
            
          </div>
          
        </div>
      </section>

            {/* ---------- Sobre mí ---------- */}
      <section id="about" aria-labelledby="about-title">
        <div className="container">
          <div className="section-head">
            <h2 id="about-title">Sobre mí</h2>
          </div>
          
          {/* Contenedor Flex para poner Texto e Imagen lado a lado */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Columna del Texto */}
            <div style={{ flex: '1 1 500px' }}>
              <p style={{ fontSize: 20, lineHeight: 1.5, letterSpacing: '-0.012em', color: 'var(--text-body)' }}>
                {BIO}
              </p>
            </div>

            {/* Columna de la Imagen de la Facultad */}
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/facultad.jpg" 
                alt="Universidad Nacional del Centro del Perú" 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border)', 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  objectFit: 'cover'
                }} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* ---------- Stack ---------- */}
      <section id="stack" aria-labelledby="stack-title">
        <div className="container">
          <div className="section-head">
            {/* Eyebrow eliminado */}
            <h2 id="stack-title">Stack técnico</h2>
          </div>
          <div className="grid grid-3">
            {stack.map(({ group, items }) => (
              <div key={group} className="card stack-group">
                <span className="mono muted">{group}</span>
                <div className="stack-items">
                  {items.map((it) => <span key={it} className="tag-card">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Certificados ---------- */}
      <section id="certificados" aria-labelledby="cert-title">
        <div className="container">
          <div className="section-head">
            {/* Eyebrow eliminado */}
            <h2 id="cert-title">Certificados</h2>
          </div>
          <div className="grid grid-4">
            {certificados.map((c) => (
              <article key={c.id} className="card cert">
                <AwardIcon />
                <span>{c.title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proyectos ---------- */}
      <section id="proyectos" aria-labelledby="proj-title">
        <div className="container">
          <div className="section-head">
            {/* Eyebrow eliminado */}
            <h2 id="proj-title">Proyectos</h2>
            <span className="mono muted">{ghLabel}</span>
          </div>
          <div className="grid grid-2">
            {proyectos.map((p) => (
              <article key={p.id} className="card project">
                <span className="mono muted">{p.code}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="chip mono">{t}</span>)}
                </div>
                
                {p.githubUrl && (
                  <a 
                    href={p.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mono" 
                    style={{ display: 'inline-block', marginTop: '16px', color: 'var(--accent)', textDecoration: 'underline' }}
                  >
                    Ver Repositorio ↗
                  </a>
                )}
                
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Bitácora ---------- */}
      <section id="bitacora" aria-labelledby="week-title">
        <div className="container">
          <div className="section-head">
            {/* Eyebrow eliminado */}
            <h2 id="week-title">Bitácora</h2>
          </div>
          <div className="grid grid-3">
            {semanas.map((s) => <WeekCard key={s.id} data={s} />)}
          </div>
        </div>
      </section>

      {/* ---------- Contacto ---------- */}
      <section id="contacto" aria-labelledby="contact-title">
        <div className="container">
          <div className="section-head">
            {/* Eyebrow eliminado */}
            <h2 id="contact-title">Contacto</h2>
          </div>
          <Contact />
        </div>
      </section>
    </main>
  )
}