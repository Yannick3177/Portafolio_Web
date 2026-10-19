/* Semana 01 · Enlaces mailto: (correo) y tel: (teléfono). Sin formularios. */
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, MailIcon, PhoneIcon } from './Icons.jsx'

const links = [
  { label: 'GitHub', href: 'https://github.com/Yannick3177', Icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinand-piero-garcia-yupanqui-870677418/', Icon: LinkedinIcon, external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/fuckingyannick77/', Icon: InstagramIcon, external: true },
  { label: 'Facebook', href: 'https://www.facebook.com/Piero.Garcia.553', Icon: FacebookIcon, external: true },
  { label: 'Correo personal', href: 'mailto:syre3177@gmail.com', Icon: MailIcon },
  { label: 'Correo UNCP', href: 'mailto:e_2022200417B@uncp.edu.pe', Icon: MailIcon },
]

export default function Contact() {
  return (
    <>
      {/* Semana 02 · CSS Grid responsive */}
      <div className="contact-grid">
        {links.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            className="contact-item"
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon />
            <span className="mono">{label}</span>
          </a>
        ))}
      </div>
      {/* Excepción: teléfono como enlace de texto con ícono genérico */}
      <a className="phone-row" href="tel:+51912809447">
        <PhoneIcon /> +51 912 809 447
      </a>
    </>
  )
}
