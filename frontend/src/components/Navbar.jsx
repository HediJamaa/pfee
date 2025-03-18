import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userCurrent } from "../JS/userSlice/userSlice";

function ColorSchemesExample() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

useEffect(() => {
  if (localStorage.getItem("token")) {
    dispatch(userCurrent());
  }
}, []);

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
        {!user && (
  <Nav.Link href="/Login" className="text-white">
    Se connecter
  </Nav.Link>
)}

            
          </Nav>
        </Navbar.Collapse>
          {user ?
  <Nav.Link href="/profil" className="text-white">
    Profil
  </Nav.Link>
:null}
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

