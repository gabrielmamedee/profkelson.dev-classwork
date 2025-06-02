import { Button } from 'react-bootstrap'
import styles from './ButtonDefault.module.css'

const ButtonDefault = ({ texto, type }) => {
  return (
    <Button type={type} id={styles.btnDefault}>{texto}</Button>
  )
}

export default ButtonDefault