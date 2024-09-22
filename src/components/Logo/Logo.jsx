import { Link } from 'react-router-dom'

import styles from './Logo.module.css'

const Logo = () => {
  const title = 'Movie time'
  const words = title.split(' ')

  return (
    <div className={styles.logo}>
      <Link to={'/'}>
        <h1>
          {words[0]} <span>{words[1].toUpperCase()}</span>
        </h1>
      </Link>
    </div>
  )
}

export default Logo