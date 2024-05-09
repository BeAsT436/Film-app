import styles from './Button.module.css'

const Button = ({ onClick, disabled, type = 'primary', style, children }) => {
    const classType = type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
  
    return (
      <button className={`${classType} ${styles.button}`} onClick={onClick} disabled={disabled} style={style}>
        {children}
      </button>
    )
  }
export default Button