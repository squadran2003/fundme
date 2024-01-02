import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends React.Component {
    // access the email and password fields
    // send a POST request to the backend
    // receive a token
    // store the token in localStorage
    // redirect to home page
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    // get the email and password from the form
    // send a POST request to the backend
    // receive a token
    // store the token in localStorage
    // redirect to home page
    handleSubmit(event) {
        event.preventDefault();

        // send a POST request to the backend
        fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: event.target.username.value, password: event.target.password.value}),
        })
        .then(response => response.json())
        .then(data => {
            // store the token in localStorage
            localStorage.setItem('token', data.access);
            console.log('Success:', data);
            // redirect to home page
            window.location.href = '/';
        })
    }
    render() {
        return (
            <Form className="mb-3 mt-4" onSubmit={this.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">

                    </Form.Group>
                        <Form.Group as={Col} md="4" controlId="username">
                            <Form.Label>Username</Form.Label>
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
                    <Form.Group as={Col} md="4" controlId="password">
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