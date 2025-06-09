import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import TransactionForm from './TransactionForm';

function TransactionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar Lançamento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Lançamento</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mb-4'>
          <TransactionForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TransactionModal;