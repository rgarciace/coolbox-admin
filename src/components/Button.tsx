import styles from "../styles/Input.module.css";
import { ButtonProps } from "../typings/input";

const Button = ({ send, text }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={send}>
      {text}
    </button>
  );
};

export default Button;
