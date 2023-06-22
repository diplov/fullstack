import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-secondary'>
                About
            </h1>
            <Container className="text-center d-flex justify-content-evenly">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjykyvE61jhc3z-qc5SKKM0NaEN-hxhXAPk0PnWw&s" />
                            <Card.Body>
                                <Card.Title>Mr. Ram </Card.Title>
                                <Card.Text>
                                    CEO
                                </Card.Text>
                                <Button variant="primary">Follow <i className='bi bi-facebook'></i></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjykyvE61jhc3z-qc5SKKM0NaEN-hxhXAPk0PnWw&s" />
                            <Card.Body>
                                <Card.Title>Mr. Ram </Card.Title>
                                <Card.Text>
                                    CEO
                                </Card.Text>
                                <Button variant="primary">Follow <i className='bi bi-facebook'></i></Button>
                            </Card.Body>
                        </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjykyvE61jhc3z-qc5SKKM0NaEN-hxhXAPk0PnWw&s" />
                            <Card.Body>
                                <Card.Title>Mr. Ram </Card.Title>
                                <Card.Text>
                                    CEO
                                </Card.Text>
                                <Button variant="primary">Follow <i className='bi bi-facebook'></i></Button>
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About