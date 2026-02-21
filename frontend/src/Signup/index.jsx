import React from 'react'
import './style.scss' ;
import { Card, CardBody, CardFooter, CardHeader, FormGroup, FormLabel, FormControl, Container, Col, Row} from 'react-bootstrap';

const Signup = () => {
  return (
    
    <Container fluid>
        <Row>
            <Col sm={{span: 10, offset: 1}} md= {{span: 6, offset: 3}} lg= {{span: 4, offset: 4}}>
                <Card className='Signup-card mt-5'>
                    <CardHeader>Signup </CardHeader>
                    <CardBody>
                        <FormGroup controlId= 'name' className='mb-3'>
                            <FormLabel>Name</FormLabel>
                            <FormControl placeholder="Enter name" /> 
                        </FormGroup>

                        <FormGroup controlId= 'username' className='mb-3'>
                            <FormLabel>Username</FormLabel>
                            <FormControl placeholder="Enter username" /> 
                        </FormGroup>

                        <FormGroup controlId= 'email' className='mb-3'>
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" placeholder="Enter email" /> 
                        </FormGroup>

                        <FormGroup controlId= 'password' className='mb-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Enter password" /> 
                        </FormGroup>

     
                    </CardBody>
                    <CardFooter>
                        <button>Signup</button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
        
        
    
  )
}

export default Signup