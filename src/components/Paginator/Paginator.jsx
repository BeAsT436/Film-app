import styles from "./Paginator.module.css"
import Button from "../common/Button/Button"

const Paginator = ({currentPage, totalPages})=>{
    return(
    <div className={styles.pagination}>
        <Button>previous</Button>
        <span>{currentPage} of {totalPages}</span>
        <Button>next</Button>
    </div>
)
        
}


export default Paginator