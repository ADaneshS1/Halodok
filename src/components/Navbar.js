import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navig = (props) => {
    return (
        <Navbar bg="white" expand="lg" style={{borderBottom:"1.5px solid #b3b3b3"}}>
          <Container>
            <Navbar.Brand><img src={props.image} width="180px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#" style={{color:"black", padding:"0px 15px"}}>Beranda</Nav.Link>
                <Nav.Link href="#" style={{color:"black", padding:"0px 15px"}}>Artikel</Nav.Link>
                <Nav.Link href="#" style={{color:"black", padding:"0px 15px"}}>Aplikasi</Nav.Link>
                <Nav.Link href="#" style={{color:"black", padding:"0px 15px"}}>Riwayat</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="danger">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navig;