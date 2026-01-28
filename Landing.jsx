import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <>
            {/*-- Hero Section --*/}
            <Container fluid className="bg-success text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="font-weight-bold">Welcome to FarmSure</h1>
                            <p className="lead mt-3">
                                A contract farming platform connecting landowners and farmers
                                through transparent, secure agreement    
                            </p>
                            <Button 
                                variant="light"
                                size="lg"
                                onClick={()=>navigate("/login")}
                                >
                                    Get Started
                            </Button>
                        </Col>
                    </Row>  
                </Container>
            </Container>

            {/*--ROLE SELECTION--*/}
            <Container className="py-5">
                <h2 className="text-center mb-4">Who Are You?</h2>
                <Row className="g-4">
                    <Col md={6}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Farmer</Card.Title>
                                <Card.Text>
                                    Find land, sign contracts, and grow crops with guaranteed
                                    terms and income security.
                                </Card.Text>
                                <Button 
                                    variant="outline-success"
                                    onClick={()=>navigate("/login")}
                                    >
                                        Continue as Farmer
                                    </Button>
                            </Card.Body>
                        </Card>    
                    </Col>

                    <Col md={6}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Landowner</Card.Title>
                                <Card.Text>
                                    Lease your land to verified farmers and earn stable returns
                                    through contracts.
                                </Card.Text>
                                <Button
                                    variant="outline-success"
                                    onClick={() => navigate("/login")}
                                >
                                    Continue as Landowner
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Landing;
