import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AppNavbar(){
    const navigate=useNavigate();

    return(
        <Navbar bg="success" variant="dark" expand="md">
            <Container>
                {/*Brand*/}
                <Navbar.Brand
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    FarmSure
                </Navbar.Brand>

                {/* Toggle button for mobile */}
                <Navbar.Toggle/>

                {/* Collapsible content */}
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={()=> navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={()=> navigate("/login")}>Login</Nav.Link>
                        <Button
                            variant="outline-light"
                            size="sm"
                            onClick={()=>navigate("/login")}
                        >
                            Get Started
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar