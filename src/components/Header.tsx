import styles from '../styles/Header.module.css';
import { HeaderProps } from '../typings/header'

const Header = ({title}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div>Other information</div>
    </div>
  )
}

export default Header