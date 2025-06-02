import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './AlertSuccess.module.css'

const AlertSuccess = ({ mensagem }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible id={styles.alert}>
        <Alert.Heading className='h6'>{mensagem}</Alert.Heading>
      </Alert>
    );
  }
}

export default AlertSuccess