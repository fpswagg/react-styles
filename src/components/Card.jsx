import { useStyleTheme } from '../hooks/useStyleTheme'
import './Card.css'

function Card({ title, value, description, icon }) {
  const { cssVars } = useStyleTheme()
  return (
    <div className="card" style={cssVars}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="card-value">{value}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}

export default Card

