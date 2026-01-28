import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, Nav, Spinner, Alert } from "react-bootstrap";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("farmer");
  const [loading, setLoading] = useState(true);
  const [lands, setLands] = useState([]);
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setLands([]);      // No data yet
      setFarmers([]);    // No data yet
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-3">Loading dashboard data...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">Dashboard</h2>

      {/* Tabs */}
      <Nav variant="tabs" activeKey={activeTab} className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="farmer" onClick={() => setActiveTab("farmer")}>
            Farmer View
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="landowner" onClick={() => setActiveTab("landowner")}>
            Landowner View
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Farmer View */}
      {activeTab === "farmer" && (
        <>
          {lands.length === 0 ? (
            <Alert variant="info">
              No lands available at the moment. Please check back later.
            </Alert>
          ) : (
            <Row className="g-4">
              {/* Land cards will come here */}
            </Row>
          )}
        </>
      )}

      {/* Landowner View */}
      {activeTab === "landowner" && (
        <>
          {farmers.length === 0 ? (
            <Alert variant="info">
              No farmers available at the moment. Please check back later.
            </Alert>
          ) : (
            <Row className="g-4">
              {/* Farmer cards will come here */}
            </Row>
          )}
        </>
      )}
    </Container>
  );
}

export default Dashboard;
