export default function CastCard({ name, role, text, image, fit }) {
  return (
    <li className={fit === 'contain' ? 'cast cast--contain' : 'cast'}>
      <img src={image} alt={`${role} ${name}`} loading="lazy" decoding="async" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {text && <p className="note">{text}</p>}
    </li>
  )
}
