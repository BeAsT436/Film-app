import { Navigate } from "react-router-dom"
import styles from "./Error.module.css"

export const Error = ()=>{
    return(
        <div className={styles.error}>
            <button onClick={handleRefetchClick}></button>
            <button onClick={Navigate(-1)}></button>
        </div>
    )
}

