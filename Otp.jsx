import { useState } from "react";
import { Container, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!otp.trim()) {
      setError("Please enter the OTP");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      setError("OTP must be a 6-digit number");
      return;
    }

    setLoading(true);

    // Simulated OTP verification API
    setTimeout(() => {
      if (otp !== "123456") {
        setLoading(false);
        setError("Invalid OTP. Please try again.");
        return;
      }

      setLoading(false);
      setSuccess("OTP verified successfully");

      // Redirect to dashboard
      navigate("/dashboard");
    }, 1000);
  };

  const handleResendOtp = () => {
    if (loading) return;

    setOtp("");
    setError("");
    setSuccess("A new OTP has been sent");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Verify OTP</h3>

        <p className="text-center text-muted mb-4">
          Enter the 6-digit OTP sent to your mobile/email
        </p>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleVerifyOtp}>
          <Form.Group className="mb-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="w-100 mb-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" className="me-2" />
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </Button>
        </Form>

        <div className="text-center">
          <Button
            variant="link"
            className="p-0"
            onClick={handleResendOtp}
            disabled={loading}
          >
            Resend OTP
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Otp;
