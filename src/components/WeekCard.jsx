/* Semana 05 · Componente funcional con Props: <WeekCard data={semana} /> */
/* Semana 06 · <Link> navega a /semana/:id sin recargar la página */
import { Link } from 'react-router-dom'

export default function WeekCard({ data }) {
  const { id, num, title, topics } = data
  return (
    <Link to={`/semana/${id}`} className="card week">
      <span className="num">SEM-{num}</span>
      <h3>{title}</h3>
      <div className="flex wrap gap-2">
        {topics.slice(0, 3).map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
      <span className="arrow">Ver detalle →</span>
    </Link>
  )
}
