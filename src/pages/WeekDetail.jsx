/* Semana 06 · useParams lee :id de /semana/:id */
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { semanas } from '../data/semanas.js'

export default function WeekDetail() {
  const { id } = useParams()
  const semana = semanas.find((s) => s.id === id)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [id])

  if (!semana) {
    return (
      <main className="detail">
        <div className="container">
          <h1 style={{ fontSize: 40 }}>Semana no encontrada</h1>
          <Link to="/#bitacora" className="btn btn-ghost mt-6">← Volver a la bitácora</Link>
        </div>
      </main>
    )
  }

  const { num, title, descripcionClase, topics, repoUrl } = semana

  return (
    <main className="detail">
      <div className="container" style={{ maxWidth: 820 }}>
        <Link to="/#bitacora" className="back">← Bitácora</Link>
        <span className="mono muted">SEM-{num}</span>
        <h1 className="mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{title}</h1>

        <h2 className="mt-8" style={{ fontSize: 20, fontWeight: 590 }}>¿Qué se vio en clase?</h2>
        <p className="mt-4" style={{ color: 'var(--text-body)' }}>{descripcionClase}</p>

        <h2 className="mt-8" style={{ fontSize: 20, fontWeight: 590 }}>Subtemas</h2>
        <div className="flex wrap gap-2 mt-4">
          {topics.map((t) => <span key={t} className="chip mono">{t}</span>)}
        </div>

        {/* Enlace permitido: repositorio de la semana en GitHub */}
        <a className="btn btn-ghost mt-8" href={repoUrl} target="_blank" rel="noopener noreferrer">
          Ver repositorio en GitHub ↗
        </a>
      </div>
    </main>
  )
}
