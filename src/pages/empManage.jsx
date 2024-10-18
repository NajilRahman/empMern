import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';

import { Row,Col,Modal,Button } from 'react-bootstrap';
const EmployeeManagement = () => {
  const [render,setRender]=useState('')
  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    email: '',
    age: '',
    qualification: '',
  });

  const [emp,setEmp]=useState([])
  const [show, setShow] = useState(false);
  const [val,setVal]=useState(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    axios.get('http://localhost:3000/empGet')
    .then(res=>{
      setEmp(res.data)
    })
  },[val,render])



  const handelPost=()=>{
    axios.post('http://localhost:3000/empPost',employeeDetails)
    .then(res=>{
      setVal(!val)
      handleClose()
    })
  }

  return (
    <>
      <div className='container  my-5'>
        <button className='btn btn-success m-3' onClick={handleShow}>Add Employee</button>
        <Row>
         {
          emp.map(obj=>(
            <Col sm={6} md={4}>
            <Cards data={obj} render={setRender}/>
            </Col>
          ))
         }
         
        </Row>


























        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control mb-4'placeholder='name' value={employeeDetails.name} onChange={e=>{
            setEmployeeDetails({...employeeDetails,name:e.target.value})
          }}/>
           <input type="number" className='form-control mb-4'placeholder='age' value={employeeDetails.age} onChange={e=>{
            setEmployeeDetails({...employeeDetails,age:e.target.value})
          }}/>
           <input type="text" className='form-control mb-4'placeholder='email' value={employeeDetails.email} onChange={e=>{
            setEmployeeDetails({...employeeDetails,email:e.target.value})
          }}/>
           <input type="text" className='form-control mb-4'placeholder='qualification' value={employeeDetails.qualification} onChange={e=>{
            setEmployeeDetails({...employeeDetails,qualification:e.target.value})
          }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelPost}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default EmployeeManagement;
