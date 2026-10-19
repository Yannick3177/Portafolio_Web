/* Semana 06 · react-router-dom: Routes + Route */
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import WeekDetail from './pages/WeekDetail.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semana/:id" element={<WeekDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* Semana 02 · HTML5 semántico: <footer> */}
      <footer className="footer">
        <div className="container flex between wrap gap-3">
          <span className="mono muted">© {new Date().getFullYear()} Ferdinand Piero Garcia Yupanqui</span>
          <span className="mono muted">UNCP · Ingeniería de Sistemas</span>
        </div>
      </footer>
    </>
  )
}
