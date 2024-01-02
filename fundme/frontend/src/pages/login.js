import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends React.Component {
    render() {
        return (
            <Form className="mb-3 mt-4">
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">

                    </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    <Form.Group as={Col} md="4">
                    
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                    
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Button type="submit" className='mt-2'>Login</Button>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    
                    </Form.Group>
                </Row>
        </Form>
        );
    }
}
export default Login;