import styles from "./EmptyList.module.css"
import PropTypes from "prop-types"

const EmptyList = ({label}) => {
  return (
    <h2 className={styles.container}>{label}</h2>
  )
}
EmptyList.propTypes = {label: PropTypes.string.isRequired}
export default EmptyList