import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/watchlist'}>Watch list</NavLink>
        </li>
        <li>
          <NavLink to={'/watched'}>Watched</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
