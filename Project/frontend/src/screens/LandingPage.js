import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='Intro-text'>
                        <div>
                            <h1 className='title'> First React App Project</h1>
                            <p className='subTitle'>One place for all the notes</p>
                        </div>
                        <div className='buttonContainer'>
                            <Link to="/login">
                                <Button size="lg" className="landingbutton">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    className="landingbutton"
                                >
                                    Signup
                                </Button>
                            </Link>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage