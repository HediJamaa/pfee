import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" className="small-navbar">
        <Navbar.Brand href="#home">
          <img
            style={{ marginTop: 5 }}
            src="/logo.png"
            alt="Logo"
            className="small-logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/nous" className="text-white">
              À propos de nous
            </Nav.Link>
            <Nav.Link href="/conseil" className="text-white">
              Conseils
            </Nav.Link>
            <Nav.Link href="/histoire" className="text-white">
              Histoires
            </Nav.Link>
            <Nav.Link href="/Adoption" className="text-white">
              S'adopter
            </Nav.Link>
            <Nav.Link href="/Login" className="text-white">
              Se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
