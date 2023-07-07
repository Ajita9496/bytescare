import React from "react";
import Logo from "../../Assets/icons/bytescarelogo.svg";
import Dropdown from "../../Assets/icons/Dropdown-icon.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";

function NavbarComponent() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <Container fluid style={{ marginRight: "5vw" }}>
            <Navbar.Brand href="#" style={{ marginLeft: "5vw" }}>
              {" "}
              <div className="navbar-left-icon">
                <img src={Logo} alt="drop" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">
                    <div className="navbar-items home">
                      <p>Home</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <div className=" navbar-items about">
                      <p>About</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <div className=" navbar-items product">
                      <p>Product & Services</p>
                      <img
                        src={Dropdown}
                        alt="drop"
                        style={{ marginTop: "-2vh" }}
                      />
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <div className="navbar-items blog">
                      <p>Blogs</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {" "}
                    <div className="navbar-items faq">
                      <p>FAQ's</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {" "}
                    <div className="navbar-items contact">
                      <p>Contact</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {" "}
                    <div className="navbar-items login">
                      <p>Login</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {" "}
                    <div>
                      <button className="request-demo">Request Demo</button>
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
