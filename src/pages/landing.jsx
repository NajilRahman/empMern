import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', borderRadius: '0 0 20px 20px' }}>
    <Container>
      <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const MainContent = () => (
  <Container className="my-5">
    <Row className="text-center mb-5">
      <Col>
        <h1 style={{ color: '#6a11cb', fontWeight: 'bold' }}>Welcome to the Future of Employee Management</h1>
        <p style={{ color: '#333', fontSize: '1.2rem' }}>Streamline your workforce management with our intuitive platform.</p>
       <Link to={'/emp'}> <Button variant="primary" size="lg"  style={{ borderRadius: '50px' }}>Get Started</Button></Link>
      </Col>
    </Row>

    <Row className="text-center">
      <Col md={4}>
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s' }}>
          <h3 style={{ color: '#6a11cb' }}>Feature 1</h3>
          <p style={{ color: '#555' }}>Manage employee records efficiently with our easy-to-use interface.</p>
        </div>
      </Col>
      <Col md={4}>
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s' }}>
          <h3 style={{ color: '#6a11cb' }}>Feature 2</h3>
          <p style={{ color: '#555' }}>Track employee performance and generate insightful reports.</p>
        </div>
      </Col>
      <Col md={4}>
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s' }}>
          <h3 style={{ color: '#6a11cb' }}>Feature 3</h3>
          <p style={{ color: '#555' }}>Securely store employee data with robust privacy measures.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-4" style={{ borderTop: '5px solid #6a11cb' }}>
    <Container>
      <p>&copy; 2024 Employee Management System. All rights reserved.</p>
      <p>
        <a href="#about" className="text-white">About Us</a> | 
        <a href="#contact" className="text-white"> Contact</a>
      </p>
    </Container>
  </footer>
);

export default LandingPage;
