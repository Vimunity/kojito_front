import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
function ColorSchemesExample() {
  return (
    <><div className="video">
    <div style={{paddingTop:"1rem"}}></div>
      <Navbar className='navheader'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Our Story</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Follow us</Nav.Link>            
            <Nav.Link href="#features">Map</Nav.Link> 
            <Nav.Link href="#features">Content us</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;