import styles from "../styles/Input.module.css";
import { FieldProps } from "../typings/input";

const Field = ({ id, type, placeholder, value, setValue }: FieldProps) => {
  return (
    <input
      className={styles.field}
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Field;
