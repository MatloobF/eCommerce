import React from 'react'
import './style.scss' ;
import { Card, CardBody, CardFooter, CardHeader, FormGroup, FormLabel, FormControl, Container, Col, Row} from 'react-bootstrap';

const Login = () => {
  return (
    <>
    <Container fluid>
        <Row>
            <Col sm={{span: 10, offset: 1}} md= {{span: 6, offset: 3}} lg= {{span: 4, offset: 4}}>
                <Card className='login-card mt-5'>
                    <CardHeader>Login </CardHeader>
                    <CardBody>
                        <FormGroup controlId= 'username' className='mb-3'>
                            <FormLabel>Username</FormLabel>
                            <FormControl placeholder="Enter username" /> 
                        </FormGroup>

                        <FormGroup controlId= 'password' className='mb-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Enter password" /> 
                        </FormGroup>
                    </CardBody>
                    <CardFooter>
                        <button>Login</button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
        
        
    </>
  )
}

export default Login