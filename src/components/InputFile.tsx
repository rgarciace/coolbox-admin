import styles from "../styles/Input.module.css";
import { InputFilePorps } from "../typings/input";

const InputFile = ({
  id,
  label,
  accept,
  save,
  files = undefined,
  multiple = false,
}: InputFilePorps) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.file}>
        <input
          className={styles.fieldFile}
          multiple={multiple}
          type="file"
          name={id}
          id={id}
          accept={accept}
          onChange={save}
        />
        <label className={styles.fieldText} htmlFor={id}>
          {!files ? "Selección de archivo (s)" : "Archivo (s) seleccionado (s)"}
        </label>
      </div>
    </div>
  );
};

export default InputFile;
