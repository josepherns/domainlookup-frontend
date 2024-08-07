import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button, Table, Alert } from 'react-bootstrap';

function App() {
    const [domain, setDomain] = useState('');
    const [infoType, setInfoType] = useState('domain');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const handleSubmit = async () => {
        setError(null);
        try {
            const res = await fetch(`${apiUrl}/whois`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ domain, type: infoType }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            setError(error.message);
            setResponse(null);
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Domain Lookup</h1>
            <Row className="mb-4">
                <Col md={6}>
                    <Form.Group controlId="formDomain">
                        <Form.Control
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="Enter domain name"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="formInfoType">
                        <Form.Control
                            as="select"
                            value={infoType}
                            onChange={(e) => setInfoType(e.target.value)}
                        >
                            <option value="domain">Domain Information</option>
                            <option value="contact">Contact Information</option>
                            <option value="both">Both</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={3} className="d-flex align-items-end">
                    <Button variant="primary" onClick={handleSubmit}>Lookup</Button>
                </Col>
            </Row>
            {error && <Alert variant="danger">Error: {error}</Alert>}
            {response && (
                <div>
                    {/* Show Domain Information if infoType is 'domain' or 'both' */}
                    {(infoType === 'domain' || infoType === 'both') && response.domain && (
                        <div>
                            <h2>Domain Information</h2>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>Domain Name</th>
                                        <td>{response.domain.domainName}</td>
                                    </tr>
                                    <tr>
                                        <th>Registrant Name</th>
                                        <td>{response.domain.registrantName}</td>
                                    </tr>
                                    <tr>
                                        <th>Created Date</th>
                                        <td>{response.domain.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Expires Date</th>
                                        <td>{response.domain.expiresDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Age of Domain</th>
                                        <td>{response.domain.ageOfDomain}</td>
                                    </tr>
                                    <tr>
                                        <th>Name Servers</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                {response.domain.nameServers.map((ns, index) => (
                                                    <li key={index}>{ns.host} - {ns.address}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}

                    {/* Show Contact Information if infoType is 'contact' or 'both' */}
                    {(infoType === 'contact' || infoType === 'both') && response.contact && (
                        <div>
                            <h2>Contact Information</h2>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>Registrant Name</th>
                                        <td>{response.contact.registrantContactName}</td>
                                    </tr>
                                    <tr>
                                        <th>Technical Contact Name</th>
                                        <td>{response.contact.technicalContactName}</td>
                                    </tr>
                                    <tr>
                                        <th>Administrative Contact Name</th>
                                        <td>{response.contact.administrativeContactName}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact Email</th>
                                        <td>{response.contact.contactEmail}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
}

export default App;
