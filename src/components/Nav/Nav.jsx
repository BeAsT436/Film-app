import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  const activeLink = useCallback(
    ({ isActive }) => (isActive ? styles.active : 'none'),
    [],
  )

  return (
    <nav className={styles.navigation}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? styles.open : ''}>
        <li>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlist" className={activeLink}>
            Watchlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/watched" className={activeLink}>
            Watched
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={activeLink}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav