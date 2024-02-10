import './App.css';
import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
          <img src= "favicon.ico" 
              alt="" width="25" 
              height="30"/>
            <Link to="/" className='navbar-brand text-dark fw-bold mr-5'>  CLAIR</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='#home' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='#features' className='active text-uppercase'>Features</Nav.Link>
              <Nav.Link href='#about' className='active text-uppercase'>About us</Nav.Link>
              <Nav.Link href='#accordionExample' className='active text-uppercase'>FAQs</Nav.Link>
              <Nav.Link href='#contact' className='active text-uppercase'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Home />
</div>
     
  );
}

export default App;
