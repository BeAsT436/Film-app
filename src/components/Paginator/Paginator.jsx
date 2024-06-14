import styles from "./Paginator.module.css"
import Button from "../common/Button/Button"

const Paginator = ({currentPage, totalPages, handlePageChange})=>{
    return(
    <div className={styles.pagination}>
        <Button disabled={currentPage === 1} onClick={()=>handlePageChange(1)}>first Page</Button>
        <Button disabled={currentPage === 1} onClick={()=>handlePageChange(currentPage-1)}>previous</Button>
        <span>{currentPage} of {totalPages}</span>
        <Button disabled={currentPage === totalPages} onClick={()=>handlePageChange(currentPage+1)}>next</Button>
        <Button disabled={currentPage === totalPages} onClick={()=>handlePageChange(currentPage + 1412)}>last Page</Button>
    </div>
)
        
}


export default Paginator