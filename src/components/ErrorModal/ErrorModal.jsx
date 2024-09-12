import styles from "./ErrorModal.module.css"
const ErrorModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles.modal}>
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
export default ErrorModal
