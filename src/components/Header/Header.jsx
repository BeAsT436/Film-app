import { Nav } from '../index'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Movie time</h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header
