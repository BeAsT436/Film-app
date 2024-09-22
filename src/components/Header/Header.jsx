import { Nav, Logo } from '../index'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header