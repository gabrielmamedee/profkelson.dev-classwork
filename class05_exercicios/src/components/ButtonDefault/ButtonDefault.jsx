import { Button } from 'react-bootstrap'
import styles from './ButtonDefault.module.css'

const ButtonDefault = ({ texto }) => {
  return (
    <Button id={styles.btnDefault}>{texto}</Button>
  )
}

export default ButtonDefault