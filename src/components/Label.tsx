import styles from '../styles/Input.module.css';
import { LabelProps } from "../typings/input"

const Label = ({id, label}: LabelProps) => {
  return (
    <label className={styles.label} htmlFor={id}>{label}</label>
  )
}

export default Label