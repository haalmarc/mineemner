import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ResForm from './ResForm';
import { useSelector, useDispatch } from 'react-redux';
import { modalclose, modalopen } from '../actions';

function ResModal({ getResources }) {
    const modalToggle = useSelector(state => state.modalToggle);
    const dispatch = useDispatch();
  
    return (
      <div>
        <Button variant="success" onClick={() => dispatch(modalopen())}>
          Legg til ressurs
        </Button>
  
        <Modal show={modalToggle} onHide={() => dispatch(modalclose())}>
          <Modal.Header closeButton>
            <Modal.Title>Legg til ressurs</Modal.Title>
          </Modal.Header>
          <Modal.Body><ResForm getResources={getResources}/></Modal.Body>
        </Modal>
      </div>
    );
  }
  

export default ResModal;