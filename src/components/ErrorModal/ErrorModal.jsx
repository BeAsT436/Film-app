const ErrorModal = props => {
 if (!props.isOpen) {
    return null
 }
 return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Error</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
}
export default ErrorModal
