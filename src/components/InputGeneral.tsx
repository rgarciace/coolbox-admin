import styles from '../styles/Input.module.css';
import { InputGeneralProps } from "../typings/input";
import Field from './Field';
import Label from './Label';

const InputGeneral = ({ id, label, placeholder, type, value, setValue }: InputGeneralProps) => {
  return (
    <div className={styles.container}>
      <Label id={id} label={label}/>
      <Field id={id} placeholder={placeholder} type={type} value={value} setValue={setValue}/>
    </div>
  );
};

export default InputGeneral;
