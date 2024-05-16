import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";
import Button from "../common/Button/Button";


export const Error = (props) => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  return (
    <div className={styles.error}>
        <div>{props.error}</div>
      <div>
        <Button onClick={props.handleRefetchClick}>retry</Button>
        <Button onClick={handleBackClick}>back</Button>
      </div>
    </div>
  );
};
