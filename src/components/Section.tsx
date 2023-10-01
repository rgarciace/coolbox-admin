import styles from "../styles/Section.module.css";
import { SectionProps } from "../typings/section";

const Section = ({ width, title, description, children }: SectionProps) => {
  return (
    <div className={styles.container} style={{width: width+'%'}}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
