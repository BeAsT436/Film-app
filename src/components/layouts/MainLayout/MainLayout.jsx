import PropTypes from "prop-types"
import styles from "./MainLayout.module.css"

const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
MainLayout.propTypes = {children: PropTypes.node.isRequired}
export default MainLayout