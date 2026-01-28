import { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
    const [identifier, setIdentifier]=useState("");
    const [error, setError]= useState("");
    const navigate=useNavigate();

    const handleSendOtp=(e)=>{
        e.preventDefault();

        if(!identifier.trim()){
            setError("Please enter a mobile number or email");
            return;
        }

        setError("");

        navigate("/Otp");
    };

    return(
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-sm" style={{width:"100%", maxWidth:"400px"}}>
                <h3 className="text-center mb-3">Login</h3>
                <p className="text-center text-muted mb-4" >
                    Enter your mobile number or email to recieve OTP
                </p>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSendOtp}>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number / Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter mobile number or email"
                            value={identifier}
                            onChange={(e)=>setIdentifier(e.target.value)}
                        />
                    </Form.Group>   

                    <Button type="submit" variant="success" className="w-100">
                        Send OTP
                    </Button>
                        
                </Form>

            </Card>
        </Container>
    )

}

export default Login;
