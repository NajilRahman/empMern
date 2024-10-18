import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function Cards({ data, render }) {
  const [show, setShow] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState(data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePost = () => {
    axios.put(`http://localhost:3000/empUpdate/${data._id}`, employeeDetails)
      .then(res => {
        render(res);
        handleClose();
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/empDelete/${data._id}`)
      .then(res => {
        render(res);
        handleClose();
      });
  };

  return (
    <div className="card text-center" style={{
      border: 'none',
      borderRadius: '15px',
      margin: '10px',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      color: '#fff'
    }}>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.email}</p>
        <p className="card-text">{data.age} years old</p>
        <p className="card-text">{data.qualification}</p>
        <div>
          <Button variant="light" className="mx-2" onClick={handleShow}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          color: '#fff',
          border: 'none',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '0 0 15px 15px',
          padding: '30px',
        }}>
          <input 
            type="text" 
            className='form-control mb-3' 
            placeholder='Name' 
            value={employeeDetails.name} 
            onChange={e => setEmployeeDetails({ ...employeeDetails, name: e.target.value })} 
            style={{ borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
          />
          <input 
            type="number" 
            className='form-control mb-3' 
            placeholder='Age' 
            value={employeeDetails.age} 
            onChange={e => setEmployeeDetails({ ...employeeDetails, age: e.target.value })} 
            style={{ borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
          />
          <input 
            type="text" 
            className='form-control mb-3' 
            placeholder='Email' 
            value={employeeDetails.email} 
            onChange={e => setEmployeeDetails({ ...employeeDetails, email: e.target.value })} 
            style={{ borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
          />
          <input 
            type="text" 
            className='form-control mb-3' 
            placeholder='Qualification' 
            value={employeeDetails.qualification} 
            onChange={e => setEmployeeDetails({ ...employeeDetails, qualification: e.target.value })} 
            style={{ borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
          />
        </Modal.Body>
        <Modal.Footer style={{ border: 'none' }}>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handlePost}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cards;
